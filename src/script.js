import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

gsap.registerPlugin(MotionPathPlugin);

/////////// SEE IF MOBILE USER //////////////
let mobileUser = false;

if (( window.innerWidth <= 450 ) && ( window.innerHeight <= 900 ) || ( window.innerWidth <= 900 ) && ( window.innerHeight <= 450 )) {
  mobileUser = true;
}


/////////// LOADING MANAGER //////////////
const loadingManager = new THREE.LoadingManager();
const gltfLoader = new GLTFLoader(loadingManager);

const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const progressBarLabel = document.getElementById('progress-bar-label');


loadingManager.onProgress = function (url, loaded, total) {
  progressBar.value = (loaded / total) * 100;
};

loadingManager.onLoad = function () {
  progressBarContainer.classList.add('hidden');
  progressBar.style.display = 'none';
  progressBarLabel.style.display = 'none';

  gameboyScreenHTML.removeAttribute('hidden'); 
  window.setTimeout(() => {
    //show popup
    popUp1.style.display = 'flex';
  }, 3000);
};


/////////// POPUPS //////////////
const popUp1 = document.getElementById('popup1-wrapper');
const popUp1Button = document.getElementById('popup1-button');
const popUp2 = document.getElementById('popup2-wrapper');
const popUp2Button = document.getElementById('popup2-button');
const popUp2MobileButton = document.getElementById('mobile-button');
const popUp2DesktopButton = document.getElementById('desktop-button');
const popUp2MobileControls = document.getElementById('mobile-controls');
const popUp2DesktopControls = document.getElementById('desktop-controls');

popUp1Button.addEventListener('click', () => {
  popUp1.style.display = 'none';
});

popUp2Button.addEventListener('click', () => {
  popUp2.style.display = 'none';

  //focus on GB screen
  gameboyScreenHTML.contentWindow.focus();

});

//click event listener for changing active controls header
popUp2MobileButton.addEventListener('click', function () {
  popUp2MobileButton.classList.remove('active');
  popUp2DesktopButton.classList.remove('active');

   //show mobile controls
  popUp2MobileControls.removeAttribute('hidden');
  popUp2DesktopControls.setAttribute('hidden', true);

  //make header active
  this.classList.add('active');
});

popUp2DesktopButton.addEventListener('click', function () {
  popUp2MobileButton.classList.remove('active');
  popUp2DesktopButton.classList.remove('active');

  //show desktop controls
  popUp2DesktopControls.removeAttribute('hidden');
  popUp2MobileControls.setAttribute('hidden', true);
  
  //make header active
  this.classList.add('active');
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
cssRenderer.setSize(w, h);
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
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});


/////////// CAMERA //////////////
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.rotateSpeed = '.25';
orbitControls.enableDamping = true;
orbitControls.dampingFactor = '0.03'
orbitControls.enablePan = false;
orbitControls.enableZoom = false;


//camera limits
const angle = (30 * Math.PI) / 180; // Convert 30 degrees to radians
const centerAngle = Math.PI / 2; //default angle

function setCameraLimits() {
  orbitControls.minAzimuthAngle = -angle; //30 left
  orbitControls.maxAzimuthAngle = angle; //30 right

  orbitControls.minPolarAngle = centerAngle - angle; //30 down
  orbitControls.maxPolarAngle = centerAngle + angle; //30 up
};

setCameraLimits();


/////////// LIGHTS //////////////
const lampLight = new THREE.RectAreaLight( 0xfaf3b9, 15.0, 2, 1 );
lampLight.rotateX(-2.2 );
lampLight.position.set( -2, -2.5, -7.1 );

const roomLight = new THREE.RectAreaLight( 0xfaf3b9, 0.5, 6, 6 );
roomLight.position.set( -6, 18.2, 7 );
roomLight.rotateX(-1.6 );

scene.add(lampLight, roomLight)


