let container;
let camera;
let controls;
let renderer;
let scene;
let mesh;

function init() {

  container = document.querySelector( '#scene-container' );

  scene = new THREE.Scene();

  scene.background = new THREE.Color( 0x0F0C04 );

    createCamera();
    createControls();
    createLights();
    //createMeshes();
    loadModels();
    createRenderer();

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

    function createCamera(){
        const fov = 70; // fov = Field Of View
        const aspect = container.clientWidth / container.clientHeight;
      
        const near = 0.1;
        const far = 10000;
      
        camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        camera.position.set( -5, 5, 10 );
      

    }

    function createControls(){
        controls = new THREE.OrbitControls( camera, container);
    }

    function createLights(){
      const ambientLight = new THREE.HemisphereLight(
        0xddeeff,
        0x202020,
        5,
          );
          scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 5);
        dirLight.position.set(10,10,10);
        scene.add(ambientLight ,dirLight);
    }
  /*  function createMeshes(){

        const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('js/textures/t1.jpg');

        texture.encoding = THREE.sRGBEncoding;
        texture.anisotropy = 16;

        const material = new THREE.MeshStandardMaterial({map: texture,});
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

    }*/

    function loadModels(){
      const loader = new THREE.GLTFLoader();
      const onLoad = ( gltf ) => {

        const model = gltf.scene.children[ 0 ];

        
        const animation = gltf.animations[ 0 ];
        dubbPos = new THREE.Vector3(0.5,0.5,0.5);
        const dubb = gltf.scene;
        dubb.scale.set(0.4, 0.4, 0.4);

        console.log(dubb);
        scene.add( dubb );
    
      };
      const onError = (errorMessage) => { console.log(errorMessage); };
      const onProgress = null;
      const parrotPosition = new THREE.Vector3(0,0,2.5);
      loader.load('../../static/js/models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), onProgress, onError );
    
      const flamingoPostion = new THREE.Vector3(7.5,0,-10);
      loader.load('../../static/js/models/Flamingo.glb', gltf => onLoad(gltf , flamingoPostion), onProgress, onError);
    
      const storkPosition = new THREE.Vector3(0,-2.5,-10);
      loader.load('../../static/js/models/Stork.glb', gltf => onLoad(gltf, storkPosition), onProgress, onError);
    
    
    }
    
    function createRenderer(){
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.setPixelRatio( window.devicePixelRatio );
          renderer.gammaFactor = 2.2;
          renderer.gammaOutput = true;
          renderer.physicallyCorrectLights = true;
          container.appendChild( renderer.domElement );
        
    }

function update(){
 
}
function render(){
    renderer.render( scene, camera );
}

function onWindowResize(){
    camera.aspect = container.clientWidth/container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

init();
