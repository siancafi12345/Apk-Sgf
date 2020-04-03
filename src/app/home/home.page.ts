import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public url ="http://186.145.53.94/sgf/home";
  constructor() {}
  direccion(){
    location.href =this.url;
  }
}
