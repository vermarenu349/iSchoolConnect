import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { MessageContainerComponent } from './ContentChildandChildren.component';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    AppComponent,ChildComponent,MessageComponent,MessageContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
