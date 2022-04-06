import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
  <div class="container">
  <a [routerLink]="['heroes']">Hero List</a><br>
  <a [routerLink]="['movies']">Movie List</a>
  </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
