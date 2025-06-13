import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import {Text} from 'troika-three-text'

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 0, 100);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luci
scene.add(new THREE.AmbientLight(0xffffff, 6));
//const pointLight = new THREE.PointLight(0xffffff, 15, 0, 5);
//scene.add(pointLight);
//pointLight.position.set(0, 0, 0);
const dirLight = new THREE.DirectionalLight(0xffffff, 10);
dirLight.position.set(0, 5, 0);
scene.add(dirLight);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = -0.3;
controls.target.set(-0.0001, 0, 0);
controls.update();

// Creazione del cilindro wireframe segmentato
const cylinderRadius = 4;
const cylinderHeight = 4;
const radialSegments = 50;
const heightSegments = 13;

// Creazione del cilindro principale con segmenti verticali
const cylinderGeo = new THREE.CylinderGeometry(
  cylinderRadius,
  cylinderRadius,
  cylinderHeight,
  radialSegments,
  heightSegments,
  true
);

// Estrazione dei bordi del cilindro
const cylinderEdges = new THREE.EdgesGeometry(cylinderGeo);
const cylinderLines = new THREE.LineSegments(
  cylinderEdges,
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
scene.add(cylinderLines);

// Aggiunta delle linee orizzontali
for (let i = 0; i <= heightSegments; i++) {
  const y = (i / heightSegments - 0.5) * cylinderHeight - 0.1; // -0.1 sposta le righe sull'asse Y
  const ringGeo = new THREE.CircleGeometry(cylinderRadius, radialSegments);
  ringGeo.rotateX(Math.PI / 2);
  const ringEdges = new THREE.EdgesGeometry(ringGeo);
  const ringLines = new THREE.LineSegments(
    ringEdges,
    new THREE.LineBasicMaterial({ color: 0xffffff })
  );
  ringLines.position.y = y;
  scene.add(ringLines);
}

const cdUrls = [
  "https://wddc-groupieml.webflow.io/canzoni-qholla",
  "https://wddc-groupieml.webflow.io/mosqe",
  "https://wddc-groupieml.webflow.io/canzoni-manosx",
  "https://wddc-groupieml.webflow.io/subway",
  "https://wddc-groupieml.webflow.io/canzoni-la-manina",
  "https://wddc-groupieml.webflow.io/canzoni-legno",
];

// CD loader
const loader = new GLTFLoader();
const cdGroup = new THREE.Group();
scene.add(cdGroup);



// Config dei CD
const cdConfigs = [
  {
    path: '/modelli3Dcds/CD_Qholla.glb',
    position: new THREE.Vector3(-3, 0.0, 0.05),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, 0, 0),
    name: 'QHOLLA',
  },
  {
    path: '/modelli3Dcds/CD_Mosque.glb',
    position: new THREE.Vector3(-1.5, 0, -2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, -Math.PI / 3, 0),
    name: 'MOSQUE',
  },
  {
    path: '/modelli3Dcds/CD_Manosx.glb',
    position: new THREE.Vector3(1.5, 0, -2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, -2 * Math.PI / 3, 0),
    name: 'MANO SX',
  },
  {
    path: '/modelli3Dcds/CD_Subway.glb',
    position: new THREE.Vector3(3.0, 0, 0.0),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, Math.PI, 0),
    name: 'SUBWAY',
  },
  {
    path: '/modelli3Dcds/CD_Lamanina.glb',
    position: new THREE.Vector3(1.5, 0, 2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, 2 * Math.PI / 3, 0),
    name: 'LA MANINA',
  },
  {
    path: '/modelli3Dcds/CD_Legno.glb',
    position: new THREE.Vector3(-1.5, 0, 2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, Math.PI / 3, 0),
    name: 'LEGNO',
  },
];

cdConfigs.forEach((config, index) => {
  loader.load(
    config.path,
    (gltf) => {
      const model = gltf.scene;

      // Calcola bounding box per centrare il modello
      model.traverse(child => {
        if (child.isMesh) {
          child.geometry.computeBoundingBox();
        }
      });

      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      const size = new THREE.Vector3();
      box.getSize(size);

      // Crea un wrapper centrato
      const wrapper = new THREE.Group();
      model.position.y -= center.y; // centra verticalmente
      wrapper.add(model);

      // Applica config al wrapper (non al modello interno)
      wrapper.position.copy(config.position);
      wrapper.scale.copy(config.scale);
      wrapper.rotation.copy(config.rotation);
      wrapper.userData.originalScale = config.scale.x;
      wrapper.userData.index = index;
      wrapper.userData.name = config.name || `CD ${index + 1}`;
      wrapper.userData.oscillation = {
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2,
      };

      cdGroup.add(wrapper);
    },
    undefined,
    (error) => {
      console.error(`Errore nel caricamento di ${config.path}:`, error);
    }
  );
});

