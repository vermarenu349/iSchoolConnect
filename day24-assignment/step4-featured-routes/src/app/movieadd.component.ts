import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieadd',
  template: `
  <a [routerLink]="['/']">Home</a>
    <p>
      movieadd works!
    </p>
  `,
  styles: []
})
export class MovieaddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
