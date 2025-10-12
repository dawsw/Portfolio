import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

gsap.registerPlugin(MotionPathPlugin);

/////////// SEE IF MOBILE USER //////////////
let mobileUser = /iPhone/i.test(navigator.userAgent);

/////////// LOADING MANAGER //////////////
const loadingManager = new THREE.LoadingManager();
const gltfLoader = new GLTFLoader(loadingManager);

const progressBarContainer = document.querySelector('.progress-bar-container');

loadingManager.onLoad = function () {
  progressBarContainer.classList.add('hidden');
  gameboyScreenHTML.removeAttribute('hidden');

  window.setTimeout(() => {
    //show popup
    popUp1.style.display = 'flex';
    gameboyScreenHTML.style.opacity = '1';
  }, 3000);
};


/////////// POPUPS //////////////
const popUp1 = document.getElementById('popup1-wrapper');
const popUp1Button = document.getElementById('popup1-button');

const settingsWrapper = document.getElementById('settings-wrapper');
const settingsExitButton = document.getElementById('settings-exit-button');
const originalScreenButton = document.getElementById('originalScreenButton');
const ipsScreenButton = document.getElementById('ipsScreenButton');
const dimLampButton = document.getElementById('dimLampButton');
const normalLampButton = document.getElementById('normalLampButton');
const brightLampButton = document.getElementById('brightLampButton');


const controlsWrapper = document.getElementById('controls-wrapper');
const controlsExitButton = document.getElementById('controls-exit-button');
const controlsMobileButton = document.getElementById('mobile-button');
const controlsDesktopButton = document.getElementById('desktop-button');
const controlsMobileControls = document.getElementById('mobile-controls');
const controlsDesktopControls = document.getElementById('desktop-controls');

popUp1Button.addEventListener('click', () => {
  popUp1.style.display = 'none';
});

controlsExitButton.addEventListener('click', () => {
  controlsWrapper.style.display = 'none';

  //focus on GB screen
  gameboyScreenHTML.contentWindow.focus();

});

//click event listener for changing active controls header
controlsMobileButton.addEventListener('click', function () {
  controlsMobileButton.classList.remove('active');
  controlsDesktopButton.classList.remove('active');

  //show mobile controls
  controlsMobileControls.removeAttribute('hidden');
  controlsDesktopControls.setAttribute('hidden', true);

  //make header active
  this.classList.add('active');
});

controlsDesktopButton.addEventListener('click', function () {
  controlsMobileButton.classList.remove('active');
  controlsDesktopButton.classList.remove('active');

  //show desktop controls
  controlsDesktopControls.removeAttribute('hidden');
  controlsMobileControls.setAttribute('hidden', true);
  
  //make header active
  this.classList.add('active');
});

settingsExitButton.addEventListener('click', function () {
  settingsWrapper.style.display = 'none';
});

originalScreenButton.addEventListener('click', function () {
  ipsScreenButton.classList.remove('setting-active');
  this.classList.add('setting-active');

  gameboyScreenHTML.classList.remove('ips-screen');
  gameboyScreenHTML.style.filter = '';
  gameboyScreenHTML.classList.add('original-screen');

  //make sure dim/bright filter is on depending on lamp brightness
  if (lampLight.intensity == 2) {
     //dim screen
    gameboyScreenHTML.style.filter = 'brightness(10%) sepia(100%) hue-rotate(28deg) saturate(700%) opacity(25%) blur(.3px) contrast(1.15)';
  } 
  else if (lampLight.intensity == 35) {
    //bright screen
    gameboyScreenHTML.style.filter = 'brightness(40%) sepia(95%) hue-rotate(28deg) saturate(700%) opacity(30%) blur(.3px) contrast(1.4)';
  }
});

