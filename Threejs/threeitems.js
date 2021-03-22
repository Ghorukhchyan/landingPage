const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddf);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(620, 400);
document.getElementById("threejs").appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 50;
controls.minDistance = 45;
controls.maxDistance = 80;

var OBJFile3 = "Threejs/objmtl/Flying drone.obj";
var MTLFile3 = "Threejs/objmtl/Flying drone.mtl";
var JPGFile3 = "Threejs/objmtl/Flying drone.png";

new THREE.MTLLoader().load(MTLFile3, function (materials) {
  materials.preload();
  new THREE.OBJLoader()
    .setMaterials(materials)
    .load(OBJFile3, function (object) {
      var texture = new THREE.TextureLoader().load(JPGFile3);

      object.traverse(function (child) {
        //  setTexture
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });
      object.scale.x = object.scale.y = object.scale.z = 0.3;
      scene.position.y = -50;
      object.position.z = 7;
      scene.rotation.x = -Math.PI / 2;
      scene.add(object);
    });
});

// / -------------------------------scene Light------------

var keyLight = new THREE.DirectionalLight(
  new THREE.Color( 0xffffff ),
  1.0
);
keyLight.position.set(-100, 0, 100);
var fillLight = new THREE.DirectionalLight(
  new THREE.Color( 0xffffff ),
  0.75
);
fillLight.position.set(100, 0, 100);
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

// game logic, draw scene

const animate = function () {
  requestAnimationFrame(animate);

  //   scene.rotation.x += 0.01;
  //   scene.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();

// when screen size is changeing

window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(620, 400);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
