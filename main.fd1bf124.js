parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api",t=function(t){return fetch("".concat(n,"/").concat(t)).then(function(n){return n.ok?n.headers.get("content-type").includes("application/json")?n.json():Promise.reject(new Error("Content type is not supported")):Promise.reject(new Error("Request status - ".concat(n.status)))})},e=function(n){var t=document.querySelector(".phone-info"),e="https://mate-academy.github.io/phone-catalogue-static/"+"".concat(n.images[0]),o=document.createElement("img");o.setAttribute("src",e),o.setAttribute("alt",n.name),o.classList.add("phone-info__img"),o.addEventListener("load",function(){document.querySelector(".loader").replaceWith(o)}),t.innerHTML="\n    <h1>".concat(n.name,'</h1>\n    <div class="loader"></div>\n    <p>').concat(n.description,"</p>\n  ")},o=function(n){document.body.innerHTML+='\n    <div class="error">\n      <div class="error__message">'.concat(n,"</div>\n    </div>\n  ")},c=function(n,c){n.target.firstElementChild.hasAttribute("disabled")||n.target.firstElementChild.setAttribute("disabled","true");var r=c.find(function(t){return t.name===n.target.value});document.querySelector(".phone-info").innerHTML='\n    <div class="loader" />\n  ',t("/phones/".concat(r.id,".json")).then(function(n){return e(n)}).catch(function(n){return o(n)})},r=function(n){var t=document.querySelector(".root");t.innerHTML="\n    <select>\n      <option>Please choose a phone</option>\n      ".concat(n.map(function(n){return"<option>".concat(n.name,"</option>")}).join(""),'\n    </select>\n    <section class="phone-info" />\n  '),t.firstElementChild.addEventListener("change",function(t){return c(t,n)})},i=document.createElement("div");i.classList.add("root"),i.innerHTML='\n  <div class="loader"></div>\n',document.body.append(i),t("/phones.json").then(function(n){return r(n)}).catch(function(n){return setTimeout(function(){return o(n)},5e3)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fd1bf124.js.map