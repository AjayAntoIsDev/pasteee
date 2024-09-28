import{n as ht,s as ge,G as yt}from"./scheduler.VK6vfmC_.js";new URL("sveltekit-internal://");function me(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function _e(t){return t.split("%25").map(decodeURI).join("%25")}function ye(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function pt({href:t}){return t.split("#")[0]}const we=["href","pathname","search","toString","toJSON"];function ve(t,n,e){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of we)Object.defineProperty(a,r,{get(){return n(),t[r]},enumerable:!0,configurable:!0});return a}const be="/__data.json",ke=".html__data.json";function Ee(t){return t.endsWith(".html")?t.replace(/\.html$/,ke):t.replace(/\/$/,"")+be}function Se(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ae(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const Ht=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(Et(t)),Ht(t,n));const H=new Map;function Re(t,n){const e=Et(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&H.set(e,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Ae(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function Ie(t,n,e){if(H.size>0){const a=Et(t,e),r=H.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);H.delete(a)}}return window.fetch(n,e)}function Et(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Se(...r)}"]`}return a}const Le=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pe(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${xe(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return gt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return gt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Le.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return gt(c)}).join("")}).join("")}/?$`),params:n}}function Ue(t){return!/^\([^)]+\)$/.test(t)}function xe(t){return t.slice(1).split("/").filter(Ue)}function Te(t,n,e){const a={},r=t.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){a[c.name]=l;const u=n[s+1],h=r[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function gt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ne({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Pe(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return Te(f,g,a)},errors:[1,...u||[]].map(_=>t[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[r.has(s),t[s]]}}function Bt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Ot(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}const j=[];function St(t,n=ht){let e;const a=new Set;function r(s){if(ge(t,s)&&(t=s,e)){const c=!j.length;for(const l of a)l[1](),j.push(l,t);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(s){r(s(t))}function i(s,c=ht){const l=[s,c];return a.add(l),a.size===1&&(e=n(r,o)||ht),s(t),()=>{a.delete(l),a.size===0&&e&&(e(),e=null)}}return{set:r,update:o,subscribe:i}}var Gt;const P=((Gt=globalThis.__sveltekit_t4rna2)==null?void 0:Gt.base)??"";var Mt;const Oe=((Mt=globalThis.__sveltekit_t4rna2)==null?void 0:Mt.assets)??P,je="1727504386572",Kt="sveltekit:snapshot",zt="sveltekit:scroll",Jt="sveltekit:states",$e="sveltekit:pageurl",C="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Yt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function At(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const jt={...Z,"":Z.hover};function Wt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Xt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Wt(t)}}function wt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!a||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===W&&t.hasAttribute("download");return{url:e,external:r,target:a,download:o}}function Q(t){let n=null,e=null,a=null,r=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)a===null&&(a=$(s,"preload-code")),r===null&&(r=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),e===null&&(e=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Wt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:jt[a??"off"],preload_data:jt[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function $t(t){const n=St(t);let e=!0;function a(){e=!0,n.update(i=>i)}function r(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function De(){const{set:t,subscribe:n}=St(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${Oe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==je;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:a}}function rt(t,n){return t.origin!==W||!t.pathname.startsWith(n)}const Ce=-1,Ve=-2,Fe=-3,qe=-4,Ge=-5,Me=-6;function on(t,n){return Zt(JSON.parse(t),n)}function Zt(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,i=!1){if(o===Ce)return;if(o===Fe)return NaN;if(o===qe)return 1/0;if(o===Ge)return-1/0;if(o===Me)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=e[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<s.length;d+=1)u.add(r(s[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<s.length;d+=2)h.set(r(s[d]),r(s[d+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=r(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ve&&(c[l]=r(u))}}else{const c={};a[o]=c;for(const l in s){const u=s[l];c[l]=r(u)}}return a[o]}return r(0)}const Qt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Qt];const He=new Set([...Qt]);[...He];function Be(t){return t.filter(n=>n!=null)}class ot{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class te{constructor(n,e){this.status=n,this.location=e}}class Rt extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const Ke="x-sveltekit-invalidated",ze="x-sveltekit-trailing-slash";function tt(t){return t instanceof ot||t instanceof Rt?t.status:500}function Je(t){return t instanceof Rt?t.text:"Internal Error"}const O=Bt(zt)??{},z=Bt(Kt)??{},x={url:$t({}),page:$t({}),navigating:St(null),updated:De()};function It(t){O[t]=At()}function Ye(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;z[e];)delete z[e],e+=1}function F(t){return location.href=t.href,new Promise(()=>{})}function Dt(){}let st,vt,et,U,bt,G;const ee=[],nt=[];let I=null;const ne=[],We=[];let D=[],y={branch:[],error:null,url:null},Lt=!1,at=!1,Ct=!0,J=!1,M=!1,ae=!1,it=!1,N,S,L,A,q;const B=new Set;let mt;async function sn(t,n,e){var r,o;document.URL!==location.href&&(location.href=location.href),G=t,st=Ne(t),U=document.documentElement,bt=n,vt=t.nodes[0],et=t.nodes[1],vt(),et(),S=(r=history.state)==null?void 0:r[C],L=(o=history.state)==null?void 0:o[K],S||(S=L=Date.now(),history.replaceState({...history.state,[C]:S,[K]:L},""));const a=O[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await an(bt,e):en(location.href,{replaceState:!0}),nn()}async function Xe(){if(await(mt||(mt=Promise.resolve())),!mt)return;mt=null;const t=ft(y.url,!0);I=null;const n=q={},e=t&&await xt(t);if(!(!e||n!==q)){if(e.type==="redirect")return ct(new URL(e.location,y.url).href,{},1,n);e.props.page&&(A=e.props.page),y=e.state,re(),N.$set(e.props)}}function re(){ee.length=0,it=!1}function oe(t){nt.some(n=>n==null?void 0:n.snapshot)&&(z[t]=nt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function se(t){var n;(n=z[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=nt[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function Vt(){It(S),Ot(zt,O),oe(L),Ot(Kt,z)}async function ct(t,n,e,a){return X({type:"goto",url:Yt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(it=!0)}})}async function Ze(t){if(t.id!==(I==null?void 0:I.id)){const n={};B.add(n),I={id:t.id,token:n,promise:xt({...t,preload:n}).then(e=>(B.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function _t(t){const n=st.find(e=>e.exec(le(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ie(t,n,e){var o;y=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),A=t.props.page,N=new G.root({target:n,props:{...t.props,stores:x,components:nt},hydrate:e}),se(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(r)),at=!0}async function Y({url:t,params:n,branch:e,status:a,error:r,route:o,form:i}){let s="never";if(P&&(t.pathname===P||t.pathname===P+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=me(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Be(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const _=e[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==r||i!==void 0&&i!==A.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function Pt({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,e);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(a,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:ve(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const R=new URL(b,e);return s&&d(R.href),R.origin===e.origin&&(b=R.href.slice(e.origin.length)),at?Ie(b,R.href,m):Re(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ft(t,n,e,a,r,o){if(it)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==y.params[i])return!0;for(const i of r.dependencies)if(ee.some(s=>s(new URL(i))))return!0;return!1}function Ut(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Qe(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&e.delete(a)}return e}function qt({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:A,constructors:[]}}}async function xt({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((I==null?void 0:I.id)===t)return B.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=r,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?t!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Qe(y.url,e);let _=!1;const f=l.map((p,v)=>{var T;const k=y.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||Ft(_,g,h,d,(T=k.server)==null?void 0:T.uses,a));return E&&(_=!0),E});if(f.some(Boolean)){try{u=await de(e,f)}catch(p){const v=await V(p,{url:e,params:a,route:{id:t}});return B.has(o)?qt({error:v,url:e,params:a,route:r}):lt({status:tt(p),error:v,url:e,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const R=l.map(async(p,v)=>{var ut;if(!p)return;const k=y.branch[v],E=m==null?void 0:m[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!Ft(b,g,h,d,(ut=k.universal)==null?void 0:ut.uses,a))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Pt({loader:p[1],url:e,params:a,route:r,parent:async()=>{var Nt;const Tt={};for(let dt=0;dt<v;dt+=1)Object.assign(Tt,(Nt=await R[dt])==null?void 0:Nt.data);return Tt},server_data_node:Ut(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of R)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await R[p])}catch(v){if(v instanceof te)return{type:"redirect",location:v.location};if(B.has(o))return qt({error:await V(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let k=tt(v),E;if(m!=null&&m.includes(v))k=v.status??k,E=v.error;else if(v instanceof ot)E=v.body;else{if(await x.updated.check())return await F(e);E=await V(v,{params:a,url:e,route:{id:r.id}})}const T=await ce(p,w,i);return T?await Y({url:e,params:a,branch:w.slice(0,T.idx).concat(T.node),status:k,error:E,route:r}):await ue(e,{id:r.id},E,k)}else w.push(void 0);return await Y({url:e,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function ce(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function lt({status:t,error:n,url:e,route:a}){const r={};let o=null;if(G.server_loads[0]===0)try{const l=await de(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==W||e.pathname!==location.pathname||Lt)&&await F(e)}const s=await Pt({loader:vt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ut(o)}),c={node:await et(),loader:et,universal:null,server:null,data:null};return await Y({url:e,params:r,branch:[s,c],status:t,error:n,route:null})}function ft(t,n){if(!t||rt(t,P))return;let e;try{e=G.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const a=le(e);for(const r of st){const o=r.exec(a);if(o)return{id:t.pathname+t.search,invalidating:n,route:r,params:ye(o),url:t}}}function le(t){return _e(t.slice(P.length)||"/")}function fe({url:t,type:n,intent:e,delta:a}){let r=!1;const o=pe(y,e,t,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return J||ne.forEach(s=>s(i)),r?null:o}async function X({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Dt,block:u=Dt}){const h=ft(n,!1),g=fe({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),J=!0,at&&x.navigating.set(g.navigation),q=c;let f=h&&await xt(h);if(!f){if(rt(n,P))return await F(n);f=await ue(n,{id:null},await V(new Rt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await lt({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ct(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await F(n);if(re(),It(d),oe(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const w=o?0:1,p={[C]:S+=w,[K]:L+=w,[Jt]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ye(S,L)}if(I=null,f.props.page.state=i,at){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(We.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){D=D.filter(v=>!w.includes(v))};w.push(p),D.push(...w)}N.$set(f.props),ae=!0}else ie(f,bt,!1);const{activeElement:m}=document;await yt();const b=e?e.scroll:r?At():null;if(Ct){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!a&&!R&&kt(),Ct=!0,f.props.page&&(A=f.props.page),J=!1,t==="popstate"&&se(L),g.fulfil(void 0),D.forEach(w=>w(g.navigation)),x.navigating.set(null)}async function ue(t,n,e,a){return t.origin===W&&t.pathname===location.pathname&&!Lt?await lt({status:a,error:e,url:t,route:n}):await F(t)}function tn(){let t;U.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{a(i,2)},20)});function n(o){a(o.composedPath()[0],1)}U.addEventListener("mousedown",n),U.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(_t(i.target.href),e.unobserve(i.target))},{threshold:0});function a(o,i){const s=Xt(o,U);if(!s)return;const{url:c,external:l,download:u}=wt(s,P);if(l||u)return;const h=Q(s);if(!h.reload)if(i<=h.preload_data){const g=ft(c,!1);g&&Ze(g)}else i<=h.preload_code&&_t(c.pathname)}function r(){e.disconnect();for(const o of U.querySelectorAll("a")){const{url:i,external:s,download:c}=wt(o,P);if(s||c)continue;const l=Q(o);l.reload||(l.preload_code===Z.viewport&&e.observe(o),l.preload_code===Z.eager&&_t(i.pathname))}}D.push(r),r()}function V(t,n){if(t instanceof ot)return t.body;const e=tt(t),a=Je(t);return G.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function en(t,n={}){return t=Yt(t),t.origin!==W?Promise.reject(new Error("goto: invalid URL")):ct(t,n,0)}function cn(){return it=!0,Xe()}async function ln(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:a}=y;if(!a)return;const r=await ce(y.branch.length,e,a.errors);if(r){const o=await Y({url:n,params:y.params,branch:e.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:a});y=o.state,N.$set(o.props),yt().then(kt)}}else t.type==="redirect"?ct(t.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...A,form:t.data,status:t.status}}),await yt(),N.$set({form:t.data}),t.type==="success"&&kt())}function nn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(Vt(),!J){const r=pe(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};ne.forEach(i=>i(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Vt()}),(n=navigator.connection)!=null&&n.saveData||tn(),U.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Xt(e.composedPath()[0],U);if(!a)return;const{url:r,external:o,target:i,download:s}=wt(a,P);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;if(o||c.reload){fe({url:r,type:"link"})?J=!0:e.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===pt(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(M=!0,It(S),t(r),!c.replace_state)return;M=!1}e.preventDefault(),X({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),U.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(rt(i,P))return;const s=e.target,c=Q(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=r==null?void 0:r.getAttribute("name");u&&l.append(u,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),X({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[C]){const r=e.state[C];if(q={},r===S)return;const o=O[r],i=e.state[Jt]??{},s=new URL(e.state[$e]??location.href),c=e.state[K],l=pt(location)===pt(y.url);if(c===L&&(ae||l)){t(s),O[S]=At(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},N.$set({page:A})),S=r;return}const h=r-S;await X({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:q})}else if(!M){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[C]:++S,[K]:L},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){y.url=e,x.page.set({...A,url:e}),x.page.notify()}}async function an(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:i,form:s}){Lt=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ft(c,!1)||{});let l;try{const u=a.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=he(f.uses)),Pt({loader:G.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Ut(f)})}),h=await Promise.all(u),g=st.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=await Y({url:c,params:r,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof te){await F(new URL(u.location,location.href));return}l=await lt({status:tt(u),error:await V(u,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),ie(l,t,!0)}async function de(t,n){var r;const e=new URL(t);e.pathname=Ee(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(ze,"1"),e.searchParams.append(Ke,n.map(o=>o?"1":"0").join(""));const a=await Ht(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ot(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function l(g){return Zt(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=he(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:R}=f,w=i.get(m);i.delete(m),R?w.reject(l(R)):w.fulfil(l(b))}}}})}function he(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function kt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function pe(t,n,e,a){var c,l;let r,o;const i=new Promise((u,h)=>{r=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{ln as a,sn as b,en as g,cn as i,on as p,x as s};
