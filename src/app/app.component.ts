import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';
import { EmojiTextComponent } from './emoji-text/emoji-text.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { ButtonVanillaNative } from './button/button-vanilla-native';
import { ContentQueryComponent } from './content-query/content-query.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(injector: Injector) {

    // 1. smoke test with a simple component
    const EmojiTextElement = createCustomElement(EmojiTextComponent, {injector});
    customElements.define('web-emoji-text', EmojiTextElement);

    // 2. native elements
    // how to tell Angular that this will extend HTMLButtonElement later
    // class NgElementImpl extends NgElement  which extends form HTMLElement.
    const ButtonElement = createCustomElement(ButtonComponent, {injector});
    customElements.define('web-button', ButtonElement);
    customElements.define('web-button-native', ButtonVanillaNative, {extends: 'button'});
    // customElements.define('native-web-button', NativeWebButton, {extends: 'button'});
    // should be like this, but we can't inherit from HTMLButton
    // export abstract class NgElement extends HTMLElement blocks us from creating a custom factory.
    // customElements.define('web-button', ButtonElement, {extends: 'button'});

    // 3. content projection test
    const AccordionElement = createCustomElement(AccordionComponent, {injector});
    customElements.define('web-accordion', AccordionElement);
    const AccordionItemElement = createCustomElement(AccordionItemComponent, {injector});
    customElements.define('web-accordion-item', AccordionItemElement);

    // Content Query
    const ContentQueryElement = createCustomElement(ContentQueryComponent, {injector});
    customElements.define('web-content-query', ContentQueryElement);
  }

  webDropdownEventTest({detail}, source) {
    console.log(`incoming webDropdownEventTest '${detail}' from '${source}'`);
  }
}
