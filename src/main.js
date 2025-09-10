import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(2, 25, 25);
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x0077ff,
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

scene.add(sphere);

camera.position.z = 5;

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onResize);

function animate(time) {
  cube.rotation.x = time * 0.001;
  cube.rotation.y = time * 0.001;
  sphere.rotation.y = time * 0.0001;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
