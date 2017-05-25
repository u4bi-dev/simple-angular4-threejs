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

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);

  }

}
