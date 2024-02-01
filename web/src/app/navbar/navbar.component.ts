import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  num: number;
  constructor() {

    this.num = 18;
  }
  clickHandler() {
    this.num++;

  }


}
