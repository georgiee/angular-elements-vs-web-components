import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiTextComponent } from './emoji-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmojiTextComponent
  ],
  entryComponents: [
    EmojiTextComponent
  ],
  exports: [
    EmojiTextComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EmojiTextModule { }
