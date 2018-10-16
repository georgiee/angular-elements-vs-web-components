import { Component, OnInit, ContentChildren, ViewChild, ElementRef, QueryList, ViewEncapsulation } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionComponent {
  @ContentChildren(AccordionItemComponent) items: QueryList<AccordionItemComponent>;
  @ViewChild('itemsSlot') itemsSlot: ElementRef;

  itemsFromSlot = [];

  handleSlotContentChanged() {
    // console.log('handleSlotContentChanged');
    const slot = this.itemsSlot.nativeElement;
    const assignedNodes = slot.assignedNodes();

    this.itemsFromSlot = assignedNodes;
  }

}
