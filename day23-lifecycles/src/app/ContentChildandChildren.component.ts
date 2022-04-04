import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { MessageComponent } from './message.component';
@Component({
    selector: 'app-messagecontainer',
    template: `

<div>

<h3>{{qMessage}}</h3>

  <ng-content select="app-message"></ng-content>
  </div>

  `
})
export class MessageContainerComponent implements AfterContentInit {
    qMessage = 'How are You!';
    @ContentChild(MessageComponent) mccc!: MessageComponent;
    @ContentChildren(MessageComponent) mcccd!: QueryList<MessageComponent>;
    ngAfterContentInit(): void {
        console.log(this.mccc);
        console.log(this.mcccd);
       // this.mcccd.forEach((m)=>m.message = "Nothing");
    }

  }
