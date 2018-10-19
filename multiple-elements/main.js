(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordion/accordion-item.component.css":
/*!********************************************************!*\
  !*** ./src/app/accordion/accordion-item.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #333;\n  color: #fff;\n  padding-left: 5px;\n  margin-bottom: 10px;\n}\n\n.content--ng {\n  border-left: 5px solid #17E4FF;\n  padding-left: 10px;\n}\n\n.content--slot {\n  border-left: 5px solid hotpink;\n  padding-left: 10px;\n}\n\nbutton {\n  background: transparent;\n  padding: 0;\n  border: none;\n  font-size: 1em;\n}\n\n.header {\n  background-color: #3E4E59;\n  color: #fff;\n  padding: 0 10px ;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250ZW50LS1uZyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE3RTRGRjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29udGVudC0tc2xvdCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgaG90cGluaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTRFNTk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDEwcHggO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/accordion/accordion-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/accordion/accordion-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\"  (click)=\"toggle()\">\n  {{title}}\n  <button>\n    <ng-container  *ngIf=\"!opened\">🔽</ng-container>\n    <ng-container  *ngIf=\"opened\">️🔼</ng-container>\n  </button>\n</div>\n\n\n<div *ngIf=\"opened\">\n  <div class=\"content--ng\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"content--slot\">\n    <slot></slot>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accordion/accordion-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/accordion/accordion-item.component.ts ***!
  \*******************************************************/
/*! exports provided: AccordionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return AccordionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AccordionItemComponent = class AccordionItemComponent {
    constructor() {
        this.opened = true;
    }
    toggle() {
        this.opened = !this.opened;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], AccordionItemComponent.prototype, "title", void 0);
AccordionItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-accordion-item',
        template: __webpack_require__(/*! ./accordion-item.component.html */ "./src/app/accordion/accordion-item.component.html"),
        styles: [__webpack_require__(/*! ./accordion-item.component.css */ "./src/app/accordion/accordion-item.component.css")],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
    })
], AccordionItemComponent);



/***/ }),

/***/ "./src/app/accordion/accordion.component.css":
/*!***************************************************!*\
  !*** ./src/app/accordion/accordion.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  border: 1px solid #333;\n\n  padding: 5px;\n}\n\n.content--ng {\n  border-left: 5px solid #17E4FF;\n  padding-left: 10px;\n}\n\n.content--slot {\n  border-left: 5px solid hotpink;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1Qjs7RUFFdkIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbnRlbnQtLW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMTdFNEZGO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250ZW50LS1zbG90IHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBob3RwaW5rO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/accordion/accordion.component.html":
/*!****************************************************!*\
  !*** ./src/app/accordion/accordion.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>I'm an Accordion</h3>\n\n<!-- blue marker -->\n<div class=\"content--ng\">\n  <ng-content></ng-content>\n</div>\n\n<!-- pink marker -->\n<div class=\"content--slot\">\n  <slot #itemsSlot (slotchange)=\"handleSlotContentChanged(event)\"></slot>\n</div>\n<!--\n<div>\n  <ul>\n    <li>\n        <strong>@ContentChildren Count:</strong> {{items.length}}<br>\n    </li>\n    <li>\n        <strong>@Slot (via assignedNodes):</strong> {{this.itemsFromSlot.length}}\n    </li>\n  </ul>\n</div> -->"

/***/ }),

/***/ "./src/app/accordion/accordion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accordion/accordion.component.ts ***!
  \**************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordion_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-item.component */ "./src/app/accordion/accordion-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AccordionComponent = class AccordionComponent {
    constructor() {
        this.itemsFromSlot = [];
    }
    handleSlotContentChanged() {
        // console.log('handleSlotContentChanged');
        const slot = this.itemsSlot.nativeElement;
        const assignedNodes = slot.assignedNodes();
        this.itemsFromSlot = assignedNodes;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_accordion_item_component__WEBPACK_IMPORTED_MODULE_1__["AccordionItemComponent"]),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], AccordionComponent.prototype, "items", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('itemsSlot'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], AccordionComponent.prototype, "itemsSlot", void 0);
AccordionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-accordion',
        template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/accordion/accordion.component.html"),
        styles: [__webpack_require__(/*! ./accordion.component.css */ "./src/app/accordion/accordion.component.css")],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
    })
], AccordionComponent);



/***/ }),

/***/ "./src/app/accordion/accordion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/accordion/accordion.module.ts ***!
  \***********************************************/
