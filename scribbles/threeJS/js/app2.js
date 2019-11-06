//create scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//add light

var hemiLight = new THREE.HemisphereLight(0xffffff);
hemiLight.position.set(0, 300, 0);
scene.add(hemiLight);
var dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(75, 300, -75);
scene.add(dirLight);


//camera position
camera.position.z = 650;

//create renderer and append to html
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a loader for object
var loader = new THREE.GLTFLoader();

//load in model from file path
loader.load('models/tokyo/scene.gltf', function (gltf) {

    // add model to scene
    scene.add(gltf.scene);
});

//render();



animate();



//animate and render scene
function animate() {

    requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
};