import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-content-query',
  templateUrl: './content-query.component.html',
  styleUrls: ['./content-query.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContentQueryComponent implements AfterContentInit {
  @ContentChildren('contentitem') allContentItems: QueryList<any>;
  @ViewChildren('.viewitem') allButtons: QueryList<any>;

  @ViewChild('slotDefault', {read: ElementRef}) slotDefault: ElementRef;
  @ViewChild('slotNamed', {read: ElementRef}) slotNamed: ElementRef;

  elementsFromSlots = [];
  constructor(private elementRef: ElementRef) {}
  ngAfterContentInit() {
    console.log(this.allContentItems);
  }

  handleSlotContentChanged(event) {
    // const slot = event.path[0];
    // if (slot === this.slotNamed.nativeElement) {

    // }

    // Nope, this won't find the slotted element itself.
    // const slotNamed = this.slotNamed.nativeElement.assignedNodes();
    // const slotDefault = this.slotDefault.nativeElement.assignedNodes();
    // const slotItems = [...slotNamed, ...slotDefault];
    // const items = slotItems.reduce((accu, element) => {
    //   const elementsFound = Array.prototype.slice.call(element.querySelectorAll('[contentitem]'));
    //   return accu.concat(elementsFound);
    // }, []);

    // let's keep it brief by querying over all slots
    const elements = this.elementRef.nativeElement.querySelectorAll('[contentitem]');
    this.elementsFromSlots = Array.prototype.slice.call(elements);
  }
}
