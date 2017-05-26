import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('container') elementRef: ElementRef;
  private container : HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube : THREE.Mesh;

  constructor(){
    console.log(THREE);

  }
  
  ngOnInit(){
    this.container = this.elementRef.nativeElement;
    
    console.log(this.container);

    this.init();
  }

  init(){
    let screen = {
      width  : 400,
      height : 300
    },
    view = {
      angle  : 45,
      aspect : screen.width / screen.height,
      near   : 0.1,
      far    : 1000
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);
    this.scene.add(new THREE.AxisHelper(20));
    
    this.camera.position.set(10,10,10);
    this.camera.lookAt(new THREE.Vector3(0,0,0));

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);


    let geometry = new THREE.BoxGeometry(5, 5, 5),
        material = new THREE.MeshBasicMaterial({ color : 0xFFFFFF, wireframe: true });
        
    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(-50,-50,-50);
    
    this.scene.add(this.cube);
    
    this.render();
  }

  render(){

    let self: AppComponent = this;
    
    (function render(){
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());
    
  }

  animate(){
    this.cube.rotateX(0.1);
    this.cube.rotateY(0.1);
    this.cube.position.addScalar(0.2);

  }

}
