# Angular Elements vs. Web Components
How can we use Angular Elements with our own projects. How does Angular Elements work across web component boundaries? Can we still use Injection, Content Projection and Querying the same way in Angular Elements ?

Visit the [deployed version](https://georgiee.github.io/angular-elements-vs-web-components) for my insights.

## Summary
<ul>
  <li>
    Stick to the native Shadow DOM standard.
    This means use <code>&lt;slot&gt;&lt;/slot&gt;</code> and not <code>&lt;ng-content&gt;&lt;/ng-content&gt;</code> for example.
  </li>
  <li>
    You can't use <code>@ContentChildren</code> and friends to query your content. Use <code>(slotchanged)</code>
    and query for your other components with vanilla JS (<code>querySelector</code>, <code>querySelectorAll</code>)
  </li>
  <li>
    I think you won't be able to work across web component boundaries as easy as you work across component boundaries in Angular.
    Your existing components like Dropdown or Tabs could require a heavy refactoring so they can live in both worlds. (Those are components that usually have children that are tightly bound to their parent)
  </li>
  <li>
    If you want to extend native elements you're better off with ditching Angular and create native classes and register them with your web component.
  </li>
</ul>

## Questions

<dl>
  <dt>
    <a href='https://georgiee.github.io/angular-elements-vs-web-components/#experiment-01'>Smoketest — does it work at all?</a>
  </dt>
  <dd>Let's test the basic principle of converting an Angular component to a web component.</dd>

  <dt>
      <a href='https://georgiee.github.io/angular-elements-vs-web-components/#experiment-02'>Content Projection</a>
  </dt>
  <dd>
    We have <code>&lt;slot&gt;</code> in Shadow DOM standard V1, <code>&lt;content&gt;</code> in V0 and <code>&lt;ng-content&gt;</code>in Angular. How does this play together?
  </dd>

  <dt>
    <a href='https://georgiee.github.io/angular-elements-vs-web-components/#experiment-03'>Content Querying</a>
  </dt>
  <dd>
    This is related to 2) Content Projection. How can we query our elements ? <code>@ContentChildren</code> vs. <code>assignedSlots</code>. Do we have to choose or will Angular help us converting our queries to the web component world?
  </dd>

  <dt>
    <a href='https://georgiee.github.io/angular-elements-vs-web-components/#experiment-04'>Native Elements</a>
  </dt>
  <dd>
    Can we extend native elements like <code>input</code> or <code>button</code> ?
  </dd>

  <dt>
    <a>Dependency Injection (TODO)</a>
  </dt>
  <dd>
    A smoketest for dependency injection would be integrating a service. This is outlined in many blog posts and also the official documentation and works because we pass in the injector. But what about injecting other things. Can we inject the parent element
    and create loose coupling between parent and its items ? That's a common scheme in Angualr and I wonder how this translates into the web component world.
  </dd>

  <dt>
    <a>Change Detection (TODO)</a>
  </dt>
  <dd>
    How does CD work in an Angular element? Will it behave more like a <code>OnPush</code> component where bindings are fine and I have to call markForCheck occasionally or do I have to call <code>app.tick</code> frequently ?
  </dd>
</dl>


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