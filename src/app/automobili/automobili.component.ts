import { Component, Input } from '@angular/core';
import { Automobile } from './automobile.model';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css']
})
export class AutomobiliComponent {
  @Input() automobile : Automobile;

  constructor(){
    
  }

}