ipsScreenButton.addEventListener('click', function () {
  originalScreenButton.classList.remove('setting-active');
  this.classList.add('setting-active');

  gameboyScreenHTML.classList.remove('original-screen');
  gameboyScreenHTML.style.filter = '';
  gameboyScreenHTML.classList.add('ips-screen');
});

dimLampButton.addEventListener('click', function () {
  normalLampButton.classList.remove('setting-active');
  brightLampButton.classList.remove('setting-active');
  this.classList.add('setting-active');

  lampLight.intensity = 2;

  //add dim filter
  if (gameboyScreenHTML.classList.contains('original-screen')) {
    gameboyScreenHTML.style.filter = 'brightness(10%) sepia(100%) hue-rotate(28deg) saturate(700%) opacity(25%) blur(.3px) contrast(1.15)';
  }
});

normalLampButton.addEventListener('click', function () {
  dimLampButton.classList.remove('setting-active');
  brightLampButton.classList.remove('setting-active');
  this.classList.add('setting-active');

  lampLight.intensity = 20;

  //add original filter
  if (gameboyScreenHTML.classList.contains('original-screen')) {
    gameboyScreenHTML.style.filter = 'brightness(30%) sepia(95%) hue-rotate(28deg) saturate(700%) opacity(25%) blur(.4px) contrast(1.25)';
  }
});

brightLampButton.addEventListener('click', function () {
  normalLampButton.classList.remove('setting-active');
  dimLampButton.classList.remove('setting-active');
  this.classList.add('setting-active');

  lampLight.intensity = 35;

  //add bright filter
  if (gameboyScreenHTML.classList.contains('original-screen')) {
    gameboyScreenHTML.style.filter = 'brightness(40%) sepia(95%) hue-rotate(28deg) saturate(700%) opacity(30%) blur(.3px) contrast(1.4)';
  }
});


/////////// THREEJS SCENE //////////////
const w = window.innerWidth;
const h = window.innerHeight;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, w / h, .1, 100);
camera.position.set(0, 0, 5);

const spawnX = camera.position.x;
const spawnY = camera.position.y;
const spawnZ = camera.position.z;

//CSS3DRenderer
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
document.body.appendChild(cssRenderer.domElement);


//WebGLRenderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);


//update camera/renderer sizes
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});


/////////// CAMERA //////////////
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.rotateSpeed = '.15';
orbitControls.enableDamping = true;
orbitControls.dampingFactor = '0.07'
orbitControls.enablePan = false;
orbitControls.enableZoom = false;


//camera limits
const angle15 = (15 * Math.PI) / 180; // Convert 15 degrees to radians
const angle60 = (60 * Math.PI) / 180;
const centerAngle = Math.PI / 2; //default angle

function setSpawnCameraLimits() {
  orbitControls.minAzimuthAngle = -angle15; //15 left
  orbitControls.maxAzimuthAngle = angle15; //15 right

  orbitControls.minPolarAngle = centerAngle - angle15; //15 down
  orbitControls.maxPolarAngle = centerAngle + angle15; //15 up
};

function setPCCameraLimits() {
  orbitControls.minAzimuthAngle = -angle60; 
  orbitControls.maxAzimuthAngle = (-20 * Math.PI) / 180; 

  orbitControls.minPolarAngle = centerAngle - angle15;
  orbitControls.maxPolarAngle = centerAngle + angle15; 
};

function removeCameraLimits() {
  orbitControls.minPolarAngle = 0;
  orbitControls.maxPolarAngle = Math.PI;

  orbitControls.minAzimuthAngle = -Infinity;  
  orbitControls.maxAzimuthAngle = Infinity;  

  orbitControls.minDistance = 0;
  orbitControls.maxDistance = Infinity;
}

setSpawnCameraLimits();


/////////// LIGHTS //////////////
const lampLight = new THREE.RectAreaLight( 0xfaef91, 20.0, 2, 2 );
lampLight.rotateX(-2.2 );
lampLight.position.set( -2, -2.5, -7.1 );

