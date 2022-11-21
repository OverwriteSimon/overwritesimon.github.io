import '../style.css'

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

document.body.style.cursor = 'Images/cursor.png';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper,gridHelper)

const controls = new OrbitControls(camera,renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color:'#'+Math.floor(Math.random()*16777215).toString(16)  })
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z]=Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x,y,z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('Images/Gv.jpeg');
scene.background = spaceTexture;

const quoteTexture = new THREE.TextureLoader().load('Images/quote.jpeg');
const quote = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map: quoteTexture})
);
scene.add(quote);

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  quote.rotation.y+=0.01;
  quote.rotation.y+=0.01;

  camera.position.z = 15+t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;

function animate(){
  requestAnimationFrame(animate);

  controls.update()

  renderer.render(scene,camera);
}

animate();