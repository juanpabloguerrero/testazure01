// Importa Three.js
import * as THREE from 'three';

// Importa GLTFLoader de Three.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Obtiene el contenedor donde se mostrará el modelo 3D
const container = document.getElementById('canvas-container');

// Crea la escena
const scene = new THREE.Scene();

// Crea la cámara
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Crea un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Carga el archivo GLB
const loader = new GLTFLoader();
loader.load('tu_archivo.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});

// Función de animación
const animate = () => {
    requestAnimationFrame(animate);
    // Puedes agregar animaciones o interacciones aquí
    renderer.render(scene, camera);
};

animate();
