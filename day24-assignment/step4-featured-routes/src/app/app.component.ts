import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Movies and Heroes Application</h1>
  <hr>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step12-routing-featured';
}
