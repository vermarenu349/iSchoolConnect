import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
  <div class="container">
  <a [routerLink]="['']">Home</a> <br>
  <a [routerLink]="['heroes']">Hero List</a><br>
  <!--<a [routerLink]="['hero']"> Hero</a> <br>
 <a [routerLink]="['addhero']">Add Hero</a> |
  <a [routerLink]="['edithero']">Edit Hero</a> |
   |
  <a [routerLink]="['movie']">Movie</a> |-->
  <a [routerLink]="['movies']">Movie List</a>
  <!--<a [routerLink]="['addmovie']">Add Movie</a> |
  <a [routerLink]="['editmovie']">Edit Movie</a>
  -->
  </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
