# Multiple Angular Elements

## Notes
Inspect Angular Output with

```
npx ngc
```


Enabe Ivy in tsconfig.json
```
"angularCompilerOptions": {
  "enableIvy": true
},
```

## Content Projection
Set component to `ShadowDom`, ng-content still works whiel I expecetd slot (V1 ShadowDom to take over). Maybe because it's still part of the Angular compilation of the app. Now remove it from the declarations and register the component as a real web component.

Step 1:
Register element in app component + app module
module: entryComponents
component: initialize in ctor (createCustomElement + customElement.define)

Error:
Error is very telling:
```
"'web-button' is not a known element:
1. If 'web-button' is an Angular component, then verify that it is part of this module.
2. If 'web-button' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("[ERROR ->]<web-button>that's the button content</web-button>

<app-dropdown>dropdown content</app-dropdown>"): ng:///AppModule/AppComponent.html@0:0"
```

Step 2:

Add CUSTOM_ELEMENTS_SCHEMA to app module,

Still an error:

```
elements.js:384 Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
```

Optimizer issue, target of `es5` in your tsconfig is the problem
and define is only supported with es6 classes.

Many people fix it by  using es2015 but this seems to be suboptimal.
https://github.com/angular/devkit/issues/816

The documentation even mention ES2015 and that Angular stays at es5 because it's providing the polyfills.
>In browsers that support Custom Elements natively, the specification requires developers use ES2015 classes to define Custom Elements - developers can opt-in to this by setting the target: "es2015" property in their project's tsconfig.json. As Custom Element and ES2015 support may not be available in all browsers, developers can instead choose to use a polyfill to support older browsers and ES5 code


I used the elements schematic without the project flag but correctly received this in angular.json

```
"scripts": [
  {
    "input": "node_modules/document-register-element/build/document-register-element.js"
  }
]
```

Anyway `target: es6` works for this test. But caution IE11 supports only ES5 (and of course no web components) so you have to use a polyfill and compile with target es5.

Result: Works, and with content projection you see your slot being used now instead of the ng-content which is ignored.

Other errors:
Removed from declarations, added to entryComponents and I get the following error:
> Uncaught Error: Component ButtonComponent is not part of any NgModule or the module has not been imported into your module.

Fixed by adding back to declarations but that's not right.

## Content Query
Next topic, how to query once your components are native web components. Will there be any difference ?

> Tldr: <ng-content> works in a very limited fashion with Elements (basically, only for very static stuff) and won’t provide any support for @ContentChild/ren queries (because they have to be known at compile time)

> Again, this won’t yet support queries, but developers can use the <slot (slotchange)> event to approximate this behavior and allow wiring dynamic stuff up.


Different for View Children, we can easily query our view.
@ViewChildren('tab') tabs: QueryList<ElementRef>;

## Problems arise

### Content Projection
If you decide to opt-in ShadowDom you can't use ng-content and have to switch over to use native `<slot></slot>` from the V1 standard of the shadow DOM.
If you don't define any encapsulation

### Injection
Well it's working, that's why you have to provide an injector
when using createCustomElement (`createCustomElement(DropdownItemComponent, {injector});`)

This works great for services. Included in this example too.
1. Is not working although I expected it somehow to work as it's using the same injector
and the hierarchy is known to Angular.
2. It's of curse not working as Angular can't work across web component boundaries

## Element
A custom element hosts an Angular component.
You don't transform the component to a web component.

```
<element>
  <your-component></your-component>
</element>
```

createCustomElement from '@angular/elements' helps you wiring all inputs and events. Nothing magic here.
Inputs are converted to dash-separated lowercase.

`myGreeting` transforms to `my-greeting`
Outputs stay camel cased, you receive CustomEvents
where the value is stored in `detail`

```
(yourSelection)="webDropdownEventTest($event, 'app')"
```
example handler:
```
webDropdownEventTest({detail}, source) {
  console.log(`incoming webDropdownEventTest '${detail}' from '${source}'`);
}

```

## Theory
What's part of the while web component thing?
Shadow DOM + Custom Elements +

### Custom Elements
Creating new tag. Can be empty. Shadow DOM useful here.
via `customElements.define`

```
<button is='some-button'></button>
```

Customized built-in elements inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the is attribute (or property). For example <p is="word-count">, or document.createElement("p", { is: "word-count" }).


this referes to the element inside a custom element.
> The name of a custom element must contain a dash (-). So <x-tags>, <my-element>, and <my-awesome-app> are all valid names, while <tabs> and <foo_bar> are not. This requirement is so the HTML parser can distinguish custom elements from regular elements. It also ensures forward compatibility when new tags are added to HTML.


### Shadow DOM
via (`element.attachShadow()`) (opened/closed)
Slots & Scoped CSS

Specs: http://w3c.github.io/webcomponents/spec/shadow/#h-methods
innerHTML, composition with Slots, Default Slot and slotable (element + text)
flattened tree -> what you see in the browser (slots distributed), final markup
Slots are kind of a declarative API mixing DOM tress together.

Scoped CSS: Nothing comes in, nothing leaks out.  You can use ids again to make simple and unique selectors to address slots.

Example: Make your own select with options.

