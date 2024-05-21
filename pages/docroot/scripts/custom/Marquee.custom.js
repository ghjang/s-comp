import{c as t,S as e,i as r,f as a,s,v as n,e as l,d as i,X as u,g as o,h as m,l as f,G as d,t as q,m as c,r as y,H as $,p as b,a as k,u as p,j as v,k as h,R as g,T as x,J as w}from"./chunks/index.js";function X(t){n(t,"svelte-q8lkfy","@keyframes svelte-q8lkfy-marquee-rtl{from{transform:translateX(100%)}to{transform:translateX(-100%)}}@keyframes svelte-q8lkfy-marquee-ltr{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes svelte-q8lkfy-marquee-ttb{from{transform:translateY(-100%)}to{transform:translateY(100%)}}@keyframes svelte-q8lkfy-marquee-btt{from{transform:translateY(100%)}to{transform:translateY(-100%)}}.marquee-wrapper.svelte-q8lkfy{overflow:hidden;white-space:nowrap}.marquee-rtl.svelte-q8lkfy,.marquee-ltr.svelte-q8lkfy,.marquee-ttb.svelte-q8lkfy,.marquee-btt.svelte-q8lkfy{display:inline-block;animation-timing-function:linear;animation-iteration-count:infinite;animation-fill-mode:forwards}.marquee-rtl.svelte-q8lkfy{animation-name:svelte-q8lkfy-marquee-rtl}.marquee-ltr.svelte-q8lkfy{animation-name:svelte-q8lkfy-marquee-ltr}.marquee-ttb.svelte-q8lkfy,.marquee-btt.svelte-q8lkfy{writing-mode:vertical-rl}.marquee-btt.svelte-q8lkfy{animation-name:svelte-q8lkfy-marquee-btt}.marquee-ttb.svelte-q8lkfy{animation-name:svelte-q8lkfy-marquee-ttb}")}function Y(t){let e;const r=t[7].default,a=k(r,t,t[6],null);return{c(){a&&a.c()},m(t,r){a&&a.m(t,r),e=!0},p(t,s){a&&a.p&&(!e||64&s)&&p(a,r,t,t[6],e?h(r,t[6],s,null):v(t[6]),null)},i(t){e||(q(a,t),e=!0)},o(t){f(a,t),e=!1},d(t){a&&a.d(t)}}}function j(t){let e;return{c(){e=g(t[0])},m(t,r){o(t,e,r)},p(t,r){1&r&&x(e,t[0])},i:w,o:w,d(t){t&&c(e)}}}function B(t){let e,r,a,s,n;const y=[j,Y],b=[];function k(t,e){return t[0]?0:1}return a=k(t),s=b[a]=y[a](t),{c(){e=l("div"),r=l("div"),s.c(),i(r,"class","svelte-q8lkfy"),u(r,"marquee-rtl","rtl"===t[1]),u(r,"marquee-ltr","ltr"===t[1]),u(r,"marquee-ttb","ttb"===t[1]),u(r,"marquee-btt","btt"===t[1]),i(e,"class","marquee-wrapper svelte-q8lkfy")},m(s,l){o(s,e,l),m(e,r),b[a].m(r,null),t[8](r),t[9](e),n=!0},p(t,[e]){let l=a;a=k(t),a===l?b[a].p(t,e):($(),f(b[l],1,1,(()=>{b[l]=null})),d(),s=b[a],s?s.p(t,e):(s=b[a]=y[a](t),s.c()),q(s,1),s.m(r,null)),(!n||2&e)&&u(r,"marquee-rtl","rtl"===t[1]),(!n||2&e)&&u(r,"marquee-ltr","ltr"===t[1]),(!n||2&e)&&u(r,"marquee-ttb","ttb"===t[1]),(!n||2&e)&&u(r,"marquee-btt","btt"===t[1])},i(t){n||(q(s),n=!0)},o(t){f(s),n=!1},d(r){r&&c(e),b[a].d(),t[8](null),t[9](null)}}}function R(t,e,r){let a,s,n,{$$slots:l={},$$scope:i}=e,{text:u=""}=e,{direction:o="rtl"}=e,{duration:m=3}=e,{debug:f=!1}=e;return y((function(){const{width:t,height:e}=s.getBoundingClientRect();r(2,a.style.width=`${t}px`,a),r(2,a.style.height=`${e}px`,a),n=m||t/100,r(3,s.style.animationDuration=`${n}s`,s)})),t.$$set=t=>{"text"in t&&r(0,u=t.text),"direction"in t&&r(1,o=t.direction),"duration"in t&&r(4,m=t.duration),"debug"in t&&r(5,f=t.debug),"$$scope"in t&&r(6,i=t.$$scope)},t.$$.update=()=>{44&t.$$.dirty&&function(t,e,r){e&&(e.style.border=t?"1px solid black":""),r&&(r.style.border=t?"1px solid red":"")}(f,a,s)},[u,o,a,s,m,f,i,l,function(t){b[t?"unshift":"push"]((()=>{s=t,r(3,s)}))},function(t){b[t?"unshift":"push"]((()=>{a=t,r(2,a)}))}]}class C extends e{constructor(t){super(),r(this,t,R,B,s,{text:0,direction:1,duration:4,debug:5},X)}get text(){return this.$$.ctx[0]}set text(t){this.$$set({text:t}),a()}get direction(){return this.$$.ctx[1]}set direction(t){this.$$set({direction:t}),a()}get duration(){return this.$$.ctx[4]}set duration(t){this.$$set({duration:t}),a()}get debug(){return this.$$.ctx[5]}set debug(t){this.$$set({debug:t}),a()}}customElements.define("s-marquee",t(C,{text:{},direction:{},duration:{},debug:{type:"Boolean"}},["default"],[],!0));export{C as default};
//# sourceMappingURL=Marquee.custom.js.map