import * as THREE from '../build/three.module.js';
import { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';

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
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();
    // 창 크기에 맞게 설정

    requestAnimationFrame(this.render.bind(this));
  }

  _setupControls() {
    new OrbitControls(this._camera, this._divContainer);
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
    // const geometry = new THREE.BoxGeometry(1,1,1,2,2,2) // 가로 세로 깊이
    // const geometry = new THREE.CircleGeometry(0.9, 16, Math.PI / 2, Math.PI); // 원판의 반지름값, 분할 개수(높으면 높을 수록 원에 가까워짐), 시작각도, 연장각도 (각도기준 radian)
    // const geometry = new THREE.ConeGeometry(0.5, 1.6, 16, 9, true); // 밑면의 반지름 크기, 원뿔의 높이, 분할개수(기본값:8), 높이방향에 대한 분할개수(기본값:1), 밑면개방여부(기본값: false), 원뿔의시작각, 연장각
    // const geometry = new THREE.CylinderGeometry(0.9, 0.9, 1.6, 32); // 밑면의 반지름크기, 윗면의 반지름 크기, 원통의 높이, 원통의 둘레 분할개수, 원통의 높이 분할개수, 밑면 민 윗면 개방여부(기본값:false), 시작각,연장각
    // const geometry = new THREE.SphereGeometry(0.9, 32, 12, 0, Math.PI, 0, Math.PI / 2); // 반지름크기, 수평방향 분할수(기본값:32), 수직방향 분할 수, 구의 시작각, 연장각(기본값: 2PI), 구의 수직 시작각, 연장각
    // const geometry = new THREE.RingGeometry(0.2, 0.3); // 내부반지름값(기본값:0.5), 외부 반지름값(기본값:1), 가장자리 둘레 방향분할 수(기본값:8), 내부 방향 분할 수(기본값:1), 시직각, 연장각
    // const geometry = new THREE.PlaneGeometry(1, 1.4, 1, 1) //너비의 길이(기본값:1), 높이의 길이(기본값:1), 너비방향 분할 수, 높이 방향 분할 수
    const geometry = new THREE.TorusGeometry(0.4, 0.1, 24, 32); //3차원 반지 (반지름길이, 원통의 반지름 길이, 방사 방향에대한 분할 수, 긴 원통에 대한 분할 수(기본값:6), 연장각(기본값:2PI) *시작각없음)
    // const geometry = new THREE.TorusKnotGeometry(0.6, 0.1, 64, 32, 3, 4);
    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
    const cube = new THREE.Mesh(geometry, fillMaterial);

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const line = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry), lineMaterial);

    const group = new THREE.Group()
    group.add(cube);
    group.add(line);

    this._scene.add(group);
    this._cube = group;

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
    // time *= 0.001; //second unit
    // this._cube.rotation.x = time;
    // this._cube.rotation.y = time;
  }
}


window.onload = function () {
  new App();
}