let currentlyHovered = null;

let mouseDownPos = new THREE.Vector2();
let isDragging = false;

window.addEventListener("mousedown", (event) => {
  mouseDownPos.set(event.clientX, event.clientY);
  isDragging = false;
});

window.addEventListener("mousemove", (event) => {
  const dx = event.clientX - mouseDownPos.x;
  const dy = event.clientY - mouseDownPos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 5) {
    isDragging = true;
  }
});

// CLICK handler
window.addEventListener("click", (event) => {

  if (isDragging) {
    mouse.clicked = false;
    return; // annulla il click se era un drag
  }

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cdGroup.children, true);

  if (intersects.length > 0) {
    const selected = intersects[0].object;

    let modelClicked = selected;
    while (modelClicked.parent && modelClicked.parent !== cdGroup) {
      modelClicked = modelClicked.parent;
    }

    const index = modelClicked.userData.index;
    const targetUrl = cdUrls[index];

    // Disabilita controlli
    controls.enabled = false;

// Nuova posizione: centro della scena, stessa altezza Y
const targetPos = new THREE.Vector3(0, modelClicked.position.y, 0);

// Nuova rotazione: guarda verso la camera (che è anch'essa in 0,0,0)
//const angleToCamera = Math.atan2(camera.position.x - targetPos.x, camera.position.z - targetPos.z);
// Anima posizione e rotazione
gsap.to(modelClicked.position, {
  x: targetPos.x,
  y: targetPos.y,
  z: targetPos.z,
  duration: 1,
  ease: "power2.inOut"
});

/*gsap.to(modelClicked.rotation, {
  y: angleToCamera,
  duration: 2,
  ease: "power2.inOut"
});*/

    // Crea cono nero
    const coneGeometry = new THREE.ConeGeometry(3.8, 10, 64, 1, true);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, transparent: true, opacity: 0 });
    const fadeCone = new THREE.Mesh(coneGeometry, coneMaterial);

    fadeCone.position.copy(camera.position);
    fadeCone.quaternion.copy(camera.quaternion);
    scene.add(fadeCone);

    // Anima l'opacità del cono nero
    gsap.to(coneMaterial, {
      opacity: 1,
      duration: 0.95,
      ease: "power1.inOut"
    });

    // Dopo l’animazione: apri URL
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200); // leggermente dopo fine animazione
  }
});


const cdNameDiv = document.getElementById("cd-name"); //per prendere il div del nome CD


// HOVER → cursore
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(cdGroup.children, true);

  if (intersects.length > 0) {
    document.body.style.cursor = "pointer";

    let hovered = intersects[0].object;
    while (hovered.parent && hovered.parent !== cdGroup) {
      hovered = hovered.parent;
    }

    currentlyHovered = hovered;

    // Mostra nome
    const name = hovered.userData.name;
    cdNameDiv.textContent = name;
    cdNameDiv.style.opacity = 1;
  } else {
    document.body.style.cursor = "default";
    currentlyHovered = null;

    // Nascondi nome
    cdNameDiv.style.opacity = 0;
  }
});


window.addEventListener('mousedown', () => {
  mouse.clicked = true;
});

//mettiamo i testi della NavBar
//TESTI NAVBAR
const navLabels = []; // salva tutti i gruppi per l'animazione
const clickableNavs = []; // oggetti cliccabili
const labelRadius = 3.3;

// Definisci le etichette con angolo e link
const labelsData = [//questi dati non modificano nulla, perché le modifiche vanno fatte nella parte responsive
  { text: 'ABOUT', angle: Math.PI * 0.1, y: -0.97, link: '/about' }, // basso
  { text: 'FLATFADE', angle: -Math.PI * 0.1, y: -0.97, link: 'https://wddc-groupieml.webflow.io/psiche' }, // basso
  { text: 'PSICHE', angle: -Math.PI * 0.04, y: 1.06, link: 'https://wddc-groupieml.webflow.io/psiche?skipTunnel=true' }, // alto
  { text: 'SPECCHIO', angle: Math.PI * 0.04, y: 1.06, link: 'https://wddc-groupieml.webflow.io/specchio' }, // alto
];

