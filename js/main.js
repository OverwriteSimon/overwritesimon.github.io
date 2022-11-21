import '../style.css'

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three';


document.body.style.cursor = 'Images/cursor.png';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0x1f1f1f});
const torus = new THREE.Mesh( geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

//const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(200,50);
//scene.add(lightHelper,gridHelper)

const controls = new OrbitControls(camera,renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff})
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z]=Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250))

  star.position.set(x,y,z);
  scene.add(star);
}
Array(1000).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('Images/sky.jpeg');
scene.background = spaceTexture;

//#region center quote box

  const quoteTexture = new THREE.TextureLoader().load('Images/quote.jpeg');
  const quote = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map: quoteTexture})
    );
    scene.add(quote);
//#endregion
//#region forgor image plane
const forgorTex = new THREE.TextureLoader().load('Images/forgor.jpeg');
const forgor = new THREE.Mesh(
  new THREE.PlaneGeometry(3,3),
  new THREE.MeshBasicMaterial({map: forgorTex})
  );

  forgor.position.x = 10;
  forgor.position.z = 10
  forgor.rotation.z =0;
  scene.add(forgor);
  //#endregion
  function addImageToScene(tex,posX,posZ,scale=1){
    let texture = new THREE.TextureLoader().load(tex);
    let plane = new THREE.Mesh(new THREE.PlaneGeometry(3,3),new THREE.MeshBasicMaterial({map:texture}));
  
    plane.position.x = posX;
    plane.position.y = (THREE.MathUtils.randFloatSpread(10)-5)*0.3
    plane.position.z = posZ;
    plane.scale.x = scale
    plane.scale.y = scale
    plane.scale.z = scale

    scene.add(plane);
  }
/*

  addImageToScene('Images/Gallery/2021_Sandiego2.jpeg',-10,10)
  addImageToScene('Images/Gallery/2014_ColorTouch.jpeg',-3,10,.5)
  addImageToScene('Images/Gallery/2016_Collumn.jpeg',-2.5,14,.1)
  addImageToScene('Images/sim 1.jpeg',-4,11,.5)
  addImageToScene('Images/sim 2.png',4,6,.5)
  addImageToScene('Images/sim 3.jpeg',8,15,1)
  addImageToScene('Images/sim 4.jpeg',8,18,1)
  addImageToScene('Images/Gallery/2017_Airsoft.jpeg',-2,15,.1)
   */

  const images = ['Images/Gallery/2021_Sandiego2.jpeg','Images/Gallery/2014_ColorTouch.jpeg','Images/Gallery/2016_Collumn.jpeg','Images/sim 1.jpeg','Images/sim 2.png','Images/sim 3.jpeg','Images/sim 4.jpeg','Images/Gallery/2017_Airsoft.jpeg']
  
  for(let i = 0; i < images.length; i++){
    let isNegative = i%2==0?1:-1;

    addImageToScene(images[i],(5+i)*isNegative,10+i,2);
  }

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

  torus.rotation.y += 0.005;

  controls.update()

  renderer.render(scene,camera);
}

animate();