Forget about closed mode. Almost useless.
> Closed mode simply prevents outside JS from drilling into an element's internal DOM.
> Closed mode prevents your custom element code from accessing its own shadow DOM. That's complete fail.

slot.addEventListener('slotchange') with assignedNodes
use element.assignedSlot to tell where element is slotted to.

> Note: slotchange does not fire when an instance of the component is first initialized.

>  MutationObserver
to monitor light dom changes

All events are not bubbling outside of shadow dom boundaries but there are
some built-ins that do bubble up cross the shadow boundary.
Focus/Mouse/Wheel/Input/Keyboard/Composite/Drag Events
> event.composedPath()
returns nodes the event travelled through.

Custom Events need {composed: true} to travel outside the boundaries.

Events from inside will matche the host element not the internal element.
(focus input inside -> host)
document.activeElement.shadowRoot.activeElement.shadowRoot.activeElement...
-> to get active element you need to drill into recurseveliy


set delegateFocus to allow host element to get focus pseudo state.
and in addition automatically focus wirst focusable internal dom element.

### HTML Imports
template + shadow dom + custom element + css = html to import
`<link rel="import" href="myfile.html">`

no consensus yet
see: https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports

### Fallbacks
Different to v0  you can use default content in slots inside your shadow dom template
to have fallback content.


### Polyfills
Until browser support is widely available, the shadydom and shadycss polyfills give you v1 feature. Shady DOM mimics the DOM scoping of Shadow DOM and shadycss polyfills CSS custom properties and the style scoping the native API provides.

>  this.attachShadow({mode: 'open', delegatesFocus: true});

### Other
Use `contain: content;` to optimize repainting behaviour.
Inheritation pierces shadowm dom, use initial to block it (on individual proeprties or all: initial)

### Theming
host-context, css properties, ::theme & ::part
outside trumps inside
element {...styles} win over :host{...styles}

## Angular always mimiced shadow dom + custo melement behavior:

Inerstion POints / Content Projection
V0: `<content select='query'></content>` vs <ng-content select='query'></ng-content>
v1: <slot></slot> No Angular emulation

:host selector comes from the standard too.
/deep/, >>>, ::shadow for shadow dom piercing comes from V0. Nothing liek this in V1 by purpose.
::slotted(query) or maybe ::theme & ::part in the future.

No self-closing tags in Angualr (opposite to React). That matches the html standard.
> Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing. Always write a closing tag.


observedAttributes, this.setAttribute('disabled', '');, this.hasAttribute('disabled');
to reflect proeprties to html attributes.


monitor when element is avaialble:
```
customElements.whenDefined('app-drawer').then(() => {
  console.log('app-drawer defined');
});

```

cut down parsing time by using templates


```
let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { ... }</style> <!-- look ma, scoped styles -->
  <b>I'm in shadow dom!</b>
  <slot></slot>
`;

customElements.define(...)
//...
let shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(tmpl.content.cloneNode(true));
```

Before an element is upgraded you can target it in CSS using the :defined pseudo-class.
Remvoed when element is available
```
app-drawer:not(:defined) {
  /* Pre-style, give layout, replicate app-drawer's eventual styles, etc. */
  display: inline-block;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
```

Extending existing elements:

```
create
customElements.define('fancy-button', FancyButton, {extends: 'button'});

consume
<button is="fancy-button" disabled>Fancy button!</button>
let button = document.createElement('button', {is: 'fancy-button'});


```

## Thesis
Angular Elements lives in the future of Angular. You get custom elements where you can run Angular inside using your template.
But Angular is built on top of the V0 Standard using `ng-content` to simulate `ng-content` for example.

ThereIf you decide to use Angular Elements you have to use the native shadow DOM and its slot attributes.
Workign in such a native environment means that you will run into problems with composition. Composition of elements but also with depdenency injection (DI) as you can't work across native element boundaries at the moment.

ContentChildren? Switch over an use assignedNodes that will query slot content.
Injection of the parent? Won't work.

Building Web Components in Angular today:
You might come away with hitting the switch and using your component as a web component,
but once you have some children, some ContentChildren queries, some injections of parent elements you will
have to rewrite your component. From that point you will create a web component that is using many native web component features such as slots.

## Lost+ Found

1. CSS selection of slots
> ::content selector => ::slotted (compound-selector)
> V1 introduces a new psuedo-selector for styling slotted nodes. This is of course supported natively, but we should work out the correct way to (maybe) emulate this in encapsulated mode, what to do about ng-deep, etc.

2. Bindings are working nicely.

3. Can't attachsShadow to button. Not allowed.
https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow

4. Default content in slot is passed through in Angular.
(no slot used)
## References
+ https://angular.io/guide/elements
+ https://blog.angularindepth.com/inside-ivy-exploring-the-new-angular-compiler-ebf85141cee1
+ https://github.com/facebook/create-react-app/issues/3225
+ https://github.com/angular/angular/issues/24536
+ https://github.com/angular/angular/issues/22515
+ https://gist.github.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b
+ https://developer.mozilla.org/en-US/docs/Web/CSS/contain
+ https://developers.google.com/web/updates/2016/06/css-containment
+ https://hayato.io/2016/shadowdomv1/
+ https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports
+ https://developers.google.com/web/fundamentals/web-components/customelements