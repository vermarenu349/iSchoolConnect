import { Component, ContentChild, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-root',
  template : `
    <h1>Main Component : Power {{ apppower }}</h1>
    <button (click)="showHide()">Remove ViewChild Component</button>
    <br>
    <p>Buttons for ViewChild </p>
    <button (click)="increaseChildPower()">Increase Child Power</button>
    <button (click)="decreaseChildPower()">Decrease Child Power</button>
    <br>
    <p>Buttons for ViewChildren</p>
    <button (click)="increaseChildrenPower()">Increase Children Power</button>
    <button (click)="decreaseChildrenPower()">Decrease Children Power</button>
    <ol>
        <li> <app-child #child1 *ngIf="show"></app-child> </li>
        <li> <app-child #child2 *ngIf="show"></app-child> </li>
        <li> <app-child #child3 *ngIf="show"></app-child> </li>
    </ol>
    <hr>
   <h2 style="color:blue">Demonstration of ContentChild and ContentChildren </h2>
   <div>
   <h3  style="color:green">Content Child</h3>
  <app-messagecontainer>
   <app-message [message]='rmessage'></app-message>
   </app-messagecontainer>
   </div>
    <hr>
    <div>
    <h3 style="color:green">Content Children</h3>
    <app-messagecontainer>
   <app-message *ngFor='let m of message'[message]='m'></app-message>
   </app-messagecontainer>
    </div>


  `
})
export class AppComponent implements OnInit {
  message: any;
  title = 'steps';
  apppower = 0;
  show = true;
  rmessage:any;
  @ViewChild(ChildComponent) vc:any;
  @ViewChildren(ChildComponent) ccm! : QueryList<ChildComponent>;

  constructor(){
    console.log("AppComponent's constructor was called");
  }
  ngOnInit(): void {
    this.apppower = 5;
    console.log("AppComponent's ngOnInit was called");
    this.message = this.getMessage();
    this.rmessage = "Hello ContentChild";
  }
  getMessage(){
    return[
        ' Hello ContentChildrens ',
        'Are You Fine',
        'Are You Okay',
        'All is Well',
        'Everything is all Right'

    ];
  }

  increaseChildPower(){
    this.vc.increasePower();
  }
  increaseChildrenPower(){
    this.ccm.forEach(cm=>console.log(cm.increasePower()));
  }
  decreaseChildPower(){
    this.vc.decreasePower();
  }
  decreaseChildrenPower(){
    this.ccm.forEach(cm=>console.log(cm.decreasePower()));
  }
  showHide(){
    this.show = !this.show;
  }
}



