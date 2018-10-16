import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentQueryComponent } from './content-query.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule

  ],
  entryComponents: [
    ContentQueryComponent
  ],
  declarations: [
    ContentQueryComponent
  ],
  exports: [
    ContentQueryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContentQueryModule { }
