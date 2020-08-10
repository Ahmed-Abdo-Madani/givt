    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/3, window.innerHeight/3 );
    document.body.appendChild(renderer.domElement);
   /*  let allImages = document.querySelector('#card-image');
   for (let x in allImages){
      console.log(x);
      allImages[x].appendChild(renderer.domElement);
    }
      console.log(allImages);
      allImages.appendChild(renderer.domElement);*/
      
  
  /*  var loader = new GLTFLoader();

    loader.load( '/models/scene.gltf', function ( gltf ) {
      scene.add( gltf.scene );
    }, undefined, function ( error ) {
      console.error( error );
    } );*/
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
    function animate() {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();
