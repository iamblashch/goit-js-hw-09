var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l=document.querySelector(".form");let i=null,u=null,a=null;function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const d=e=>{e.preventDefault(),e.target.tagName;const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;i=Number(t.value),u=Number(n.value),a=Number(o.value);for(let e=1;e<=a;e+=1)s(e,i).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),i+=u;e.currentTarget.reset()};console.log(d),l.addEventListener("sumbit",d);
//# sourceMappingURL=03-promises.498c427d.js.map