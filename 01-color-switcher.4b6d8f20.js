!function(){var t={bodyEl:document.querySelector("body"),startEl:document.querySelector("button[data-start]"),stopEl:document.querySelector("button[data-stop]")};t.stopEl.disabled=!0;var o=null,e={DELAY:1e3,getRandomHexColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},interval:function(){o=setInterval((function(){t.bodyEl.style.backgroundColor="".concat(e.getRandomHexColor())}),this.DELAY),t.stopEl.disabled=!1},start:function(){var o=this;t.startEl.addEventListener("click",(function(){o.interval(),t.startEl.disabled=!0,t.stopEl.disabled=!1})),t.stopEl.addEventListener("click",this.stop)},stop:function(){clearInterval(o),t.stopEl.disabled=!0,t.startEl.disabled=!1}};e.start()}();
//# sourceMappingURL=01-color-switcher.4b6d8f20.js.map