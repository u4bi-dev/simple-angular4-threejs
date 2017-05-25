#### simple-angular-threejs

##### generate a new project
```
ng new angular-three
cd angular-three
```
##### npm install : three
```
npm install --save three
```

##### npm install : @types/three
```
npm install --save-dev @types/three
```

##### import threejs : app.component.ts
```
import * as THREE from 'three';
```

##### get element
```ts
private container : HTMLElement;

@ViewChild('container') elementRef: ElementRef;
private container : HTMLElement;

this.container = this.elementRef.nativeElement;

```

##### screen initialize
```ts
private scene: THREE.Scene;
private camera: THREE.PerspectiveCamera;
private renderer: THREE.WebGLRenderer;

this.scene = new THREE.Scene();
this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
this.renderer = new THREE.WebGLRenderer();
 
this.renderer.setSize(screen.width, screen.height);
this.container.appendChild(this.renderer.domElement);

```

##### animate loop
```ts
this.render();

render(){
  let self: AppComponent = this;
  (function render(){
    requestAnimationFrame(render);
    self.renderer.render(self.scene, self.camera);
    
    self.animate();
  }());
}

animate(){
  console.log('animate');
}
```