const roomLight = new THREE.RectAreaLight( 0xfaf3b9, 0.5, 6, 6 );
roomLight.position.set( -6, 18.2, 7 );
roomLight.rotateX(-1.6 );

scene.add(lampLight, roomLight)


/////////// BEDROOM MODEL //////////////
let bedroomModel;
gltfLoader.load(
  '/models/bedroom/bedroom.glb',

  function (gltf) {
    bedroomModel = gltf.scene;
    bedroomModel.rotation.y += -1.5;
    bedroomModel.position.set(-7, 3, 8)
    bedroomModel.scale.set(10,10,10);
    scene.add(bedroomModel);
  },
);

/////////// GAMEBOY MODEL //////////////
let gameboyModel;
const gameboyScreenHTML = document.getElementById('gameboyScreen');
const gameboyScreenObject = new CSS3DObject(gameboyScreenHTML);

gltfLoader.load(
  '/models/gameboy/gameboy.glb',
  function (gltf) {
    gameboyModel = gltf.scene;
    gameboyModel.rotation.x += -1.5;
    gameboyModel.rotation.y += 4.7;
    gameboyModel.position.set(0, -7, -4.25)
    gameboyModel.scale.set(8,8,8);
    
    gameboyScreenObject.rotateX(-1.5);
    gameboyScreenObject.rotateY(-.01);
    gameboyScreenObject.scale.set(0.00398, 0.00355, 0.0038);
    gameboyScreenObject.position.set((gameboyModel.position.x -.0025), (gameboyModel.position.y + .304), (gameboyModel.position.z - 1.426));
    
    /*
    console.log("Mobile User:", mobileUser)
    console.log("User:", navigator.userAgent)
    console.log("Viewport:", window.innerWidth, window.innerHeight);
    console.log("Device Pixel Ratio:", window.devicePixelRatio);
    console.log("GB Model:", gameboyModel.position);
    console.log("GB Screen:", gameboyScreenObject.position);
   */

    scene.add(gameboyModel);
    scene.add(gameboyScreenObject);
  },
);


//GB power light
const dotRadius = 0.1;
const dotGeometry = new THREE.SphereGeometry(dotRadius, 16, 16);
const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xa31717 });  
const redDot = new THREE.Mesh(dotGeometry, dotMaterial);

redDot.position.set(-.432, -6.7, -5.75);
redDot.scale.set(.11,.11,.11);
redDot.name = 'light';
scene.add(redDot);


//GB buttons
let squareButtonGeometry;

//make buttons larger if mobile user
mobileUser ? squareButtonGeometry = new THREE.BoxGeometry(.082, .082, .082) : squareButtonGeometry = new THREE.BoxGeometry(.073, .073, .073);

const circleButtonGeometry = new THREE.CircleGeometry(.07);
const capsuleButtonGeometry = new THREE.CapsuleGeometry(.02, .11, 10, 20);
const buttonMaterial = new THREE.ShadowMaterial();  
const upButton = new THREE.Mesh(squareButtonGeometry, buttonMaterial);
const downButton = new THREE.Mesh(squareButtonGeometry, buttonMaterial);
const leftButton = new THREE.Mesh(squareButtonGeometry, buttonMaterial);
const rightButton = new THREE.Mesh(squareButtonGeometry, buttonMaterial);
const aButton = new THREE.Mesh(circleButtonGeometry, buttonMaterial);
const bButton = new THREE.Mesh(circleButtonGeometry, buttonMaterial);
const startButton = new THREE.Mesh(capsuleButtonGeometry, buttonMaterial);
const selectButton = new THREE.Mesh(capsuleButtonGeometry, buttonMaterial);

aButton.rotateX(-1.5);
bButton.rotateX(-1.5);
startButton.rotateZ(-1.5).rotateX(-.45);
selectButton.rotateZ(-1.5).rotateX(-.45);