/*! exports provided: AccordionModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModuleModule", function() { return AccordionModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.component */ "./src/app/accordion/accordion.component.ts");
/* harmony import */ var _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-item.component */ "./src/app/accordion/accordion-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const items = [
    _accordion_component__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"],
    _accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["AccordionItemComponent"]
];
let AccordionModuleModule = class AccordionModuleModule {
};
AccordionModuleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
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
], AccordionModuleModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular Elements vs. Web Components</h1>\n<p>\n  The idea of Angular Elements is both easy and tempting. You have the wonderful Angular framework\n  and together with Web Components finally the possibility to use your components everywhere in the modern web - not only in your SPAs.\n</p>\n<p class=\"thesis\">\n  <strong>My thesis about Angular Element:</strong> I have an Angular component and Angular will map any functionality (projection, query, injection) correctly to the Shadow DOM standard when I choose to opt-in and leave the emulation.\n</p>\n<p>\n  I'm working on an enterprise Angular UI Library with around 40 components. I always imagined that I can switch the encapsulation to <code>ShadowDom</code> and use <code>createCustomElement()</code> to smoothly convert any existing component. That thesis you read is also the mindset of many people I have seen writing and talking about Angular Elements. Almost any lightweight blog post sell you Angular Elements as a dead-simple way to convert your existing Angular components to Web Components. Is that thinking too naive? This page is a demonstration of Angular Elements and what problems you might face once you start migrating your components.\n</p>\n<p>\n  You will see in the following content several components being mounted through the Web Component mechanism and also through Angular's internal lifecycle. We can do this as we use different selectors for both scenarios. All web components are prefixed with <code>web-*</code> and all internal selectors get <code>app-*</code>. This way we can see how the element will behave in both worlds on the same page. To make it visually easy to compare I put them side by side.<br><br>\n\n  <strong>Important:</strong>Even though the web components appear inside this Angular page they are real native ones.\n</p>\n\n<hr/>\n\n<h2>Questions</h2>\n<p>\n  Here my set of questions that arise when I imagine my components being used as web components.\n</p>\n\n<dl>\n  <dt>\n    <a href='#experiment-01'>Smoketest — does it work at all?</a>\n  </dt>\n  <dd>Let's test the basic principle of converting an Angular component to a web component.</dd>\n\n  <dt>\n      <a href='#experiment-02'>Content Projection</a>\n  </dt>\n  <dd>\n    We have <code>&lt;slot&gt;</code> in Shadow DOM stadard V1, <code>&lt;content&gt;</code> in V0 and <code>&lt;ng-content&gt;</code>in Angular. How does this play together?\n  </dd>\n\n  <dt>\n    <a href='#experiment-03'>Content Querying</a>\n  </dt>\n  <dd>\n    This is related to 2) Content Projection. How can we query our elements ? <code>@ContentChildren</code> in Angular vs. <code>assignedSlots</code> in Angular. Do we have to choose or will Angular help us converting our queries to the web component world?\n  </dd>\n\n  <dt>\n    <a href='#experiment-04'>Native Elements</a>\n  </dt>\n  <dd>\n    Can we extend native elements like <code>input</code> or <code>button</code> ?\n  </dd>\n\n  <dt>\n    <a>Dependency Injection (TODO)</a>\n  </dt>\n  <dd>\n    A smoketest for dependency injection would be integrating a service. This is outlined in many blog posts and also the official documentation and works because we pass in the injector. But what about injecting other things. Can we inject the parent element\n    and create loose coupling between parent and its items ? That's a common scheme in Angualr and I wonder how this translates into the web component world.\n  </dd>\n\n  <dt>\n    <a>Change Detection (TODO)</a>\n  </dt>\n  <dd>\n    How does CD work in an Angular element? Will it behave more like a <code>OnPush</code> component where bindings are fine and I have to call markForCheck occassionally or do I have to call <code>app.tick</code> frequently ?\n  </dd>\n</dl>\n\n<h2>Experiments</h2>\n<!-- Smoketest -->\n<section class=\"example\">\n\n  <h3 class=\"example__headline\" id='experiment-01'>1. Smoketest</h3>\n\n  <div class=\"example__content\">\n    <div class=\"example__description\">\n      Simple Smoketest, Component with some inputs and a template (to add prefix and postfix). No content projection yet, only inputs.\n    </div>\n    <hr class=\"example__divider\">\n    <div class=\"example__components\">\n      <div>\n        <h2>Angular Component</h2>\n        <app-emoji-text text=\"Hello you are cool!\"></app-emoji-text>\n        <textarea highlight-js [lang]=\"'html'\">\n          <app-emoji-text\n            text=\"Hello you are cool!\"\n            prefix=\"🌟\"\n            postfix=\"🤘\">\n          </app-emoji-text>\n        </textarea>\n      </div>\n\n      <div>\n        <h2>Web Component</h2>\n        <web-emoji-text text=\"Hello you are cool!\" prefix=\"🍀\" postfix=\"🧐\"></web-emoji-text>\n        <textarea highlight-js [lang]=\"'html'\">\n          <web-emoji-text\n            text=\"Hello you are cool!\"\n            prefix=\"🍀\"\n            postfix=\"🧐\">\n          </web-emoji-text>\n        </textarea>\n      </div>\n    </div>\n    <div>\n      <p>\n          Reminder: The component with the <code>app-</code> prefix is the Angular one.\n          The <code>web-emoji-text</code> is a real web component. It's definition is\n          created by Angular here but it's not required to run inside the Angular template.\n          <br><br>\n          Conclusion:\n          Works as expected. That's a good start.\n        </p>\n    </div>\n  </div>\n</section>\n\n\n<!-- Content Projection -->\n<section class=\"example\">\n    <h3 class=\"example__headline\" id='experiment-02'>2. Content Projection</h3>\n\n    <div class=\"example__content\">\n      <div class=\"example__description\">\n        <p>\n            Angular's internal component system mimics the web component standard since forever. You can see it\n            by looking at <code>&lt;ng-content&gt;</code> vs <code>&lt;content&gt;</code> (Shadow DOM VO) or the <code>host</code> and <code>::ng-deep</code> selectors in CSS. That's important because Angular wants to give you the possibility to use the native shadow DOM while providing an emulation of the Shadow DOM standard to make\n            the framework usable without the Shadow DOM present.\n        </p>\n\n        <p>\n            Problem is: V1 of the standard was released but Angular is not (yet?) reflecting it internally. Yes, you can use the new Shadow DOM by setting the encapsulation of your component to <code>ViewEncapsulation.ShadowDom</code> but what about all the Angular features — will they work across web component boundaries? Is it even intended?\n        </p>\n        <p>\n            For example: With V1 came <code>&lt;slot&gt;&lt;/slot&gt;</code> but there is no <code>ng-slot</code> so you can't expect any magic conversion when you choose to create Angular Elements with a native Shadow DOM V1 through <code>encapsulation: ViewEncapsulation.ShadowDom</code>.\n            You have to choose between <code>&lt;slot&gt;&lt;/slot&gt;</code> and <code>&lt;ng-content&gt;&lt;/ng-content&gt;</code>\n        </p>\n        <p>\n            If you decide to use the native Shadow DOM you will have to work directly with Shadow DOM API. There is no Angular abstraction. You will potentially loose important abilities of the Angular framework like Injection of the parent element and querying children and their changes. That's what we want to find out here.\n        </p>\n        <p>\n            Maybe it's not that bad, as you are covered by the standard. There is <code>(slotchanged)</code> and you can use\n            of course normal element queries to find your children.\n        </p>\n      </div>\n\n      <hr class=\"example__divider\">\n\n      <p>\n        You will see the same component being mounted by Angular and as a web component.\n        The different colors tell you how the content is projected. We are using both <code>&lt;slot&gt;</code> and  <code>&lt;ng-content&gt;</code>.\n        The template looks more or less like this.\n      </p>\n      <textarea highlight-js [lang]=\"'html'\">\n        <!-- blue marker -->\n        <div class=\"content--ng\">\n          <ng-content></ng-content>\n        </div>\n\n        <!-- pink marker -->\n        <div class=\"content--slot\">\n          <slot #itemsSlot (slotchange)=\"handleSlotContentChanged(event)\"></slot>\n        </div>\n      </textarea>\n\n      <p>Depending on the environment (Angular or Web Component) projected arrives only through one of the projections. That's where I expected ng-content to be replaced by something like ng-slot so I can use ng-slot and it will translate to slot when being used in a web component.</p>\n      <div class=\"example__components\">\n        <div>\n          <h2>Angular Component</h2>\n          <p>\n            It's the same application for both but the blue color here signals that the <code>&lt;ng-content&gt;</code> is\n            being used to project the content into the component.\n          </p>\n          <app-accordion>\n            <app-accordion-item title='first'>\n              content of the first accordion\n            </app-accordion-item>\n            <app-accordion-item title='second'>\n              content of the second accordion\n            </app-accordion-item>\n          </app-accordion>\n\n          <textarea highlight-js [lang]=\"'html'\">\n            <app-accordion>\n              <app-accordion-item title='first'>\n                content of the first accordion\n              </app-accordion-item>\n              <app-accordion-item title='second'>\n                content of the second accordion\n              </app-accordion-item>\n            </app-accordion>\n          </textarea>\n        </div>\n\n        <div>\n          <h2>Web Component</h2>\n          <p>\n              Again, same component as the Angular one but mounted as a web component.\n              The pink color signals here the usage of the <code>&lt;slot&gt;</code> projection.\n            </p>\n          <web-accordion>\n            <web-accordion-item title='first'>\n              content of the first accordion\n            </web-accordion-item>\n            <web-accordion-item title='second'>\n              content of the second accordion\n            </web-accordion-item>\n          </web-accordion>\n          <textarea highlight-js [lang]=\"'html'\">\n            <web-accordion>\n              <web-accordion-item title='first'>\n                content of the first accordion\n              </web-accordion-item>\n              <web-accordion-item title='second'>\n                content of the second accordion\n              </web-accordion-item>\n            </web-accordion>\n          </textarea>\n        </div>\n      </div>\n      <div>\n        <h2>Conclusion</h2>\n        <p>\n          Once you decide to use web components you need to use them inside and outside of Angular or you would need\n          to handle different places where your content pours in. This is basically fine but there are some consquences. See the next chapter about content querying.\n        </p>\n      </div>\n    </div>\n  </section>\n\n<!-- Content Query -->\n<section class=\"example\">\n  <h3 class=\"example__headline\" id=\"experiment-03\">3. Content Querying</h3>\n\n  <div class=\"example__content\">\n    <div class=\"example__description\">\n        <p>\n            How can we query content in Angular Elements? Let's test ContentChildren and ViewChildren\n            together with other web components. The template of this component looks like this. We try to query for the given content and output some stats.\n        </p>\n        <p>\n            As usual there are slot and ng-content in the template but this time named to fill in specific parts of the given content. You will see the div I pass into the component has a data attribute and also a slot attribute of \"fancy-content\". That's because ng-content uses a selector approach to target content and slots are explicitly named.\n        </p>\n        <textarea highlight-js [lang]=\"'html'\">\n          <h3>Internal content (view)</h3>\n\n          <button>Default Button</button><br>\n          <app-button>Angular Button</app-button><br>\n          <web-button>Web Button</web-button>\n\n          <h3>Projected content</h3>\n          <h4>Selector [fancy-content]</h4>\n          <div class=\"content--ng\">\n            <ng-content select=\"[fancy-content]\"></ng-content>\n          </div>\n\n          <div class=\"content--slot\">\n            <slot name='fancy-content'></slot>\n          </div>\n\n          <h4>\n            Default <br>\n            <small>(not fetched from other ng-contents/slots yet)</small>\n          </h4>\n          <div class=\"content--ng\">\n            <ng-content></ng-content>\n          </div>\n          <div class=\"content--slot\">\n            <slot></slot>\n          </div>\n        </textarea>\n    </div>\n\n    <hr class=\"example__divider\">\n\n    <div class=\"example__components\">\n      <div>\n        <h2>Angular Component</h2>\n        <app-content-query>\n          <div slot=\"fancy-content\" fancy-content>\n            <label #contentitem contentitem >1. An input <input/></label>\n            <p #contentitem contentitem>2. Lorem ipsum dolar sit amet</p>\n          </div>\n          <span #contentitem contentitem>3. Some content for the default slot</span>\n        </app-content-query>\n        <hr class=\"example__divider\">\n        <textarea highlight-js [lang]=\"'html'\">\n          <app-content-query>\n            <div slot=\"fancy-content\" fancy-content>\n              <label #contentitem contentitem >1. An input <input/></label>\n              <p #contentitem contentitem>2. Lorem ipsum dolar sit amet</p>\n            </div>\n            <span #contentitem contentitem>3. Some content for the default slot</span>\n          </app-content-query>\n        </textarea>\n\n        <p>\n          <strong>Remember</strong>: ContentChildren can ony query for directives/components or template variables\n          so we have to use both template references and a data attribute so we can query in both worlds.\n        </p>\n        <p>\n          See the first 3 ? ContentChildren works as expected and returns all three elements marked with <code>#contentitem</code>. Vanilla Query returns 0 as the query is not triggered in this context.\n        </p>\n        <textarea highlight-js [lang]=\"'ts'\">\n          @ContentChildren('contentitem') allContentItems: QueryList<any>;\n        </textarea>\n      </div>\n\n      <div>\n        <h2>Web Component Role</h2>\n        <web-content-query>\n          <div slot=\"fancy-content\" fancy-content>\n            <label #contentitem contentitem >1. An input <input/></label>\n            <p #contentitem contentitem>2. Lorem ipsum dolar sit amet</p>\n          </div>\n          <span #contentitem contentitem>3. Some content for the default slot</span>\n        </web-content-query>\n        <hr class=\"example__divider\">\n        <textarea highlight-js [lang]=\"'html'\">\n          <web-content-query>\n            <div slot=\"fancy-content\" fancy-content>\n              <label #contentitem contentitem >1. An input <input/></label>\n              <p #contentitem contentitem>2. Lorem ipsum dolar sit amet</p>\n            </div>\n            <span #contentitem contentitem>3. Some content for the default slot</span>\n          </web-content-query>\n        </textarea>\n        <p>\n          The ContentQuery is empty and instead the vanilla query is triggered by the <code>(slotchanged)</code> event.\n          <textarea highlight-js [lang]=\"'ts'\">\n            const elements = this.elementRef.nativeElement.querySelectorAll('[contentitem]');\n            this.elementsFromSlots = Array.prototype.slice.call(elements);\n          </textarea>\n        </p>\n      </div>\n    </div>\n    <div>\n      <h2>Conclusion</h2>\n      <p>\n        Depending of the context you are using your component,\n      you have to use either slots or ng-content and depending on what is being used\n      you have to use the correct querying strategy and use either ContentChildren or plain Vanilla querying with querySelector etc.\n      </p>\n      <p>\n        For my understanding this means:\n        If you want to use your Angular component as a web component, you have to use that component\n        also as a web component in your Angular SLA and stick to the native methods for querying content.\n        No ContentChildren and friends.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- Native Element -->\n<section class=\"example\">\n  <h3 class=\"example__headline\" id='experiment-04'>4. Native Elements</h3>\n\n  <div class=\"example__content\">\n    <div class=\"example__description\">\n        <p>\n            Sometimes it's crucial to extend an native element instead of creating a new element\n            or wrapping it in an additional container where you would mimic the whole API of the given element.\n            Important elements you don't want to wrap are <code>&lt;button&gt;</code> and <code>&lt;input&gt;</code> otherwise you have to replicate their API or even worse loose some default behavior given by the browser.\n        </p>\n        <p>\n            In Angular you can simply use a selector including the native element like <code>button[yourButton]</code>\n            to mount a directive onto an existing elements. To style it you can even mount a component with a template of <code>&lt;ng-content&gt;&lt;/ng-content&gt;</code> but this should only be done with elements without a own shadow DOM. A button is a good example. You can't do this with inputs and you can have only one component attached per element.\n        </p>\n        <p>\n          In the web component world you can extend the native elements. To base your element on a  <code>HTMLButtonElement</code> simply extend it like so:\n          <textarea highlight-js [lang]=\"'ts'\">\n            export class ButtonVanillaNative extends HTMLButtonElement {\n              constructor() {\n                super();\n                // do something so you can recognize your own button\n                this.innerHTML = this.innerHTML + ' <-- via is=\"\" 🙏';\n              }\n            }\n          </textarea>\n\n          Later make your web component with it. When you define the element there is an option to tell the browser that you are actually extending from an existing element.\n\n          <textarea highlight-js [lang]=\"'ts'\">\n            customElements.define('web-button-native', ButtonVanillaNative, {extends: 'button'});\n          </textarea>\n        </p>\n        <p>\n          You can use it with the <code>is</code> attribute. That's exactly what I have done with the following button:<br>\n          <button is=\"web-button-native\">is='element' Button!</button><br>\n          As you can see you can't see any difference to a normal button. I think there is a bug in Angular that prevents the <code>is</code>\n          to be recognized by the browser. I also tried <code>attr.is</code> and <code>htmlIs</code> (like htmlFor). I can even find some specs around <code>is=\"\"</code> in <a href='https://github.com/angular/angular/blob/331989cea357abf9a20088c41a86a077435d17f7/packages/compiler/test/shadow_css_spec.ts#L111'>Angular master</a>. You can see it working if you scroll completely down. There you will find the same element — but outside of the Angular application. So something is off here.\n        </p>\n        <p>\n          Let's ignore the thing with <code>is</code> and think about how we could create the same extended button with Angular.\n          We want to extend from <code>HTMLButtonElement</code> but there is simply no way. Look here\n\n          <textarea highlight-js [lang]=\"'ts'\">\n            // 1a. Remember? That's how we just extended from HTMLButtonElement with plain JavaScript.\n            export class ButtonVanillaNative extends HTMLButtonElement\n            // 1b. and here how we registered our native button that extends from HTMLButtonElement.\n            customElements.define('web-button-native', ButtonVanillaNative, {extends: 'button'});\n\n            // 2a. That's how we create a web component from an Angular component\n            // No way telling Angular to use HTMLButtonElement through createCustomElement()\n            const ButtonElement = createCustomElement(ButtonComponent, {injector});\n\n            // 2b. We can't use {extends: 'button'} here as we are missing the correct base class.\n            customElements.define('web-button', ButtonElement);\n          </textarea>\n\n        </p>\n        <p>\n          If you look into the Angular elements <a href='https://github.com/angular/angular/blob/331989cea357abf9a20088c41a86a077435d17f7/packages/elements/src/create-custom-element.ts#L42-L134'>sources</a>\n          you will find that the underlying structure <code>NgElement</code> is always extending from HTMLElement.\n\n          <textarea highlight-js [lang]=\"'ts'\">\n              export abstract class NgElement extends HTMLElement{\n                //..\n              }\n              export function createCustomElement<P>(...): NgElementConstructor<P> {\n                //...\n                class NgElementImpl extends NgElement {\n                  //...\n                }\n              }\n          </textarea>\n\n          So no way of extending an existing element I think. You can still wrap teh native element in your own web component.\n          But as said, you will hide the existing API surface of the involved element from the user. Here an example with a wrapped button.\n        </p>\n    </div>\n\n    <hr class=\"example__divider\">\n\n    <p>As in the previous examples, blue stands for <code>ng-content</code> and pink for <code>slot</code> content projection</p>\n\n    <div class=\"example__components\">\n      <div>\n        <h2>Angular Component</h2>\n        <p>\n          the blue bar signals usage of ng-content\n        </p>\n        <app-button>I'm a button</app-button>\n        <textarea highlight-js [lang]=\"'html'\">\n          <app-button>I'm a button</app-button>\n        </textarea>\n\n      </div>\n\n      <div>\n        <h2>Web Component</h2>\n        <p>\n          the pink bar signals usage of slot\n        </p>\n        <web-button>I'm a button</web-button>\n        <textarea highlight-js [lang]=\"'html'\">\n          <web-button>I'm a button</web-button>\n        </textarea>\n      </div>\n    </div>\n\n    <div>\n      <h2>Conclusion</h2>\n      <p>\n        If you have reasons to extend native elements, create your native implementation\n        and don't use Angular. In most cases this should be fine as you can't do so much\n        in such a limited environment. You won't miss Angular and can perfectly stick to vanilla JS.\n      </p>\n    </div>\n  </div>\n</section>\n\n\n<!-- Dependency Injection -->\n<section class=\"example\">\n  <h3 class=\"example__headline\" id=\"experiment-05\">5. Dependency Injection (TODO)</h3>\n\n  <div class=\"example__content\">\n    <div class=\"example__description\">\n        <p>\n            Can we inject the parent element? If not what's the alternative ?\n            Is normal service injection handled properly ?\n        </p>\n    </div>\n    <hr class=\"example__divider\">\n    <div class=\"example__components\">\n      <div>\n        <h2>Angular Component</h2>\n\n      </div>\n\n      <div>\n        <h2>Web Component Role</h2>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- Change Injection -->\n<section class=\"example\">\n  <h3 class=\"example__headline\" id=\"experiment-06\">6. Change Detection (TODO)</h3>\n\n  <div class=\"example__content\">\n    <div class=\"example__description\">\n        <p>\n            Let's see how we can handle change detection in web components build with Angular.\n        </p>\n    </div>\n    <hr class=\"example__divider\">\n    <div class=\"example__components\">\n      <div>\n        <h2>Angular Component</h2>\n\n      </div>\n\n      <div>\n        <h2>Web Component Role</h2>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _emoji_text_emoji_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emoji-text/emoji-text.component */ "./src/app/emoji-text/emoji-text.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/accordion/accordion.component.ts");
/* harmony import */ var _accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordion-item.component */ "./src/app/accordion/accordion-item.component.ts");
/* harmony import */ var _button_button_vanilla_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button-vanilla-native */ "./src/app/button/button-vanilla-native.ts");
/* harmony import */ var _content_query_content_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-query/content-query.component */ "./src/app/content-query/content-query.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AppComponent = class AppComponent {
    constructor(injector) {
        // 1. smoke test with a simple component
        const EmojiTextElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_emoji_text_emoji_text_component__WEBPACK_IMPORTED_MODULE_3__["EmojiTextComponent"], { injector });
        customElements.define('web-emoji-text', EmojiTextElement);
        // 2. native elements
        // how to tell Angular that this will extend HTMLButtonElement later
        // class NgElementImpl extends NgElement  which extends form HTMLElement.
        const ButtonElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], { injector });
        customElements.define('web-button', ButtonElement);
        customElements.define('web-button-native', _button_button_vanilla_native__WEBPACK_IMPORTED_MODULE_6__["ButtonVanillaNative"], { extends: 'button' });
        // customElements.define('native-web-button', NativeWebButton, {extends: 'button'});
        // should be like this, but we can't inherit from HTMLButton
        // export abstract class NgElement extends HTMLElement blocks us from creating a custom factory.
        // customElements.define('web-button', ButtonElement, {extends: 'button'});
        // 3. content projection test
        const AccordionElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"], { injector });
        customElements.define('web-accordion', AccordionElement);
        const AccordionItemElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_accordion_accordion_item_component__WEBPACK_IMPORTED_MODULE_5__["AccordionItemComponent"], { injector });
        customElements.define('web-accordion-item', AccordionItemElement);
        // Content Query
        const ContentQueryElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_content_query_content_query_component__WEBPACK_IMPORTED_MODULE_7__["ContentQueryComponent"], { injector });
        customElements.define('web-content-query', ContentQueryElement);
    }
    webDropdownEventTest({ detail }, source) {
        console.log(`incoming webDropdownEventTest '${detail}' from '${source}'`);
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello.service */ "./src/app/hello.service.ts");
/* harmony import */ var _emoji_text_emoji_text_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emoji-text/emoji-text.module */ "./src/app/emoji-text/emoji-text.module.ts");
/* harmony import */ var _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordion.module */ "./src/app/accordion/accordion.module.ts");
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlight-js */ "./node_modules/ngx-highlight-js/fesm2015/ngx-highlight-js.js");
/* harmony import */ var _content_query_content_query_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-query/content-query.module */ "./src/app/content-query/content-query.module.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button/button.module */ "./src/app/button/button.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_5__["AccordionModuleModule"],
            _emoji_text_emoji_text_module__WEBPACK_IMPORTED_MODULE_4__["EmojiTextModule"],
            _content_query_content_query_module__WEBPACK_IMPORTED_MODULE_7__["ContentQueryModule"],
            ngx_highlight_js__WEBPACK_IMPORTED_MODULE_6__["HighlightJsModule"]
        ],
        providers: [_hello_service__WEBPACK_IMPORTED_MODULE_3__["HelloService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/button/button-vanilla-native.ts":
/*!*************************************************!*\
  !*** ./src/app/button/button-vanilla-native.ts ***!
  \*************************************************/
/*! exports provided: ButtonVanillaNative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonVanillaNative", function() { return ButtonVanillaNative; });
class ButtonVanillaNative extends HTMLButtonElement {
    constructor() {
        super();
        // do something so you can recognize your own button
        this.innerHTML = this.innerHTML + ' <-- via is="" 🙏';
    }
}


/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button>\n  <span class=\"content--ng\"><ng-content></ng-content></span>\n  <br>\n  <span class=\"content--slot\"><slot></slot></span>\n</button>"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ButtonComponent = class ButtonComponent {
};
ButtonComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        /*
        selector: 'button[app-button]'
        this is not possible would try to attach to button,
        correct way would be extend HTMLButton + is='app-button'
        but we can't extend from button with Angular.
        */
        selector: 'app-button',
        template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom,
        styles: [
            `
    :host {
      display: inline-block;
    }

    .content--ng {
      border-left: 5px solid #17E4FF;
      padding-left: 10px;
    }

    .content--slot {
      border-left: 5px solid hotpink;
      padding-left: 10px;
    }

    `
        ]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/button/button.module.ts":
/*!*****************************************!*\
  !*** ./src/app/button/button.module.ts ***!
  \*****************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/app/button/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ButtonModule = class ButtonModule {
};
ButtonModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]
        ],
        exports: [
            _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]
        ],
        entryComponents: [
            _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]
        ]
    })
], ButtonModule);



/***/ }),

