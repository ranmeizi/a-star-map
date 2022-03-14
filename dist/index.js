!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.AStar=o():t.AStar=o()}(self,(function(){return(()=>{"use strict";var t={d:(o,i)=>{for(var n in i)t.o(i,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:i[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};t.r(o),t.d(o,{Map:()=>c,default:()=>c});const i=["1","2","3","4","5","6","7","8"];function n(t,o){return t.G+o.cost}function e(t,o){const[i,n]=t.coord,[e,s]=o.coord;return Math.abs(i-e)+Math.abs(n-s)}function s(t){let o,i=1/0;for(let[n,e]of t.entries())(!o||e<i)&&(i=e,o=n);return o}var r;!function(t){t[t.TOP=1]="TOP",t[t.TOP_RIGHT=2]="TOP_RIGHT",t[t.RIGHT=3]="RIGHT",t[t.BOTTOM_RIGHT=4]="BOTTOM_RIGHT",t[t.BOTTOM=5]="BOTTOM",t[t.BOTTOM_LEFT=6]="BOTTOM_LEFT",t[t.LEFT=7]="LEFT",t[t.TOP_LEFT=8]="TOP_LEFT"}(r||(r={})),r.TOP,r.TOP_RIGHT,r.RIGHT,r.BOTTOM_RIGHT,r.BOTTOM,r.BOTTOM_LEFT,r.LEFT,r.TOP_LEFT;class a extends class{constructor(t,o,i){this.diagonal=!1,this.coord=t,this.cost=o,void 0!==i&&(this.diagonal=i)}setData(t){void 0!==t.cost&&(this.cost=t.cost),void 0!==t.diagonal&&(this.diagonal=t.diagonal)}}{constructor(){super(...arguments),this.G=0,this.H=1/0}}var d=function(t,o,i,n){return new(i||(i=Promise))((function(e,s){function r(t){try{d(n.next(t))}catch(t){s(t)}}function a(t){try{d(n.throw(t))}catch(t){s(t)}}function d(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(t){t(o)}))).then(r,a)}d((n=n.apply(t,o||[])).next())}))};class u{constructor(t,o){this.list=[],this.timeout=25,this.timeout=t,this.emit=o}append(t){this.list.push(t)}run(){return d(this,void 0,void 0,(function*(){for(let t of this.list)yield l(this.timeout),this.emit(...t)}))}}function l(t){return d(this,void 0,void 0,(function*(){return new Promise((o=>setTimeout(o,t)))}))}class c extends class{constructor(){this.eList={}}on(t,o){this.eList[t]?this.eList[t].push(o):this.eList[t]=[o]}un(t,o){this.eList[t]&&(this.eList[t]=this.eList[t].filter((t=>t!==o)))}emit(t,o){this.eList[t]&&this.eList[t].forEach((t=>{t(o)}))}}{constructor(t){var o;super(),this.map=[],this.bridge=new u(10,((...t)=>this._emit(...t))),this.find=(o=this.bridge,function(t,[r,a],[d,u]){function l(t){for(let r of i){const i=Number(r)%2==0;if(!t[r]||!t[r].diagonal&&i||p.has(t[r])||t[r].cost===1/0)continue;const a=t[r];if(T.has(a)){const o=a.parent;if(t.G>=o.G)continue}a.G=i?(s=a,t.G+1.4*s.cost):n(t,a),a.H=e(a,h);const d=a.G+a.H;T.set(a,d),a.parent=t,o&&o.append(["onPutOpenlist",a.coord])}var s;T.delete(t),p.set(t,""),o&&o.append(["onPutCloselist",t.coord])}const c=t[r][a];let h=t[d][u];const T=new Map;T.set(c,0);const p=new Map;for(l(c);!p.has(h);)l(s(T));const f=[];for(;h.parent;)o&&o.append(["onRoute",h.coord]),f.unshift(h.coord),h=h.parent;return f.unshift(h.coord),o&&o.append(["onRoute",h.coord]),o&&o.run(),f}),this.initMap(t)}static notInRange(t,o){return new RangeError(`x:${t},y:${o},not in range`)}_emit(t,o){this.emit(t,o)}initMap(t){var o,i,n,e,s,d,u,l,c,h,T,p,f,v,O,m;for(let o=0;o<t.length;o++){this.map[o]=[];for(let i=0;i<t[o].length;i++)this.map[o][i]=new a([o,i],t[o][i],!0)}for(let t=0;t<this.map.length;t++)for(let a=0;a<this.map[t].length;a++){const M=this.map[t][a];M[r.TOP]=null===(i=null===(o=this.map)||void 0===o?void 0:o[t-1])||void 0===i?void 0:i[a],M[r.TOP_RIGHT]=null===(e=null===(n=this.map)||void 0===n?void 0:n[t-1])||void 0===e?void 0:e[a+1],M[r.RIGHT]=null===(d=null===(s=this.map)||void 0===s?void 0:s[t])||void 0===d?void 0:d[a+1],M[r.BOTTOM_RIGHT]=null===(l=null===(u=this.map)||void 0===u?void 0:u[t+1])||void 0===l?void 0:l[a+1],M[r.BOTTOM]=null===(h=null===(c=this.map)||void 0===c?void 0:c[t+1])||void 0===h?void 0:h[a],M[r.BOTTOM_LEFT]=null===(p=null===(T=this.map)||void 0===T?void 0:T[t+1])||void 0===p?void 0:p[a-1],M[r.LEFT]=null===(v=null===(f=this.map)||void 0===f?void 0:f[t])||void 0===v?void 0:v[a-1],M[r.TOP_LEFT]=null===(m=null===(O=this.map)||void 0===O?void 0:O[t+1])||void 0===m?void 0:m[a-1]}}setNode(t,o,i){this.map[t][o].setData(i)}isInMap(t,o){return o in this.map&&t in this.map[0]}}return o})()}));