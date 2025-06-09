import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";

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
//const pointLight = new THREE.PointLight(0xffffff, 5, 0);
//scene.add(pointLight);
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

// Cilindro wireframe
const radius = 4;
const height = 4;
const radialSegments = 64;
const heightSegments = 16; //negli oggetti è 16, prova diversa nel caso non si possa fare scritte ondulate

const cylinderGeo = new THREE.CylinderGeometry(radius, radius, height, radialSegments, heightSegments, true);
const cylinderEdges = new THREE.EdgesGeometry(cylinderGeo);
const cylinderLines = new THREE.LineSegments(
  cylinderEdges,
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
scene.add(cylinderLines);

for (let i = 0; i <= heightSegments; i++) {
  const y = (i / heightSegments - 0.5) * height;
  const ringGeo = new THREE.CircleGeometry(radius, radialSegments);
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
  "https://wddc-groupieml.webflow.io/mosqe",
  "https://esempio.com/cd2",
  "https://esempio.com/cd3",
  "https://esempio.com/cd4",
  "https://esempio.com/cd5",
  "https://esempio.com/cd6",
];

// CD loader
const loader = new GLTFLoader();
const cdGroup = new THREE.Group();
scene.add(cdGroup);

// Config dei CD
const cdConfigs = [
  {
    path: '/modelli3Dcds/cd1.glb',
    position: new THREE.Vector3(-3, -0.61, 0),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, 0, 0),
  },
  {
    path: '/modelli3Dcds/cd2.glb',
    position: new THREE.Vector3(-1.5, -0.61, -2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, -Math.PI / 3, 0),
  },
  {
    path: '/modelli3Dcds/cd3.glb',
    position: new THREE.Vector3(1.5, -0.61, -2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, -2 * Math.PI / 3, 0),
  },
  {
    path: '/modelli3Dcds/cd4.glb',
    position: new THREE.Vector3(3.0, -0.61, 0.0),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, Math.PI, 0),
  },
  {
    path: '/modelli3Dcds/cd5.glb',
    position: new THREE.Vector3(1.5, -0.61, 2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, 2 * Math.PI / 3, 0),
  },
  {
    path: '/modelli3Dcds/cd6.glb',
    position: new THREE.Vector3(-1.5, -0.61, 2.6),
    scale: new THREE.Vector3(0.6, 0.6, 0.6),
    rotation: new THREE.Euler(0, Math.PI / 3, 0),
  },
];

// Caricamento modelli
cdConfigs.forEach((config, index) => {
  loader.load(
    config.path,
    (gltf) => {
      const model = gltf.scene;
      model.position.copy(config.position);
      model.scale.copy(config.scale);
      model.rotation.copy(config.rotation);
      model.userData.index = index;
      model.userData.oscillation = {
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2,
      };
      cdGroup.add(model);
    },
    undefined,
    (error) => {
      console.error(`Errore nel caricamento di ${config.path}:`, error);
    }
  );
});

// CLICK handler
window.addEventListener("click", (event) => {
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

// HOVER → cursore
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cdGroup.children, true);
  document.body.style.cursor = intersects.length > 0 ? "pointer" : "default";
});



// ANIMAZIONE
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  const time = performance.now() * 0.001;
  cdGroup.children.forEach((model) => {
    const osc = model.userData.oscillation;
    //model.rotation.x += Math.sin(time + osc.x) * 0.001;
    model.rotation.y += Math.sin(time + osc.y) * 0.001;
    model.rotation.z += Math.sin(time + osc.z) * 0.001;
  });

  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