/***/ "./src/app/content-query/content-query.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content-query/content-query.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  outline: 1px solid #333;\n  padding: 5px;\n}\n\n.content--ng {\n  border-left: 5px solid #17E4FF;\n  padding-left: 10px;\n}\n\n.content--slot {\n  border-left: 5px solid hotpink;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1xdWVyeS9jb250ZW50LXF1ZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC1xdWVyeS9jb250ZW50LXF1ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzMzMztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY29udGVudC0tbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxN0U0RkY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnQtLXNsb3Qge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGhvdHBpbms7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/content-query/content-query.component.html":
/*!************************************************************!*\
  !*** ./src/app/content-query/content-query.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Internal content (view)</h3>\n\n<button>Default Button</button><br>\n<app-button>Angular Button</app-button><br>\n<web-button>Web Button</web-button>\n\n<h3>Projected content</h3>\n<h4>Selector [fancy-content]</h4>\n<div class=\"content--ng\">\n  <ng-content select=\"[fancy-content]\"></ng-content>\n</div>\n\n<div class=\"content--slot\">\n  <slot name='fancy-content' #slotNamed (slotchange)=\"handleSlotContentChanged($event)\"></slot>\n</div>\n\n<h4>\n  Default <br>\n  <small>(not fetched from other ng-contents/slots yet)</small>\n</h4>\n<div class=\"content--ng\">\n  <ng-content></ng-content>\n</div>\n<div class=\"content--slot\">\n  <slot #slotDefault (slotchange)=\"handleSlotContentChanged($event)\"></slot>\n</div>\n\n<ul>\n  <li><strong>ContentChildren(\"contentitem\"):</strong> {{allContentItems.length}}</li>\n\n  <li>\n    <strong>Vanilla Query ([contentitem])</strong>\n    {{elementsFromSlots.length}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/content-query/content-query.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content-query/content-query.component.ts ***!
  \**********************************************************/
