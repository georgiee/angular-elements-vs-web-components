import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  /*
  selector: 'button[app-button]'
  this is not possible would try to attach to button,
  correct way would be extend HTMLButton + is='app-button'
  but we can't extend from button with Angular.
  */
  selector: 'app-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [
    `
    :host {
      display: inline-block;
    }

    .content--ng {
      border-left: 5px solid #17E4FF;
      padding-left: 10px;
    }

    .content--slot {
      border-left: 5px solid hotpink;
      padding-left: 10px;
    }

    `
  ]
})
export class ButtonComponent {

}
