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


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LUCI
const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(0, 0, 5);
scene.add(directionalLight);

const directionalLightback = new THREE.DirectionalLight(0xffffff, 10);
directionalLightback.position.set(0, 0, -5);
scene.add(directionalLightback);


// VARIABILI RESPONSIVE
const isMobile = window.innerWidth < 768;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;

// MODELLI DA ANIMARE
const rotatingModels = [];

// DATI MODELLI
const modelsData = [
  {
    path: "/models/katrin.glb",
    desktop: { position: [-6, 2, 0], scale: [1.2, 1.2, 1.2] },
    tablet: { position: [-3, 2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, 2, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/gio.glb",
    desktop: { position: [0, 2, 0], scale: [1.3, 1.3, 1.3] },
    tablet: { position: [3, 2, 0], scale: [1, 1, 1] },
    mobile: { position: [1, 2, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/rebecca.glb",
    desktop: { position: [6, 2, 0], scale: [1, 1, 1] },
    tablet: { position: [-3, 0, 0], scale: [1, 1, 1] },
    mobile: { position: [-1, 2, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/marta.glb",
    desktop: { position: [-6, -2, 0], scale: [0.9, 0.9, 0.9] },
    tablet: { position: [3, 0, 0], scale: [1, 1, 1] },
    mobile: { position: [0, 1, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/simon.glb",
    desktop: { position: [0, -2, 0], scale: [0.9, 0.9, 0.9] },
    tablet: { position: [-3, -2, 0], scale: [1, 1, 1] },
    mobile: { position: [0, -1, 0], scale: [1, 1, 1] }
  },
  {
    path: "/models/fra.glb",
    desktop: { position: [6, -2, 0], scale: [1, 1, 1] },
    tablet: { position: [3, -2, 0], scale: [1, 1, 1] },
    mobile: { position: [0.5, 1.5, 0], scale: [1, 1, 1] }
  }
];

// LOADER
const loader = new GLTFLoader();

// CARICA TUTTI I MODELLI
modelsData.forEach((modelData) => {
  loader.load(
    modelData.path,
    (gltf) => {
      const model = gltf.scene;

      // Scegli i dati in base al dispositivo
      const config = isMobile
        ? modelData.mobile
        : isTablet
        ? modelData.tablet
        : modelData.desktop;

      model.position.set(...config.position);
      model.scale.set(...config.scale);

      // Rotazione iniziale random
      model.rotation.x = Math.random() * Math.PI * 2;
      model.rotation.y = Math.random() * Math.PI * 2;
      model.rotation.z = Math.random() * Math.PI * 2;

      scene.add(model);
      rotatingModels.push(model); // aggiungi alla lista dei modelli da ruotare
    },
    undefined,
    (error) => {
      console.error("Errore nel caricamento:", modelData.path, error);
    }
  );
});



// RENDER LOOP
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  rotatingModels.forEach((model) => {
    model.rotation.x += 0.002;
    model.rotation.y += 0.002;
    model.rotation.z += 0.002;
  });
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Aggiorna device type
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;

  // Aggiorna posizione e scala dei modelli
  rotatingModels.forEach((model, index) => {
    const data = modelsData[index];
    const config = isMobile
      ? data.mobile
      : isTablet
      ? data.tablet
      : data.desktop;

    model.position.set(...config.position);
    model.scale.set(...config.scale);
  });
});