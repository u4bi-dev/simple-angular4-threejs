
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

##### import threejs : `app.component.ts - top line`
```
import * as THREE from 'three';
```

##### get element : `app.component.ts - html division`
```ts
private container : HTMLElement;

@ViewChild('container') elementRef: ElementRef;
private container : HTMLElement;

this.container = this.elementRef.nativeElement;

```

##### screen initialize : `app.component.ts - init()`
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

##### animate loop : `app.component.ts - render()`
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