/*! exports provided: ContentQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentQueryComponent", function() { return ContentQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContentQueryComponent = class ContentQueryComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.elementsFromSlots = [];
    }
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
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])('contentitem'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], ContentQueryComponent.prototype, "allContentItems", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('.viewitem'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], ContentQueryComponent.prototype, "allButtons", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slotDefault', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], ContentQueryComponent.prototype, "slotDefault", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slotNamed', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], ContentQueryComponent.prototype, "slotNamed", void 0);
ContentQueryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-content-query',
        template: __webpack_require__(/*! ./content-query.component.html */ "./src/app/content-query/content-query.component.html"),
        styles: [__webpack_require__(/*! ./content-query.component.css */ "./src/app/content-query/content-query.component.css")],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], ContentQueryComponent);



/***/ }),

/***/ "./src/app/content-query/content-query.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/content-query/content-query.module.ts ***!
  \*******************************************************/
/*! exports provided: ContentQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentQueryModule", function() { return ContentQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _content_query_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-query.component */ "./src/app/content-query/content-query.component.ts");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button.module */ "./src/app/button/button.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ContentQueryModule = class ContentQueryModule {
};
ContentQueryModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]
        ],
        entryComponents: [
            _content_query_component__WEBPACK_IMPORTED_MODULE_2__["ContentQueryComponent"]
        ],
        declarations: [
            _content_query_component__WEBPACK_IMPORTED_MODULE_2__["ContentQueryComponent"]
        ],
        exports: [
            _content_query_component__WEBPACK_IMPORTED_MODULE_2__["ContentQueryComponent"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], ContentQueryModule);



