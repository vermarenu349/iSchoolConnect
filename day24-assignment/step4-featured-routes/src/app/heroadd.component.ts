import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroadd',
  template: `
  <a [routerLink]="['/']">Home</a>
    <p>
      heroadd works!
    </p>
  `,
  styles: []
})
export class HeroaddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