//make buttons larger for mobile users
if (mobileUser) {
  upButton.position.set(-.365, -6.8, -4.987);
  downButton.position.set(-.365, -6.8, -4.81);
  leftButton.position.set(-.454, -6.8, -4.90);
  rightButton.position.set(-.283, -6.8, -4.902);
} else {
  upButton.position.set(-.365, -6.76, -4.983);
  downButton.position.set(-.365, -6.76, -4.825);
  leftButton.position.set(-.454, -6.76, -4.90);
  rightButton.position.set(-.285, -6.76, -4.90);
}

aButton.position.set(.432, -6.74, -4.945);
bButton.position.set(.2374, -6.74, -4.856);
startButton.position.set(0.016, -6.79, -4.579);
selectButton.position.set(-0.18, -6.79, -4.579);

upButton.name = 'upButton';
downButton.name = 'downButton';
leftButton.name = 'leftButton';
rightButton.name = 'rightButton';
aButton.name = 'aButton';
bButton.name = 'bButton';
startButton.name = 'startButton';
selectButton.name = 'selectButton';

scene.add(upButton, downButton, leftButton, rightButton, aButton, bButton, startButton, selectButton);

const buttonKeyMap = new Map([
  [upButton, "w"],
  [downButton, "s"],
  [leftButton, "a"],
  [rightButton, "d"],
  [aButton, "o"],
  [bButton, "p"],
  [startButton, "Enter"],
  [selectButton, "Shift"]
]);

/////////// PC SCREEN //////////////
const textureLoader = new THREE.TextureLoader();
const imageTexture = textureLoader.load('./static/portfolioIMG.png');

imageTexture.colorSpace = THREE.SRGBColorSpace; 

imageTexture.minFilter = THREE.LinearFilter;
imageTexture.magFilter = THREE.NearestFilter;

const planeGeometry = new THREE.PlaneGeometry(5, 3); // Adjust the size of the plane
const planeMaterial = new THREE.MeshBasicMaterial({ map: imageTexture, side: THREE.DoubleSide }); // Applying the image texture
const pcScreenIMG = new THREE.Mesh(planeGeometry, planeMaterial);

pcScreenIMG.rotateY(-.715);
pcScreenIMG.position.set(6.4, -4.37, -6.625);
pcScreenIMG.scale.x = 1.115;
pcScreenIMG.scale.y = 1.09;
scene.add(pcScreenIMG);

cssRenderer.domElement.style.pointerEvents = 'none';


/////////// SWITCH SCREEN COVER //////////////
const rectGeometry = new THREE.PlaneGeometry( 1, 1.57 );
const screenMaterial = new THREE.MeshBasicMaterial({color: 0x000000})
const screenSquare = new THREE.Mesh( rectGeometry, screenMaterial );
screenSquare.name = 'screenSquare';
screenSquare.rotateX(-1.57);
screenSquare.rotateY(-.01);
screenSquare.rotateZ(.08);
screenSquare.position.set(7.27, -6.98, -.71);
scene.add(screenSquare); 


/////////// FUNCTIONS //////////////


//function to animate camera along the path to the GB
let shownControls = false;

//limit gsap refreshes to 60fps (60hz displays)
gsap.ticker.fps(60);

function zoomIntoGB() {
  let pathToGB;

  //allow full orbitControls
  removeCameraLimits();
  orbitControls.enableZoom = false;

  //camera curve path
  if (mobileUser) {
    pathToGB = new THREE.CatmullRomCurve3([
      new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), //camera's current position
      new THREE.Vector3(0, -5.55, -5.15) //final position
    ]);
  } else {
    pathToGB = new THREE.CatmullRomCurve3([
      new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), //camera's current position
      new THREE.Vector3(0, -5.65, -5.15) //final position
    ]);
  };

  gsap.to((camera.position), {
    motionPath: {
      path: pathToGB.getPoints(200),
      autoRotate: false,
      curviness: 2,
    },
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      orbitControls.enableRotate = false; 
      //set controls target to slightly higher than bottom of GB
      orbitControls.target.set(gameboyModel.position.x, gameboyModel.position.y, gameboyModel.position.z - 1)
      orbitControls.update();
    },
    onComplete: () => {
      orbitControls.enableRotate = false;
      orbitControls.enableZoom = true;
      orbitControls.minDistance=1;
      orbitControls.maxDistance=2;

      if (shownControls == false) {
        window.setTimeout(() => {
          //show controls popup
          controlsWrapper.style.display = 'flex';
          displayUI();
        }, 250);
      } else displayUI();

      shownControls = true;
    }
  });
};


