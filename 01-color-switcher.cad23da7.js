!function(){var t={bodyEl:document.querySelector("body"),startEl:document.querySelector("button[data-start]"),stopEl:document.querySelector("button[data-stop]")},o=null,n={DELAY:1e3,getRandomHexColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},interval:function(){o=setInterval((function(){t.bodyEl.style.backgroundColor="".concat(n.getRandomHexColor())}),this.DELAY)},start:function(){var o=this;t.startEl.addEventListener("click",(function(){o.interval(),t.startEl.disabled=!0,t.stopEl.disabled=!1})),t.stopEl.addEventListener("click",this.stop)},stop:function(){clearInterval(o),t.stopEl.disabled=!0,t.startEl.disabled=!1}};n.start()}();
//# sourceMappingURL=01-color-switcher.cad23da7.js.map