/////////// BEDROOM MODEL //////////////
let bedroomModel;
gltfLoader.load(
  'models/bedroom/scene.gltf',

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

gltfLoader.load(
  'models/gameboy/scene.gltf',
  function (gltf) {
    gameboyModel = gltf.scene;
    gameboyModel.rotation.x += -1.5;
    gameboyModel.rotation.y += 4.7;
    gameboyModel.position.set(0, -7, -4.25)
    gameboyModel.scale.set(8,8,8);
    
    scene.add(gameboyModel);
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


//GB screen
const gameboyScreenHTML = document.getElementById('gameboyScreen');
const gameboyScreenObject = new CSS3DObject(gameboyScreenHTML);

//if user is on phone, raise screen a bit higher (y)
if (mobileUser) { 
  gameboyScreenObject.position.set(-.002 , -6.54, -5.68);
}
else {
  gameboyScreenObject.position.set(-.002, -6.7, -5.68);
}

gameboyScreenObject.rotateX(-1.5);
gameboyScreenObject.rotateY(-.01);
gameboyScreenObject.scale.set(0.004, 0.0036, 0.0038);
cssRenderer.domElement.style.pointerEvents = 'none';
scene.add(gameboyScreenObject);


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

function displayUI() {
  let backArrow = document.getElementById('backArrowButton');
  let controlsButton = document.getElementById('showControlsButton');
  
  backArrow.addEventListener('click', function() {
    zoomOutOfGB();

    backArrow.style.display = 'none';
    controlsButton.style.display = 'none';
  });

  controlsButton.addEventListener('click', function() {
    popUp2.style.display = 'flex';
  });

  backArrow.style.display = 'block';
  controlsButton.style.display = 'block';
};


let shownPopUp2 = false;
//function to animate camera along the path to the GB
function zoomIntoGB(cameraX, cameraY, cameraZ) {
  let pathToGB;

  //allow full vertical orbitControls
  orbitControls.minPolarAngle = 0;
  orbitControls.maxPolarAngle = Math.PI;

  //camera curve path
  if (mobileUser) {
    pathToGB = new THREE.CatmullRomCurve3([
      new THREE.Vector3(cameraX, cameraY, cameraZ), //camera's current position
      new THREE.Vector3(0, -5.45, -5.15) //final position
    ]);
  } else {
    pathToGB = new THREE.CatmullRomCurve3([
      new THREE.Vector3(cameraX, cameraY, cameraZ), //camera's current position
      new THREE.Vector3(0, -5.65, -5.15) //final position
    ]);
  };

  gsap.to((camera.position), {
    motionPath: {
      path: pathToGB.getPoints(300),
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

      if (shownPopUp2 == false) {
        window.setTimeout(() => {
          //show controls popup
          popUp2.style.display = 'flex';
          displayUI();
        }, 250);
      } else displayUI();

      shownPopUp2 = true;
    }
  });
};


function zoomOutOfGB() {
  let pathToSpawn;
  let controlTarget = -7.5;

  //allow full vertical orbitControls
  orbitControls.minPolarAngle = 0;
  orbitControls.maxPolarAngle = Math.PI;
  orbitControls.minDistance=0;
  orbitControls.maxDistance=Infinity;
  orbitControls.enableZoom = false;
  
  //camera curve path
  pathToSpawn = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -4.45, -5.15),
    new THREE.Vector3(spawnX, spawnY, spawnZ) //final position
  ]);

  gsap.to((camera.position), {
    motionPath: {
      path: pathToSpawn.getPoints(200),
      autoRotate: false,
      curviness: 2,
    },
    duration: 2,
    ease: "power2",
    onUpdate: () => {
      orbitControls.enableRotate = false;

      if (mobileUser) {
        controlTarget = controlTarget + 0.035
      } else {
        controlTarget = controlTarget + 0.022
      };

      orbitControls.target.set(0, controlTarget, -5.4);
      orbitControls.update();
    },
    onComplete: () => {
      orbitControls.enableRotate = true; 
      setCameraLimits();
      orbitControls.target.set(0, 0, 0);
      cameraOnGB = false;
    }
  });
};


//move camera to GB if clicked
let cameraOnGB = false;

function onGBClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  //move camera to GB if clicked
  if (intersects.length > 0 && cameraOnGB == false) {
    if (intersects[0]['object']['name'].includes("Gameboy") || intersects[1]['object']['name'].includes("Gameboy")) {
      zoomIntoGB(camera.position.x, camera.position.y, camera.position.z);
      cameraOnGB = true;
      //focus on screen
        gameboyScreenHTML.contentWindow.focus();

    }
  }
};


//change cursor when hovering over GB
function onGBHover(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  //console.log('0:' + intersects[0]['object']['name'], '1:' + intersects[1]['object']['name'], '2:' + intersects[2]['object']['name'])

  if (intersects.length > 0) {
    if (intersects[0]['object']['name'].includes("Gameboy") || intersects[0]['object']['name'].includes("Button")) {  
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }
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

//simulate key press if GB button is clicked/pressed
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
    onGBHover(event);
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
  } else {
    onGBClick(event);
  }
});


//prevent user from right-clicking
document.addEventListener('contextmenu', function(event) {
  gameboyScreenHTML.contentWindow.focus();
});


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
  orbitControls.update();
};


animate();