function zoomOutOfGB() {
  let gbPathToSpawn;
  let cameraTargetY = -7.5;


  //allow full orbitControls
  removeCameraLimits();
  orbitControls.enableZoom = false;

  //camera curve path
  gbPathToSpawn = new THREE.CatmullRomCurve3([
    new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z),
    new THREE.Vector3(spawnX, spawnY, spawnZ) //final position
  ]);

  gsap.to((camera.position), {
    motionPath: {
      path: gbPathToSpawn.getPoints(200),
      autoRotate: false,
      curviness: 2,
    },
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      orbitControls.enableRotate = false;
      
      cameraTargetY = cameraTargetY + 0.0625

      orbitControls.target.set(0, cameraTargetY, -5.4);
      orbitControls.update();
    },
    onComplete: () => {
      setSpawnCameraLimits();
      orbitControls.enableRotate = true; 
      orbitControls.target.set(0, 0, 0);
      cameraOnGB = false;
    }
  });
};


function zoomIntoPC() {
  let pathToPC;

  //allow full orbitControls
  removeCameraLimits();
  orbitControls.enableZoom = false;
  orbitControls.enableRotate = false; 

  orbitControls.target.set(6.32, -4.442, -6.48)

  //camera curve path
  pathToPC = new THREE.CatmullRomCurve3([
    new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z), //camera's current position
    new THREE.Vector3(2.7, -4.42, -2.31) //final position
    //4.84, -4.44, -4.79
  ]);

  gsap.to((camera.position), {
    motionPath: {
      path: pathToPC.getPoints(200),
      autoRotate: false,
      curviness: 0,
    },
    duration: 2,
    ease: "power2",
    onUpdate: () => {
      orbitControls.update();
    },
    onComplete: () => {
      setPCCameraLimits();
      displayUI();
      cameraOnPC = true;
      orbitControls.enableZoom = true;
      orbitControls.maxDistance = 8;

      if (mobileUser) {
        orbitControls.minDistance = 3.5;
      } else {
        orbitControls.enableRotate = true; 
        orbitControls.minDistance = 2;
      };
    }
  });
};


function zoomOutOfPC() {
  let pcPathToSpawn;
  let cameraXTarget = 6.32;
  let cameraYTarget = -4.44;

  //allow full orbitControls
  removeCameraLimits();
  orbitControls.enableZoom = false;
  
  //camera curve path
  pcPathToSpawn = new THREE.CatmullRomCurve3([
    new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z),
    new THREE.Vector3(spawnX, spawnY, spawnZ) //final position
  ]);
 
  gsap.to((camera.position), {
    motionPath: {
      path: pcPathToSpawn.getPoints(200),
      autoRotate: false,
      curviness: 2,
    },
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      orbitControls.enableRotate = false;

      cameraXTarget = cameraXTarget - 0.052
      cameraYTarget = cameraYTarget + 0.037
      
      orbitControls.target.set(cameraXTarget, cameraYTarget, -6.5);
      orbitControls.update();
    },
    onComplete: () => {
      setSpawnCameraLimits();
      orbitControls.enableRotate = true; 
      orbitControls.target.set(0, 0, 0);
      cameraOnPC = false;
    }
  });
};

