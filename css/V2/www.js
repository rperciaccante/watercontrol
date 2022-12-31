var Ee=Object.defineProperty,Se=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ie=(s,e,t)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,C=(s,e)=>{for(var t in e||(e={}))Ce.call(e,t)&&ie(s,t,e[t]);if(se)for(var t of se(e))Oe.call(e,t)&&ie(s,t,e[t]);return s},O=(s,e)=>Se(s,ke(e));const V=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),re=new Map;class oe{constructor(e,t){if(this._$cssResult$=!0,t!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=re.get(this.cssText);return V&&e===void 0&&(re.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Pe=s=>new oe(typeof s=="string"?s:s+"",F),y=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("use css function "+n+". Use unsafeCSS")})(r)+s[o+1],s[0]);return new oe(t,F)},Ue=(s,e)=>{V?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)})},ne=V?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pe(t)})(s):s;var W;const le=window.reactiveElementPolyfillSupport,J={toAttribute(s,e){switch(e){case Boolean:s=s?"":null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ae=(s,e)=>e!==s&&(e==e||s==s),K={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:ae};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Eh(i,t);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ne(r))}else e!==void 0&&t.push(ne(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Ep(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Em)!==null&&t!==void 0?t:this._$Em=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Em)===null||t===void 0||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ue(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Em)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Em)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=K){var r,o;const n=this.constructor._$Eh(e,i);if(n!==void 0&&i.reflect===!0){const h=((o=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&o!==void 0?o:J.toAttribute)(t,i.type);this._$Ei=e,h==null?this.removeAttribute(n):this.setAttribute(n,h),this._$Ei=null}}_$AK(e,t){var i,r,o;const n=this.constructor,h=n._$Eu.get(e);if(h!==void 0&&this._$Ei!==h){const l=n.getPropertyOptions(h),a=l.converter,g=(o=(r=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof a=="function"?a:null)!==null&&o!==void 0?o:J.fromAttribute;this._$Ei=h,this[h]=g(t,l.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ae)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$ES===void 0&&(this._$ES=new Map),this._$ES.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,o)=>this[o]=r),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Em)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Em)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){this._$ES!==void 0&&(this._$ES.forEach((t,i)=>this._$Eg(i,this[i],t)),this._$ES=void 0),this._$EU()}updated(e){}firstUpdated(e){}}A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},le==null||le({ReactiveElement:A}),((W=globalThis.reactiveElementVersions)!==null&&W!==void 0?W:globalThis.reactiveElementVersions=[]).push("1.0.1");var Q;const L=globalThis.trustedTypes,he=L?L.createPolicy("lit-html",{createHTML:s=>s}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+_,Te=`<${ce}>`,x=document,P=(s="")=>x.createComment(s),U=s=>s===null||typeof s!="object"&&typeof s!="function",de=Array.isArray,He=s=>{var e;return de(s)||typeof((e=s)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,pe=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ge=/'/g,ve=/"/g,fe=/^(?:script|style|textarea)$/i,$e=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),d=$e(1),Ne=$e(2),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,Me=(s,e,t)=>{var i,r;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let n=o._$litPart$;if(n===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new N(e.insertBefore(P(),h),h,void 0,t!=null?t:{})}return n._$AI(s),n},S=x.createTreeWalker(x,129,null,!1),Re=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":"",n=T;for(let l=0;l<t;l++){const a=s[l];let g,c,u=-1,v=0;for(;v<a.length&&(n.lastIndex=v,c=n.exec(a),c!==null);)v=n.lastIndex,n===T?c[1]==="!--"?n=ue:c[1]!==void 0?n=pe:c[2]!==void 0?(fe.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=w):c[3]!==void 0&&(n=w):n===w?c[0]===">"?(n=r!=null?r:T,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,g=c[1],n=c[3]===void 0?w:c[3]==='"'?ve:ge):n===ve||n===ge?n=w:n===ue||n===pe?n=T:(n=w,r=void 0);const B=n===w&&s[l+1].startsWith("/>")?" ":"";o+=n===T?a+Te:u>=0?(i.push(g),a.slice(0,u)+"$lit$"+a.slice(u)+_+B):a+_+(u===-2?(i.push(void 0),l):B)}const h=o+(s[t]||"<?>")+(e===2?"</svg>":"");return[he!==void 0?he.createHTML(h):h,i]};class H{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const h=e.length-1,l=this.parts,[a,g]=Re(e,t);if(this.el=H.createElement(a,i),S.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(r=S.nextNode())!==null&&l.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const c=[];for(const u of r.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(_)){const v=g[n++];if(c.push(u),v!==void 0){const B=r.getAttribute(v.toLowerCase()+"$lit$").split(_),D=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:D[2],strings:B,ctor:D[1]==="."?De:D[1]==="?"?Le:D[1]==="@"?je:j})}else l.push({type:6,index:o})}for(const u of c)r.removeAttribute(u)}if(fe.test(r.tagName)){const c=r.textContent.split(_),u=c.length-1;if(u>0){r.textContent=L?L.emptyScript:"";for(let v=0;v<u;v++)r.append(c[v],P()),S.nextNode(),l.push({type:2,index:++o});r.append(c[u],P())}}}else if(r.nodeType===8)if(r.data===ce)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)l.push({type:7,index:o}),c+=_.length-1}o++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function k(s,e,t=s,i){var r,o,n,h;if(e===E)return e;let l=i!==void 0?(r=t._$Cl)===null||r===void 0?void 0:r[i]:t._$Cu;const a=U(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,t,i)),i!==void 0?((n=(h=t)._$Cl)!==null&&n!==void 0?n:h._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=k(s,l._$AS(s,e.values),l,i)),e}class Be{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:x).importNode(i,!0);S.currentNode=o;let n=S.nextNode(),h=0,l=0,a=r[0];for(;a!==void 0;){if(h===a.index){let g;a.type===2?g=new N(n,n.nextSibling,this,e):a.type===1?g=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(g=new ze(n,this,e)),this.v.push(g),a=r[++l]}h!==(a==null?void 0:a.index)&&(n=S.nextNode(),h++)}return o}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{constructor(e,t,i,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),U(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==E&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):He(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=H.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(i);else{const n=new Be(o,this),h=n.p(this.options);n.m(i),this.S(h),this._$AH=n}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new H(e)),t}M(e){de(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new N(this.A(P()),this.A(P()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class j{constructor(e,t,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=k(this,e,t,0),n=!U(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const h=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=k(this,h[i+l],t,l),a===E&&(a=this._$AH[l]),n||(n=!U(a)||a!==this._$AH[l]),a===p?e=p:e!==p&&(e+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!r&&this.k(e)}k(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class De extends j{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===p?void 0:e}}class Le extends j{constructor(){super(...arguments),this.type=4}k(e){e&&e!==p?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class je extends j{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=k(this,e,t,0))!==null&&i!==void 0?i:p)===E)return;const r=this._$AH,o=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const be=window.litHtmlPolyfillSupport;be==null||be(H,N),((Q=globalThis.litHtmlVersions)!==null&&Q!==void 0?Q:globalThis.litHtmlVersions=[]).push("2.0.1");var Z,Y;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return E}}m.finalized=!0,m._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:m});const _e=globalThis.litElementPolyfillSupport;_e==null||_e({LitElement:m});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.0.1");const M=s=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(n){window.customElements.define(t,n)}}})(s,e),Ie=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?O(C({},e),{finisher(t){t.createProperty(e.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function f(s){return(e,t)=>t!==void 0?((i,r,o)=>{r.constructor.createProperty(o,i)})(s,e,t):Ie(s,e)}function z(s){return f(O(C({},s),{state:!0}))}const qe=({finisher:s,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,n=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:O(C({},t),{key:o});return s!=null&&(n.finisher=function(h){s(h,o)}),n}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(o,i)}};function Ve(s,e){return qe({descriptor:t=>{const i={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,n;return this[r]===void 0&&(this[r]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null),this[r]}}return i}})}var G=y`:host{font-family:ui-monospace,system-ui,Helvetica,"Arial Narrow",Roboto,Oxygen,Ubuntu,sans-serif;color-scheme:light dark;--primary-color:#03a9f4;transition:all 350ms!important}`,we=y`.btn,button{cursor:pointer;border-radius:4px;background-color:inherit;background-image:linear-gradient(0deg,rgba(127,127,127,.5) 0,rgba(127,127,127,.5) 100%);color:inherit;border:1px solid rgba(127,127,127,.5);padding:2px}.btn:active,button:active{background-image:linear-gradient(0deg,rgba(127,127,127,.8) 0,rgba(127,127,127,.2) 100%);transition-duration:1s}.btn:hover,button:hover{background-image:linear-gradient(0deg,rgba(127,127,127,.2) 0,rgba(127,127,127,.8) 100%);transition-duration:1s}.rnd{border-radius:1rem;height:2rem;width:2rem;font-weight:500;font-size:1.2rem}`,Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,ye=(s,e,t,i)=>{for(var r=i>1?void 0:i?We(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Fe(e,t,r),r};function X(){let s=window.location.pathname;return s.endsWith("/")?s.slice(0,-1):s}let Je=X(),ee=class extends m{constructor(){super();this.entities=[]}connectedCallback(){var s;super.connectedCallback(),(s=window.source)==null||s.addEventListener("state",e=>{const t=e,i=JSON.parse(t.data);let r=this.entities.findIndex(o=>o.unique_id===i.id);if(r===-1&&i.id){let o=i.id.split("-"),n=O(C({},i),{domain:o[0],unique_id:i.id,id:o.slice(1).join("-")});this.entities.push(n),this.entities.sort((h,l)=>h.name<l.name?-1:1),this.requestUpdate()}else delete i.id,delete i.domain,delete i.unique_id,Object.assign(this.entities[r],i),this.requestUpdate()})}actionButton(s,e,t){let i=t||e.toLowerCase();return d`<button class="rnd" @click="${()=>this.restAction(s,i)}">${e}</button>`}select(s,e,t,i,r){return d`<select @change="${o=>{var h;let n=(h=o.target)==null?void 0:h.value;this.restAction(s,`${e}?${t}=${encodeURIComponent(n)}`)}}">${i.map(o=>d`<option value="${o}" ?selected="${o==r}">${o}</option>`)}</select>`}range(s,e,t,i,r,o,n){return d`<div class="range"><label>${r||0}</label> <input type="${s.mode==1?"number":"range"}" name="${s.unique_id}" id="${s.unique_id}" step="${n}" min="${r}" max="${o}" value="${i}" @change="${h=>{var a;let l=(a=h.target)==null?void 0:a.value;this.restAction(s,`${e}?${t}=${l}`)}}"> <label>${o||100}</label></div>`}switch(s){return d`<esp-switch color="var(--primary-color,currentColor)" .state="${s.state}" @state="${e=>{let t="turn_"+e.detail.state;this.restAction(s,t.toLowerCase())}}"></esp-switch>`}control(s){if(s.domain==="switch")return[this.switch(s)];if(s.domain==="fan")return[s.speed," ",s.speed_level,this.switch(s),s.speed_count?this.range(s,`turn_${s.state.toLowerCase()}`,"speed_level",s.speed_level,0,s.speed_count,1):""];if(s.domain==="light")return[this.switch(s),s.effects&&this.select(s,"turn_on","effect",s.effects,s.effect)];if(s.domain==="lock")return d`${this.actionButton(s,"\u{1F510}","lock")} ${this.actionButton(s,"\u{1F513}","unlock")} ${this.actionButton(s,"\u2191","open")}`;if(s.domain==="cover")return d`${this.actionButton(s,"\u2191","open")} ${this.actionButton(s,"\u2610","stop")} ${this.actionButton(s,"\u2193","close")}`;if(s.domain==="button")return d`${this.actionButton(s,"\u2610","press ")}`;if(s.domain==="select")return this.select(s,"set","option",s.option,s.value);if(s.domain==="number")return this.range(s,"set","value",s.value,s.min_value,s.max_value,s.step);if(s.domain==="climate"){let e,t;return s.target_temperature_low!==void 0?(t=d`${s.target_temperature_low} .. ${s.target_temperature_high}`,e=d`${this.range(s,"set","target_temperature_low",s.target_temperature_low,s.min_temp,s.max_temp,s.step)} ${this.range(s,"set","target_temperature_high",s.target_temperature_high,s.min_temp,s.max_temp,s.step)}`):(t=d`${s.target_temperature}`,e=d`${this.range(s,"set","target_temperature",s.target_temperature,s.min_temp,s.max_temp,s.step)}`),d`<label>Current: ${s.current_temperature}, Target: ${t}</label> ${e}<br>Mode: ${s.modes.map(i=>d`<label><input type="radio" name="${s.unique_id}_mode" @change="${r=>{var n;let o=(n=r.target)==null?void 0:n.value;this.restAction(s,`set?mode=${o}`)}}" value="${i}" ?checked="${s.mode===i}">${i}</label>`)}`}return d``}restAction(s,e){fetch(`${Je}/${s.domain}/${s.id}/${e}`,{method:"POST",body:"true"}).then(t=>{console.log(t)})}render(){return d`<table><thead><tr><th>Name</th><th>State</th><th>Actions</th></tr></thead><tbody>${this.entities.map(s=>d`<tr><td>${s.name}</td><td>${s.state}</td><td>${this.control(s)}</td></tr>`)}</tbody></table>`}static get styles(){return[G,we,y`table{border-spacing:0;border-collapse:collapse;width:100%;border:1px solid currentColor}th{font-weight:600;text-align:left}td,th{padding:.25rem .5rem;border:1px solid currentColor}td:nth-child(2),th:nth-child(2){text-align:center}tr th,tr:nth-child(2n){background-color:rgba(127,127,127,.3)}select{background-color:inherit;color:inherit;width:100%;border-radius:4px}option{color:currentColor;background-color:var(--primary-color,currentColor)}input[type=range]{width:calc(100% - 8rem);height:.75rem}.range{text-align:center}`]}};ye([z({type:Array,reflect:!0})],ee.prototype,"entities",2);ee=ye([M("esp-entity-table")],ee);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,te=(s,e,t,i)=>{for(var r=i>1?void 0:i?Qe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Ke(e,t,r),r};let I=class extends m{constructor(){super();this.rows=10,this.logs=[]}connectedCallback(){var s;super.connectedCallback(),(s=window.source)==null||s.addEventListener("log",e=>{const i=e.data;let o=i.slice(10,i.length-4).split(":").slice(0,2).join(":"),n=i.slice(12+o.length,i.length-4);const l={type:{"[1;31m":"e","[0;33m":"w","[0;32m":"i","[0;35m":"c","[0;36m":"d","[0;37m":"v"}[i.slice(0,7)],level:i.slice(7,10),tag:o,detail:n,when:new Date().toTimeString().split(" ")[0]};this.logs.push(l),this.logs=this.logs.slice(-this.rows)})}render(){return d`<div class="flow-x"><table><thead><tr><th>Time</th><th>level</th><th>Tag</th><th>Message</th></tr></thead><tbody>${this.logs.map(s=>d`<tr class="${s.type}"><td>${s.when}</td><td>${s.level}</td><td>${s.tag}</td><td><pre>${s.detail}</pre></td></tr>`)}</tbody></table></div>`}static get styles(){return y`table{font-family:monospace;background-color:#1c1c1c;color:#fff;width:100%;border:1px solid #dfe2e5;line-height:1}thead{border:1px solid #dfe2e5;line-height:1rem}th{text-align:left}td,th{padding:.25rem .5rem}pre{margin:0}.v{color:#888}.d{color:#0dd}.c{color:#ff00ff}.i{color:#32cd32}.w{color:#ff0}.e{color:red;font-weight:700}.flow-x{overflow-x:auto}`}};te([f({type:Number})],I.prototype,"rows",2);te([z()],I.prototype,"logs",2);I=te([M("esp-log")],I);var Ze=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,b=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ye(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Ze(e,t,r),r};const Ae="checkbox-lever";let $=class extends m{constructor(){super(...arguments);this.checkbox=null,this.toggleCallback=null,this.labelOn="On",this.labelOff="Off",this.stateOn="ON",this.stateOff="OFF",this.state="OFF",this.color="currentColor",this.disabled=!1,this.optimistic=!1}firstUpdated(s){var e;this.checkbox=(e=this.shadowRoot)==null?void 0:e.getElementById(Ae)}isOn(){return this.state===this.stateOn}toggle(s){let e=this.state;this.state=this.isOn()?this.stateOff:this.stateOn;let t=new CustomEvent("state",{detail:{state:this.state,id:this.id}});this.dispatchEvent(t),this.optimistic||new Promise((i,r)=>{this.toggleCallback=i,setTimeout(()=>{r()},500)}).catch(()=>{this.state=e,this.requestUpdate()})}requestUpdate(s,e){return s&&s=="state"&&(this.checkbox&&(this.checkbox.checked=this.isOn()),this.toggleCallback&&this.toggleCallback()),super.requestUpdate(s,e)}render(){return d`<div class="sw"><label>${this.labelOff} <input id="${Ae}" type="checkbox" ?checked="${this.isOn()}" ?disabled="${this.disabled}" @click="${this.toggle}"> <span style="color:${this.color}" class="lever"></span> ${this.labelOn}</label></div>`}static get styles(){return[G,y`.sw,.sw *{-webkit-tap-highlight-color:transparent;user-select:none;cursor:pointer}input[type=checkbox]{opacity:0;width:0;height:0}input[type=checkbox]:checked+.lever{background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.5) 0,rgba(255,255,255,.5) 100%)}input[type=checkbox]:checked+.lever:after,input[type=checkbox]:checked+.lever:before{left:18px}input[type=checkbox]:checked+.lever:after{background-color:currentColor}.lever{content:"";display:inline-block;position:relative;width:36px;height:14px;background-image:linear-gradient(0deg,rgba(127,127,127,.5) 0,rgba(127,127,127,.5) 100%);background-color:inherit;border-radius:15px;margin-right:10px;transition:background .3s ease;vertical-align:middle;margin:0 16px}.lever:after,.lever:before{content:"";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease,transform .1s ease}.lever:before{background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.9) 0,rgba(255,255,255,.9) 100%)}.lever:after{background-color:#f1f1f1;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}input[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever::before,input[type=checkbox]:checked:not(:disabled)~.lever:active::before{transform:scale(2.4);background-color:currentColor;background-image:linear-gradient(0deg,rgba(255,255,255,.9) 0,rgba(255,255,255,.9) 100%)}input[type=checkbox]:not(:disabled).tabbed:focus~.lever::before,input[type=checkbox]:not(:disabled)~.lever:active:before{transform:scale(2.4);background-color:rgba(0,0,0,.08)}input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,.12)}input[type=checkbox][disabled]+.lever:after,input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}`]}};b([f({type:String})],$.prototype,"labelOn",2);b([f({type:String})],$.prototype,"labelOff",2);b([f({type:String})],$.prototype,"stateOn",2);b([f({type:String})],$.prototype,"stateOff",2);b([f({type:String})],$.prototype,"state",2);b([f({type:String})],$.prototype,"color",2);b([f({type:Boolean})],$.prototype,"disabled",2);b([f({type:Boolean})],$.prototype,"optimistic",2);$=b([M("esp-switch")],$);var Ge='<svg xmlns="http://www.w3.org/2000/svg" viewBox="7 8 73 56" width="73" height="56"><g style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><g id="b"><path d="M27 16v-4c0-1 1-2.7 2-2.7 2 0 3 1.7 3 2.7v4" id="a"/><use x="9" href="#a"/><use x="18" href="#a"/><use x="27" href="#a"/><use x="36" href="#a"/><use x="45" href="#a"/></g><use transform="matrix(1 0 0 -1 0 72)" href="#b"/><path d="M78 16H26c-1 0-1 1-1 1v38c0 1 0 1 1 1h52c1 0 1 0 1-1V17s0-1-1-1z" class="box"/><path d="M40 38h2.9v7.8h17V38h2.9l-2.9-2.9V30h-1.8v3.3l-6.8-6.8z" class="home" fill="currentColor"/><path d="M24 54H8v-4h12v-4H8v-4h12v-4H8v-4h12v-4H8V18" class="aerial"/></g></svg>',Xe=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=(s,e,t,i)=>{for(var r=i>1?void 0:i?et(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Xe(e,t,r),r};let xe=class extends m{render(){return Ne([Ge])}};xe=tt([M("esp-logo")],xe);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,q=(s,e,t,i)=>{for(var r=i>1?void 0:i?it(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&st(e,t,r),r};window.source=new EventSource(X()+"/events");let R=class extends m{constructor(){super();this.scheme="",this.ping="",this.version="2.0.5",this.config={ota:!1,title:""},this.darkQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.frames=[{color:"inherit"},{color:"red",transform:"scale(1.25) translateY(-30%)"},{color:"inherit"}]}firstUpdated(s){super.firstUpdated(s),document.getElementsByTagName("head")[0].innerHTML+='<meta name=viewport content="width=device-width, initial-scale=1,user-scalable=no">';const e=document.querySelector("link[rel~='icon']");e.href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><path d="M1 12.5h2.9v7.8h17v-7.8h2.9l-2.9-2.9V4.5h-1.8v3.3L12.3 1 1 12.5Z"/></svg>',this.darkQuery.addEventListener("change",()=>{this.scheme=this.isDark()}),this.scheme=this.isDark(),window.source.addEventListener("ping",t=>{const i=t;if(i.data.length){const o=JSON.parse(i.data);this.config=o,document.title=o.title,document.documentElement.lang=o.lang}this.ping=i.lastEventId}),window.source.onerror=function(t){console.dir(t)}}isDark(){return this.darkQuery.matches?"dark":"light"}updated(s){super.updated(s),s.has("scheme")&&document.documentElement.style.setProperty("color-scheme",this.scheme),s.has("ping")&&this.beat.animate(this.frames,1e3)}ota(){if(this.config.ota){let s=X();return d`<h2>OTA Update</h2><form method="POST" action="${s}/update" enctype="multipart/form-data"><input class="btn" type="file" name="update"> <input class="btn" type="submit" value="Update"></form>`}}render(){return d`<h1><a href="https://esphome.io/web-api" class="logo"><esp-logo></esp-logo></a>${this.config.title} <span id="beat" title="${this.version}">❤</span></h1><main class="flex-grid-half"><section class="col"><esp-entity-table></esp-entity-table><h2><esp-switch color="var(--primary-color,currentColor)" class="right" .state="${this.scheme}" @state="${s=>this.scheme=s.detail.state}" labelOn="🌒" labelOff="☀️" stateOn="dark" stateOff="light" optimistic></esp-switch>Scheme</h2>${this.ota()}</section><section class="col"><esp-log rows="50"></esp-log></section></main>`}static get styles(){return[G,we,y`.flex-grid{display:flex}.flex-grid .col{flex:2}.flex-grid-half{display:flex;justify-content:space-evenly}.col{width:48%}@media (max-width:600px){.flex-grid,.flex-grid-half{display:block}.col{width:100%;margin:0 0 10px 0}}*{box-sizing:border-box}.flex-grid{margin:0 0 20px 0}h1{text-align:center;width:100%;line-height:4rem}h1,h2{border-bottom:1px solid #eaecef;margin-bottom:.25rem}#beat{float:right;height:1rem}a.logo{height:4rem;float:left;color:inherit}.right{float:right}`]}};q([z()],R.prototype,"scheme",2);q([z()],R.prototype,"ping",2);q([Ve("#beat")],R.prototype,"beat",2);R=q([M("esp-app")],R);