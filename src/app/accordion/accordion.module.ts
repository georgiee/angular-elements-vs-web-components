import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

const items = [
  AccordionComponent,
  AccordionItemComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    ...items
  ],
  declarations: [
    ...items
  ],
  exports: [
    ...items
  ]
})
export class AccordionModuleModule { }