const backArrow = document.getElementById('backArrowButton');
const controlsButton = document.getElementById('showControlsButton');
const rightGBUI = document.getElementById('rightGBUI')
const linkButton = document.getElementById('linkButton');
const settingsButton = document.getElementById('settingsButton');
const soundButton = document.getElementById('soundButton');

function displayUI() {
    backArrow.style.display = 'block';

    if (cameraOnGB == true) {
      rightGBUI.style.display = 'flex';
    } else if (cameraOnPC == true) {
      linkButton.style.display = 'flex';
    };

};


let cameraOnPC = false;
let cameraOnGB = false;

//change cursor when hovering over GB/Keyboard
function onItemHover(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  //console.log('0:' + intersects[0]['object']['name'], '1:' + intersects[1]['object']['name'])

  if (intersects.length > 0) {
    if ((intersects[0]['object']['name'].includes("Gameboy") && cameraOnGB == false) || (intersects[1]['object']['name'].includes("Computer") && cameraOnPC == false)) {  
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  } else {
    document.body.style.cursor = "default";
  }

  };

//move camera to GB if clicked
function onItemClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  //move camera to GB if clicked
  if (intersects[0]['object']['name'].includes("Gameboy") || intersects[1]['object']['name'].includes("Gameboy")) {
    if (intersects.length > 0 && cameraOnGB == false) {
      zoomIntoGB();
      cameraOnGB = true;
      //focus on screen
        gameboyScreenHTML.contentWindow.focus();

    }
  } else if ((intersects[0]['object']['name'].includes("Computer") || intersects[1]['object']['name'].includes("Computer"))) {
      if(intersects.length > 0 && cameraOnPC == false) {
        zoomIntoPC();
        cameraOnPC = true;
    }
  };
};

//change cursor when hovering over GB buttons while camera on GB
function onGBButtonHover(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    if (intersects[1]['object']['name'].includes("Button") || intersects[0]['object']['name'].includes("Button")) {  
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }
};


//send key press to GB screen
function simulateKeyPress(key) {
  const event = new KeyboardEvent("keydown", { key, code: key });
  gameboyScreenHTML.contentWindow.dispatchEvent(event);
}


//send key release to GB screen
function simulateKeyRelease(key) {
  const event = new KeyboardEvent("keyup", { key, code: key });
  gameboyScreenHTML.contentWindow.dispatchEvent(event);
}

let previousButton;

//simulate key press if GB button is clicked/touched
function onGBButtonPress(event) {
  let clientX, clientY;

  //if event is a touch
  if (event.type.startsWith("touch")) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    //if event is a mouse
    clientX = event.clientX;
    clientY = event.clientY;
  }

  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([
    upButton, downButton, leftButton, rightButton,
    aButton, bButton, startButton, selectButton
  ]);

  if (intersects.length > 0) {
    const button = intersects[0].object;
    previousButton = button;

    const key = buttonKeyMap.get(button);
    if (key) {
        simulateKeyPress(key);
    } else {
        simulateKeyRelease(key);
    }
  }
};


//simulate key press if GB button is released
function onGBButtonRelease(event) {
  let clientX, clientY;

  //if event is a touch
  if (event.type.startsWith("touch")) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  } else {
    //if event is a mouse click
    clientX = event.clientX;
    clientY = event.clientY;
  }

  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([
    upButton, downButton, leftButton, rightButton,
    aButton, bButton, startButton, selectButton
  ]);

  //release button press if click/touch release on button
  if (intersects.length > 0) {
    const button = intersects[0].object;
    const key = buttonKeyMap.get(button);
    if (key) {
        simulateKeyRelease(key);
    }
  } else { //if user is dragging/swiping and releases not on button, release previous button
    if (previousButton) {
      const previousKey = buttonKeyMap.get(previousButton);
      if (previousKey) {
        simulateKeyRelease(previousKey);
      }
    }
  }

  previousButton = undefined;
};


