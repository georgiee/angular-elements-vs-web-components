import { Component, OnInit, Input, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionItemComponent  {
  @Input() title: string;
  opened = true;

  toggle() {
    this.opened = !this.opened;
  }
}
