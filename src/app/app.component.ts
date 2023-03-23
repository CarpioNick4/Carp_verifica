import { Component } from '@angular/core';
import { Automobile } from './automobili/automobile.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty'
  automobili: Automobile[];

  constructor(){
    this.automobili = [
      new Automobile(1,'127','fiat',1300,110),
      new Automobile(2,'giulietta','alfa romeo',4000,180),
      new Automobile(3,'fiesta','ford',1600,130),
      new Automobile(4,'baracca','subaru',5500,170)
    ]
    }
    ordinevel(): Automobile[] {
      return this.automobili.sort((a: Automobile, b: Automobile) => b.prezzo - a.prezzo);
    }
    ordinevellento(): Automobile[] {
      return this.automobili.sort((a: Automobile, b: Automobile) => b.velocitamax - a.velocitamax);
    }
}