function onGBButtonDrag(event) {
  let clientX, clientY;

  //touch
  if (event.type.startsWith("touch")) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  } else { //mouse click
    clientX = event.clientX;
    clientY = event.clientY;
  }
  
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  //only for control pad
  const intersects = raycaster.intersectObjects([
    upButton, downButton, leftButton, rightButton
  ]);

  if (intersects.length > 0) {
    //button user is currently pressing down/touching 
    let currentButton = intersects[0].object;

    //if user drags to different button, release previousButton -> set previousButton to currentButton -> press current button
    if (previousButton !== currentButton) {
      if (previousButton) {
        const previousKey = buttonKeyMap.get(previousButton);
        simulateKeyRelease(previousKey);
      }

      previousButton = currentButton;
      const currentKey = buttonKeyMap.get(currentButton);
      simulateKeyPress(currentKey);
    }

  } else { //if user drags off of arrow buttons, release previousButton (stop movement)
    if (previousButton) {
      const previousKey = buttonKeyMap.get(previousButton);
      simulateKeyRelease(previousKey);
      previousButton = undefined; 
    }
  }
}


/////////// EVENT LISTENERS //////////////
let mouseDown = false;
let soundPlaying = true;

renderer.domElement.addEventListener("mousedown", (event) => {
  if (cameraOnGB && event.button === 0) {
    mouseDown = true;
    onGBButtonPress(event);
  }
});

renderer.domElement.addEventListener("mousemove", (event) => {
  if (cameraOnGB && event.button === 0) {
    //change cursor if GB buttons are hovered
    onGBButtonHover(event);
    
    if (mouseDown && event.button === 0) onGBButtonDrag(event);
    
  } else { //change cursor when GB is hovered & camera not on GB
    onItemHover(event);
  }
});

renderer.domElement.addEventListener("mouseup", (event) => {
  if (cameraOnGB && event.button === 0) {
    mouseDown = false; 
    event.preventDefault();
    onGBButtonRelease(event);
  }
});

renderer.domElement.addEventListener("touchstart", (event) => {
  if (cameraOnGB) {
      event.preventDefault();
      onGBButtonPress(event);
  }
});

renderer.domElement.addEventListener("touchmove", (event) => {
  if (cameraOnGB) {
      event.preventDefault();
      onGBButtonDrag(event);
  }
});

renderer.domElement.addEventListener("touchend", (event) => {
  if (cameraOnGB) {
      event.preventDefault();
      onGBButtonRelease(event);
  }
});

//focus on GB screen after every click when camera on GB
renderer.domElement.addEventListener("click", (event) => {
  if (cameraOnGB) {
      gameboyScreenHTML.contentWindow.focus();
  } else if (cameraOnPC == false) {
    onItemClick(event);
  }
});

//prevent user from right-clicking
document.addEventListener('contextmenu', function(event) {
  gameboyScreenHTML.contentWindow.focus();
});

//ui controls
backArrow.addEventListener('click', function() {
  backArrow.style.display = 'none';

  if (cameraOnGB == true) {
    rightGBUI.style.display = 'none';
    zoomOutOfGB();
  } else {
    linkButton.style.display = 'none';
    zoomOutOfPC();
  }
});

settingsButton.addEventListener('click', function() {
  settingsWrapper.style.display = 'flex';
});

controlsButton.addEventListener('click', function() {
  controlsWrapper.style.display = 'flex';
});

linkButton.addEventListener('click', function() {
  window.location.href = "https://dawsonweilage.com/portfolio";
});

soundButton.addEventListener('click', function () {
  if (soundPlaying == false) {
    soundButton.src = '/static/soundOn.svg'
    soundPlaying = true;
  } else {
    soundButton.src = '/static/soundOff.svg'
    soundPlaying = false;
  }
});


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
  orbitControls.update();
  //console.log(camera.position.x, camera.position.y, camera.position.z);
};

animate();

