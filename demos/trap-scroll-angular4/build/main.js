webpackJsonp([2],{54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),r=n(55);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},55:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,l=arguments.length,i=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(l<3?r(i):l>3?r(e,n,i):r(e,n))||i);return l>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),l=n(0),i=n(56),p=n(58),c=function(){function t(){}return t=o([l.NgModule({bootstrap:[i.AppComponent],imports:[r.BrowserModule],declarations:[i.AppComponent,p.TrapScrollDirective]})],t)}();e.AppModule=c},56:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,l=arguments.length,i=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(l<3?r(i):l>3?r(e,n,i):r(e,n))||i);return l>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),l=function(){function t(){}return t.prototype.ngDoCheck=function(){console.log("ngDoCheck() in App Component.")},t=o([r.Component({selector:"my-app",styles:[n(57)],template:'\n\t\t<p class="spacer">\n\t\t\tScroll down to find scrollable elements.\n\t\t</p>\n\n\t\t\x3c!-- By default [trapScroll] will only trap the mouse wheel. --\x3e\n\t\t<div trapScroll class="outer">\n\n\t\t\t<p>\n\t\t\t\tI trap <strong>wheel events</strong>.\n\t\t\t</p>\n\n\t\t\t\x3c!-- Adding [trapKeyScroll] will also trap keyboard scrolling. --\x3e\n\t\t\t<div trapScroll trapKeyScroll class="inner">\n\n\t\t\t\t<p>\n\t\t\t\t\tI trap <strong>wheel &amp; keyboard events</strong>\n\t\t\t\t</p>\n\n\t\t\t\t<ul class="spacer">\n\t\t\t\t\t<li>Space</li>\n\t\t\t\t\t<li>Shift+Space</li>\n\t\t\t\t\t<li>ArrowUp</li>\n\t\t\t\t\t<li>ArrowDown</li>\n\t\t\t\t\t<li>PageUp</li>\n\t\t\t\t\t<li>PageDown</li>\n\t\t\t\t\t<li>Home</li>\n\t\t\t\t\t<li>End</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t\t<p class="spacer">\n\t\t\t\tThis is some content.\n\t\t\t</p>\n\n\t\t</div>\n\t'})],t)}();e.AppComponent=l},57:function(t,e){t.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\n.spacer {\n  height: 2000px ;\n}\n.outer {\n  background-color: #FAFAFA ;\n  border: 1px solid #CCCCCC ;\n  border-radius: 4px 4px 4px 4px ;\n  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);\n  height: 300px ;\n  left: 100px ;\n  overflow: auto ;\n  padding: 30px ;\n  position: absolute ;\n  top: 600px ;\n  width: 600px ;\n}\n.outer > *:first-child {\n  margin-top: 0px ;\n}\n.outer > *:last-child {\n  margin-bottom: 0px ;\n}\n.inner {\n  background-color: white ;\n  border: 1px solid #CCCCCC ;\n  border-radius: 3px 3px 3px 3px ;\n  height: 200px ;\n  margin: 16px 0px 16px 0px ;\n  padding: 20px 20px 20px 20px ;\n  overflow: auto ;\n  width: 400px ;\n}\n.inner > *:first-child {\n  margin-top: 0px ;\n}\n.inner > *:last-child {\n  margin-bottom: 0px ;\n}\nstrong {\n  background-color: gold ;\n  border-radius: 3px 3px 3px 3px ;\n  display: inline-block;\n  padding: 0px 4px 0px 4px ;\n}\n"},58:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,l=arguments.length,i=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(l<3?r(i):l>3?r(e,n,i):r(e,n))||i);return l>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var l,i=n(0),p=n(0),c=n(0);!function(t){t.UP="up",t.DOWN="down",t.NONE="none"}(l||(l={}));var a=function(){function t(t,e){var n=this;this.handleKeyboardEvent=function(t){n.trapScroll&&n.trapKeyScroll&&(t.stopPropagation(),n.isScrolledInMaxDirection(n.getDirectionFromKeyboardEvent(t))&&t.preventDefault())},this.handleWheelEvent=function(t){n.trapScroll&&(t.stopPropagation(),n.isScrolledInMaxDirection(n.getDirectionFromWheelEvent(t))&&t.preventDefault())},this.element=t.nativeElement,this.zone=e}return t.prototype.ngOnChanges=function(t){this.trapScroll=this.normalizeInputAsBoolean(this.trapScroll),this.trapKeyScroll=this.normalizeInputAsBoolean(this.trapKeyScroll),"trapKeyScroll"in t&&(this.trapKeyScroll?this.element.tabIndex=-1:this.element.removeAttribute("tabIndex"))},t.prototype.ngOnDestroy=function(){this.element.removeEventListener("wheel",this.handleWheelEvent,!1),this.element.removeEventListener("keydown",this.handleKeyboardEvent,!1)},t.prototype.ngOnInit=function(){var t=this;this.zone.runOutsideAngular(function(){t.element.addEventListener("wheel",t.handleWheelEvent,!1),t.element.addEventListener("keydown",t.handleKeyboardEvent,!1)})},t.prototype.getDirectionFromKeyboardEvent=function(t){switch(t.key){case" ":return t.shiftKey?l.UP:l.DOWN;case"ArrowUp":case"Home":case"PageUp":return l.UP;case"ArrowDown":case"End":case"PageDown":return l.DOWN;default:return l.NONE}},t.prototype.getDirectionFromWheelEvent=function(t){return(t.deltaY||t.detail)<=0?l.UP:l.DOWN},t.prototype.isScrolledInMaxDirection=function(t){return t===l.UP&&this.isScrolledToTheTop()||t===l.DOWN&&this.isScrolledToTheBottom()},t.prototype.isScrolledToTheBottom=function(){return this.element.clientHeight+this.element.scrollTop>=this.element.scrollHeight},t.prototype.isScrolledToTheTop=function(){return!this.element.scrollTop},t.prototype.normalizeInputAsBoolean=function(t){return""===t||!!t},t=o([i.Directive({selector:"[trapScroll]",inputs:["trapScroll","trapKeyScroll"]}),r("design:paramtypes",[p.ElementRef,c.NgZone])],t)}();e.TrapScrollDirective=a}},[54]);