/***/ }),

/***/ "./src/app/emoji-text/emoji-text.component.css":
/*!*****************************************************!*\
  !*** ./src/app/emoji-text/emoji-text.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1vamktdGV4dC9lbW9qaS10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZW1vamktdGV4dC9lbW9qaS10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/emoji-text/emoji-text.component.html":
/*!******************************************************!*\
  !*** ./src/app/emoji-text/emoji-text.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{prefix}} {{text}} {{postfix}}"

/***/ }),

/***/ "./src/app/emoji-text/emoji-text.component.ts":
/*!****************************************************!*\
  !*** ./src/app/emoji-text/emoji-text.component.ts ***!
  \****************************************************/
/*! exports provided: EmojiTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiTextComponent", function() { return EmojiTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let EmojiTextComponent = class EmojiTextComponent {
    constructor() {
        this.prefix = '🌟';
        this.postfix = '🙌';
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], EmojiTextComponent.prototype, "prefix", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], EmojiTextComponent.prototype, "postfix", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], EmojiTextComponent.prototype, "text", void 0);
EmojiTextComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-emoji-text',
        template: __webpack_require__(/*! ./emoji-text.component.html */ "./src/app/emoji-text/emoji-text.component.html"),
        styles: [__webpack_require__(/*! ./emoji-text.component.css */ "./src/app/emoji-text/emoji-text.component.css")],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].ShadowDom
    })
], EmojiTextComponent);



