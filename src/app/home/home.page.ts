import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public url ="http://181.61.55.193/sgf/home";
  constructor() {}
  direccion(){
    location.href =this.url;
  }
}
