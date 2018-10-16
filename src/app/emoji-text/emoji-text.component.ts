import { Component, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { transformEmojis } from './engine';

@Component({
  selector: 'app-emoji-text',
  templateUrl: './emoji-text.component.html',
  styleUrls: ['./emoji-text.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EmojiTextComponent {
  @Input() prefix = '🌟';
  @Input() postfix = '🙌';
  @Input() text;
}