/***/ }),

/***/ "./src/app/emoji-text/emoji-text.module.ts":
/*!*************************************************!*\
  !*** ./src/app/emoji-text/emoji-text.module.ts ***!
  \*************************************************/
/*! exports provided: EmojiTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiTextModule", function() { return EmojiTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _emoji_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emoji-text.component */ "./src/app/emoji-text/emoji-text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let EmojiTextModule = class EmojiTextModule {
};
EmojiTextModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _emoji_text_component__WEBPACK_IMPORTED_MODULE_2__["EmojiTextComponent"]
        ],
        entryComponents: [
            _emoji_text_component__WEBPACK_IMPORTED_MODULE_2__["EmojiTextComponent"]
        ],
        exports: [
            _emoji_text_component__WEBPACK_IMPORTED_MODULE_2__["EmojiTextComponent"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
        ]
    })
], EmojiTextModule);



/***/ }),

/***/ "./src/app/hello.service.ts":
/*!**********************************!*\
  !*** ./src/app/hello.service.ts ***!
  \**********************************/
/*! exports provided: HelloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloService", function() { return HelloService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HelloService = class HelloService {
    constructor() { }
    hello() {
        console.log('hello from service');
    }
};
HelloService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], HelloService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/geokal/job/allianz/gdf/ndbx-library/experiments/multiple-elements/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map