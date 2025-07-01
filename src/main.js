import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


// SCENA BASE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 40;

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LUCI
// Luce ambientale forte e uniforme, visibile anche con MeshBasicMaterial
const ambientLight = new THREE.AmbientLight(0xffffff, 10); // puoi salire fino a 4 se vuoi
scene.add(ambientLight);

// Aggiungo una luce direzionale debole solo per dare un minimo di profondità
const lightFront = new THREE.DirectionalLight(0xffffff, 10);
lightFront.position.set(0, 0, 20);
scene.add(lightFront);

// E una luce soft da dietro per contorni (rim light)
const lightBack = new THREE.DirectionalLight(0xccccff, 5);
lightBack.position.set(0, 0, -20);
scene.add(lightBack);



// DETERMINA IL DISPOSITIVO UNA SOLA VOLTA
const isMobile = window.matchMedia("(max-width: 767px)").matches;
const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches;

// Crea lo spazio scrollabile in base al device
const scrollSpace = document.createElement("div");
scrollSpace.id = "scroll-space";

if (isMobile) {
  scrollSpace.style.height = "800px";
} else if (isTablet) {
  scrollSpace.style.height = "500px";
} else {
  scrollSpace.style.height = "0px"; // desktop = no scroll
}

document.body.appendChild(scrollSpace);

// MODELLI DA ANIMARE
const rotatingModels = [];

// DATI MODELLI
const modelsData = [
  {
    path: "/models/katrin.glb",
    desktop: { position: [-5.5, 1.6, 0], scale: [1.2, 1.2, 1.2] },
    tablet: { position: [-2, 2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, 1.6, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/gio.glb",
    desktop: { position: [0, 1.6, 0], scale: [1.3, 1.3, 1.3] },
    tablet: { position: [2, 2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -2, 0], scale: [1.1, 1.1, 1.1] }
  },
  {
    path: "/models/rebecca.glb",
    desktop: { position: [5.5, 1.6, 0], scale: [1, 1, 1] },
    tablet: { position: [-2, 0, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -4, 0], scale: [0.8, 0.8, 0.8] }
  },
  {
    path: "/models/marta.glb",
    desktop: { position: [-5.5, -2.4, 0], scale: [0.9, 0.9, 0.9] },
    tablet: { position: [2, 0, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -8.6, 0], scale: [0.7, 0.7, 0.7] }
  },
  {
    path: "/models/simon.glb",
    desktop: { position: [0, -2.4, 0], scale: [0.9, 0.9, 0.9] },
    tablet: { position: [-2, -2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -11.6, 0], scale: [0.7, 0.7, 0.7] }
  },
  {
    path: "/models/fra.glb",
    desktop: { position: [5.5, -2.4, 0], scale: [1, 1, 1] },
    tablet: { position: [2, -2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -14.6, 0], scale: [0.8, 0.8, 0.8] }
  }
];

// LOADER
const loader = new GLTFLoader();

modelsData.forEach((modelData) => {
  loader.load(
    modelData.path,
    (gltf) => {
      const model = gltf.scene;

      // Scegli la configurazione in base al device
      const config = isMobile
        ? modelData.mobile
        : isTablet
        ? modelData.tablet
        : modelData.desktop;

      model.position.set(...config.position);
      model.scale.set(...config.scale);

      // Rotazione iniziale casuale
      model.rotation.x = Math.random() * Math.PI * 2;
      model.rotation.y = Math.random() * Math.PI * 2;
      model.rotation.z = Math.random() * Math.PI * 2;

      scene.add(model);
      rotatingModels.push(model);

      window.parent.postMessage("threejs-scene-loaded", "*");
    },
    undefined,
    (error) => {
      console.error("Errore nel caricamento:", modelData.path, error);
    }
  );
});

let scrollY = 0;

window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
});



// LOOP DI ANIMAZIONE
function animate() {
  requestAnimationFrame(animate);
  rotatingModels.forEach((model) => {
    model.rotation.x += 0.002;
    model.rotation.y += 0.002;
    model.rotation.z += 0.002;
  });

  // Mappa lo scroll (es: 0 → 0, max scroll → -valore negativo)
  camera.position.y = -scrollY * 0.05; // regola questo valore se vuoi scorrere più o meno
  renderer.render(scene, camera);
}
animate();



/*
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const currentWidth = window.innerWidth;
const isMobileNow = currentWidth < 768;
const isTabletNow = currentWidth >= 768 && currentWidth < 1024;

rotatingModels.forEach((model, index) => {
  const data = modelsData[index];
  const config = isMobileNow
    ? data.mobile
    : isTabletNow
    ? data.tablet
    : data.desktop;

  model.position.set(...config.position);
  model.scale.set(...config.scale);
});
}); */