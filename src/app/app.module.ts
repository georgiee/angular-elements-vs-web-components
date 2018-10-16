import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HelloService } from './hello.service';
import { EmojiTextModule } from './emoji-text/emoji-text.module';
import { AccordionModuleModule } from './accordion/accordion.module';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ContentQueryModule } from './content-query/content-query.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AccordionModuleModule,
    EmojiTextModule,
    ContentQueryModule,
    HighlightJsModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
