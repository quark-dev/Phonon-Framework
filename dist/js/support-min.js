"use strict";!function(e,n,t,o){if(!e.CustomEvent){var a=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:o};var a=n.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a};a.prototype=e.Event.prototype,e.CustomEvent=a}t.returnGlobalNamespace=!1,t.animationPrefix="",t.animationEnd="animationend",function(){for(var a=n.createElement("div"),i=[{name:"animation",event:"animationend"},{name:"MozAnimation",event:"animationend"},{name:"WebkitAnimation",event:"webkitAnimationEnd"}],r=i.length,m=r-1;m>=0;m--){var u=i[m];if(a.style[u.name]!==o){t.animationPrefix=0===u.event.indexOf("webkit")?"webkit":"",t.animationEnd=u.event;break}}t.Support=function(){return{setGlobalNamespace:function(n){e.Phonon.returnGlobalNamespace=n}}},e.Phonon=t}(),"function"==typeof define&&define.amd?define(function(){return t.returnGlobalNamespace===!0?t:t.Support}):"object"==typeof module&&module.exports&&(module.exports=t.returnGlobalNamespace===!0?t:t.Support)}(window,document,window.Phonon||{});