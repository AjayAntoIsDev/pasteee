import{s as v,e as b,t as c,c as $,b as E,d as m,f as d,o as S,i as j,h as p,j as g,n as x,k}from"../chunks/scheduler.VK6vfmC_.js";import{S as q,i as y}from"../chunks/index.BycGP4sO.js";import{p as C}from"../chunks/stores.Dawflz9q.js";function H(n){var h,u;let t,a=n[0].status+"",r,o,i=((u=(h=n[0])==null?void 0:h.error)==null?void 0:u.message)+"",l;return{c(){t=b("h1"),r=c(a),o=c(": "),l=c(i),this.h()},l(s){t=$(s,"H1",{class:!0});var e=E(t);r=m(e,a),o=m(e,": "),l=m(e,i),e.forEach(d),this.h()},h(){S(t,"class","text-2xl text-center mt-10")},m(s,e){j(s,t,e),p(t,r),p(t,o),p(t,l)},p(s,[e]){var f,_;e&1&&a!==(a=s[0].status+"")&&g(r,a),e&1&&i!==(i=((_=(f=s[0])==null?void 0:f.error)==null?void 0:_.message)+"")&&g(l,i)},i:x,o:x,d(s){s&&d(t)}}}function w(n,t,a){let r;return k(n,C,o=>a(0,r=o)),[r]}class D extends q{constructor(t){super(),y(this,t,w,H,v,{})}}export{D as component};
