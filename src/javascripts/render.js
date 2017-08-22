import {Scene, PerspectiveCamera, WebGLRenderer, Clock, Vector2, ShaderMaterial, Mesh, PlaneBufferGeometry} from './three.min.js';


window.onload = function() {
    let scene = new Scene();
    let fov = 75;
    let aspect = window.innerWidth / window.innerHeight;
    let camera = new PerspectiveCamera(fov, aspect, 0.1, 1000);
    camera.position.z = 100;
    camera.lookAt(scene.position);
    let renderer = new WebGLRenderer();
    renderer.setClearColor(0xc4c4c4);
    renderer.setSize(window.innerWidth, window.innerHeight);
    let container = document.getElementById('canvasSea');
    container.appendChild(renderer.domElement);
    let clock = new Clock();

    let tuniform = {
        iGlobalTime: {
            type: 'f',
            value: 0.1,
        },
        iResolution: {
            type: 'v2',
            value: new Vector2(),
        },
        iMouse: {
            type: 'v4',
            value: new Vector2(),
        },
    };

    // Mouse position in - 1 to 1
    renderer.domElement.addEventListener('mousedown', (e) => {
        let canvas = renderer.domElement;
        let rect = canvas.getBoundingClientRect();
        tuniform.iMouse.value.x = (e.clientX - rect.left) / window.innerWidth * 2 - 1;
        tuniform.iMouse.value.y = (e.clientY - rect.top) / window.innerHeight * -2 + 1;
    });
    renderer.domElement.addEventListener('mouseup', (e) => {
        let canvas = renderer.domElement;
        let rect = canvas.getBoundingClientRect();
        tuniform.iMouse.value.z = (e.clientX - rect.left) / window.innerWidth * 2 - 1;
        tuniform.iMouse.value.w = (e.clientY - rect.top) / window.innerHeight * -2 + 1;
    });
    // resize canvas function
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    tuniform.iResolution.value.x = window.innerWidth;
    tuniform.iResolution.value.y = window.innerHeight;
    // Create Plane
    let material = new ShaderMaterial({
        uniforms: tuniform,
        vertexShader: document.getElementById('vertex-shader').textContent,
        fragmentShader: document.getElementById('fragment-shader').textContent,
    });
    let mesh = new Mesh(
        new PlaneBufferGeometry(window.innerWidth, window.innerHeight, 40), material
    );
    scene.add(mesh);

    // draw animation
    function render(time) {
        tuniform.iGlobalTime.value += clock.getDelta();
        // requestAnimationFrame(render);
        setTimeout( function() {
          requestAnimationFrame( render );
        }, 1000 / 24 );

        renderer.render(scene, camera);
    }
    render();
};
