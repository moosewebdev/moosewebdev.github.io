
			
			//create scene and camera
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			
			//create renderer and append to html
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//create sphere and square
			var sphereGeo = new THREE.SphereGeometry(2,8,8);
			var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0ACAD6})
			var sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
			
			sphere.position.z = -8;
		
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			cube.position.y =1;
			cube.position.x =1;
			scene.add( cube, sphere );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();