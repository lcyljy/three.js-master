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
    camera.position.z = 3;
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
    // const geometry = new THREE.TorusGeometry(0.4, 0.1, 24, 32); //3차원 반지 (반지름길이, 원통의 반지름 길이, 방사 방향에대한 분할 수, 긴 원통에 대한 분할 수(기본값:6), 연장각(기본값:2PI) *시작각없음)
    // const geometry = new THREE.TorusKnotGeometry(0.6, 0.1, 64, 32, 3, 4);
    const test = new THREE.Object3D();
    this._scene.add(test);
    const fillMaterial = new THREE.MeshPhongMaterial({ color: 0xB8E9FF });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });

    const sourceA = new THREE.TorusGeometry(0.2, 0.1, 36, 12, 2);
    const cube = new THREE.Mesh(sourceA, fillMaterial);
    cube.position.x = 0.2;
    // cube.rotation.z = -0.1;
    const line = new THREE.LineSegments(
      new THREE.WireframeGeometry(sourceA), lineMaterial);
    line.position.x = 0.2;

    const sourceB = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 36, 1, true);
    const cube2 = new THREE.Mesh(sourceB, fillMaterial);
    cube2.position.x = 0.4;
    cube2.position.y = -0.4;
    const line2 = new THREE.LineSegments(new THREE.WireframeGeometry(sourceB), lineMaterial);
    line2.position.x = 0.4;
    line2.position.y = -0.4;

    // copy _01
    const sourceA_01 = new THREE.TorusGeometry(0.2, 0.1, 36, 12, 2);

    const cube_01 = new THREE.Mesh(sourceA_01, fillMaterial);
    cube_01.position.z = 0.4;
    cube_01.position.x = 0.2;
    const line_01 = new THREE.LineSegments(
      new THREE.WireframeGeometry(sourceA_01), lineMaterial);
    line_01.position.z = 0.4;
    line_01.position.x = 0.2;
    const sourceB_01 = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 36, 1, true);
    const cube2_01 = new THREE.Mesh(sourceB_01, fillMaterial);
    cube2_01.position.z = 0.4;
    cube2_01.position.x = 0.4;
    cube2_01.position.y = -0.4;
    const line2_01 = new THREE.LineSegments(new THREE.WireframeGeometry(sourceB_01), lineMaterial);
    line2_01.position.x = 0.4;
    line2_01.position.z = 0.4;
    line2_01.position.y = -0.4;

    // copy end
    // copy _02
    const sourceA_02 = new THREE.TorusGeometry(0.2, 0.1, 36, 12, 2);

    const cube_02 = new THREE.Mesh(sourceA_02, fillMaterial);
    cube_02.position.z = -0.4;
    cube_02.position.x = 0.2;
    const line_02 = new THREE.LineSegments(
      new THREE.WireframeGeometry(sourceA_02), lineMaterial);
    line_02.position.z = -0.4;
    line_02.position.x = 0.2;
    const sourceB_02 = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 36, 1, true);
    const cube2_02 = new THREE.Mesh(sourceB_02, fillMaterial);
    cube2_02.position.z = -0.4;
    cube2_02.position.x = 0.4;
    cube2_02.position.y = -0.4;
    const line2_02 = new THREE.LineSegments(new THREE.WireframeGeometry(sourceB_02), lineMaterial);
    line2_02.position.x = 0.4;
    line2_02.position.z = -0.4;
    line2_02.position.y = -0.4;

    // copy end
    // copy _03
    const sourceA_03 = new THREE.TorusGeometry(0.2, 0.1, 36, 12, 2);

    const cube_03 = new THREE.Mesh(sourceA_03, fillMaterial);
    cube_03.position.z = -0.8;
    cube_03.position.x = 0.2;

    const line_03 = new THREE.LineSegments(
      new THREE.WireframeGeometry(sourceA_03), lineMaterial);
    line_03.position.z = -0.8;
    line_03.position.x = 0.2;

    const sourceB_03 = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 36, 1, true);
    const cube2_03 = new THREE.Mesh(sourceB_03, fillMaterial);
    cube2_03.position.z = -0.8;
    cube2_03.position.x = 0.4;
    cube2_03.position.y = -0.4;
    const line2_03 = new THREE.LineSegments(new THREE.WireframeGeometry(sourceB_03), lineMaterial);
    line2_03.position.x = 0.4;
    line2_03.position.z = -0.8;
    line2_03.position.y = -0.4;

    // copy end

    const sourceC = new THREE.CylinderGeometry(0.3, 0.3, 2.4, 36, 1, true, 45);
    const cube3 = new THREE.Mesh(sourceC, fillMaterial);
    cube3.rotation.x = 4.7;
    cube3.position.y = -1.1;
    cube3.position.x = 0.4;
    cube3.position.z = -0.2;

    const line3 = new THREE.LineSegments(new THREE.WireframeGeometry(sourceC), lineMaterial)
    line3.rotation.x = 4.7;
    line3.position.y = -1.1;
    line3.position.x = 0.4;
    line3.position.z = -0.2;

    const group = new THREE.Group()

    group.add(cube);
    group.add(cube2);
    group.add(line);
    group.add(line2);
    group.add(cube3);
    group.add(line3);
    group.add(cube_01);
    group.add(line_01);
    group.add(cube2_01);
    group.add(line2_01);
    group.add(cube_02);
    group.add(line_02);
    group.add(cube2_02);
    group.add(line2_02);
    group.add(cube_03);
    group.add(line_03);
    group.add(cube2_03);
    group.add(line2_03);
    // group.add(testA);


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