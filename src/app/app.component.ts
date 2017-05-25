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

  constructor(){
    console.log(THREE);

  }
  
  ngOnInit(){
    this.container = this.elementRef.nativeElement;
    
    console.log(this.container);

  }
}
