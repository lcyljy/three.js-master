import * as THREE from '../build/three.module.js';

class App {
  constructor() {
    const divContainer = document.querySelector("#webgl-container");
    this._divContainer = divContainer; // 다른 메서드에서 이를 참조할 수 있도록

    const renderer = new THREE.WebGLRenderer({ antialias: true }); //렌더링할때 오브젝트의 경계선이 구분없이 부드럽게 되도록
    renderer.setPixelRatio(window.devicePixelRatio); //
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();

    window.onresize = this.resize.bind(this);
    this.resize();
    // 창 크기에 맞게 설정

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      100
    );
    camera.position.z = 2;
    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }

  _setupModel() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // 가로 세로 깊이
    const material = new THREE.MeshPhongMaterial({ color: 0x44a88 }); //

    const cube = new THREE.Mesh(geometry, material);

    this._scene.add(cube);
    this._cube = cube;
  }

  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    this._renderer.render(this._scene, this._camera);
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.001; //second unit
    this._cube.rotation.x = time;
    this._cube.rotation.y = time;
  }
}


window.onload = function () {
  new App();
}