labelsData.forEach(data => {
  const group = new THREE.Group();

  // Troika Text
  const label = new Text();
  label.text = data.text;
  label.font = "/Fonts/ClashGrotesk/ClashGrotesk-Regular.ttf";
  label.fontSize = 0.07;
  label.color = data.text === "PSICHE" ? 0xaaaaaa : 0xffffff;
  label.anchorX = 'center';
  label.anchorY = 'middle';
  label.outlineWidth = 0.0001; //  0.005 ≈ 1px 
  label.outlineColor = 0xffffff; // colore del bordo
  label.userData.link = data.link;
  label.sync();

  // Sfondo nero
  const bgGeo = new THREE.PlaneGeometry(0.36, 0.12);
  const bgMat = new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 1, transparent: true });
  const bg = new THREE.Mesh(bgGeo, bgMat);
  bg.position.z = -0.01;

  group.add(bg);
  group.add(label);


  // Posizione curva sul cilindro
  const angle = data.angle;
  group.userData.originalAngle = angle; // salva l'angolo originale
  group.position.x = Math.cos(angle) * labelRadius;
  group.position.z = Math.sin(angle) * labelRadius;
  group.position.y = data.y;

  group.userData.link = data.link;

  scene.add(group);
  group.visible = true; 
  navLabels.push(group);
  clickableNavs.push(group);
});

//per rendere responsive le etichette della NavBar
function updateNavLabelAngles() {
  const isMobile = window.innerWidth < 768;

  navLabels.forEach((group, index) => {
    const data = labelsData[index];
    
    // Calcolo nuovo angolo solo se la y è negativa (etichette in basso)
    let baseAngle = data.text === 'ABOUT' ? Math.PI * 0.14 : 
                    data.text === 'FLATFADE' ? -Math.PI * 0.14 :
                    data.text === 'SPECCHIO' ? Math.PI * 0.04 :
                    data.text === 'PSICHE' ?-Math.PI * 0.04: 0;

    const newAngle = isMobile && data.y < 0 ? baseAngle * 0.6 : baseAngle;

    data.angle = newAngle;
    group.userData.originalAngle = newAngle;
  });
}

//rende cliccabili le etichette della navbar
function updateNavInteractions() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(clickableNavs, true);

  if (intersects.length > 0) {
    const hovered = intersects[0].object.parent; // Prendiamo il gruppo

    document.body.style.cursor = "pointer";

    clickableNavs.forEach(group => {
      const scaleTarget = group === hovered ? 1.1 : 1;
      group.scale.lerp(new THREE.Vector3(scaleTarget, scaleTarget, scaleTarget), 0.1);
    });

    // Click handling (solo se è stato cliccato e non solo hoverato)
    if (mouse.clicked) {
  const link = hovered.userData.link;
  if (link) {
    controls.enabled = false;

    // Crea cono nero davanti alla camera
    const coneGeometry = new THREE.ConeGeometry(3.8, 10, 64, 1, true);
    const coneMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    const fadeCone = new THREE.Mesh(coneGeometry, coneMaterial);
    fadeCone.position.copy(camera.position);
    fadeCone.quaternion.copy(camera.quaternion);
    scene.add(fadeCone);

    // Fade in
    gsap.to(coneMaterial, {
      opacity: 1,
      duration: 0.95,
      ease: "power1.inOut"
    });

    // Dopo animazione → vai alla pagina
    setTimeout(() => {
      window.location.href = link;
    }, 1200);
  }
}

  } else {
    document.body.style.cursor = "default";
    clickableNavs.forEach(group => {
      group.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    });
  }
  mouse.clicked = false; // Reset dopo il click
}



// ANIMAZIONE
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  const time = performance.now() * 0.001;
  cdGroup.children.forEach((model) => {
  const osc = model.userData.oscillation;

  // Oscillazione leggera
  model.rotation.y += Math.sin(time + osc.y) * 0.001;
  model.rotation.z += Math.sin(time + osc.z) * 0.001;

  // Target scale
  const base = model.userData.originalScale;
  const targetScale = (model === currentlyHovered) ? base * 1.1 : base;

  // Interpolazione fluida
  model.scale.x = THREE.MathUtils.lerp(model.scale.x, targetScale, 0.1);
  model.scale.y = THREE.MathUtils.lerp(model.scale.y, targetScale, 0.1);
  model.scale.z = THREE.MathUtils.lerp(model.scale.z, targetScale, 0.1);
});


  // Calcola l'angolo Y della camera (orientamento orizzontale) fa seguire i label alla camera
  const cameraQuaternion = camera.quaternion.clone();
  const euler = new THREE.Euler().setFromQuaternion(cameraQuaternion, 'YXZ');
  const cameraRotationY = euler.y;
  // Applica una rotazione inversa alle label per farle "seguire" la camera
  navLabels.forEach(group => {
    const angle = group.userData.originalAngle;
    const radius = labelRadius;
    const totalAngle = angle - cameraRotationY + Math.PI*1.5 //il meno -cameraRotationY serve per farle ruotare nell'altro senso come con gli orbit controls const totalAngle = angle - cameraRotationY + Math.PI*0.5;

    group.position.x = Math.cos(totalAngle) * radius;
    group.position.z = Math.sin(totalAngle) * radius;

    group.lookAt(0, group.position.y, 0); // Fa sì che guardino sempre il centro
  });
  updateNavLabelAngles()
  updateNavInteractions()

  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
