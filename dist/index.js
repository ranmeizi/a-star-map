var AStar;(()=>{"use strict";var t={d:(o,n)=>{for(var i in n)t.o(n,i)&&!t.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:n[i]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};t.r(o),t.d(o,{Map:()=>T,find:()=>c});var n=function(t,o,n,i){return new(n||(n=Promise))((function(e,s){function r(t){try{d(i.next(t))}catch(t){s(t)}}function a(t){try{d(i.throw(t))}catch(t){s(t)}}function d(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(r,a)}d((i=i.apply(t,o||[])).next())}))};function i(t){return n(this,void 0,void 0,(function*(){return new Promise((o=>setTimeout(o,t)))}))}window.emit=function(t,o){window.PubSub.publish(t,o)};const e=new class{constructor(t){this.list=[],this.timeout=25,this.timeout=t}append(t){this.list.push(t)}run(){return n(this,void 0,void 0,(function*(){for(let t of this.list)yield i(this.timeout),window.emit(...t)}))}}(10),s=["1","2","3","4","5","6","7","8"];function r(t,o){return t.G+o.cost}function a(t,o){const[n,i]=t.coord,[e,s]=o.coord;return Math.abs(n-e)+Math.abs(i-s)}function d(t){let o,n=1/0;for(let[i,e]of t.entries())(!o||e<n)&&(n=e,o=i);return o}var l;!function(t){t[t.TOP=1]="TOP",t[t.TOP_RIGHT=2]="TOP_RIGHT",t[t.RIGHT=3]="RIGHT",t[t.BOTTOM_RIGHT=4]="BOTTOM_RIGHT",t[t.BOTTOM=5]="BOTTOM",t[t.BOTTOM_LEFT=6]="BOTTOM_LEFT",t[t.LEFT=7]="LEFT",t[t.TOP_LEFT=8]="TOP_LEFT"}(l||(l={})),l.TOP,l.TOP_RIGHT,l.RIGHT,l.BOTTOM_RIGHT,l.BOTTOM,l.BOTTOM_LEFT,l.LEFT,l.TOP_LEFT;class u extends class{constructor(t,o,n){this.diagonal=!1,this.coord=t,this.cost=o,void 0!==n&&(this.diagonal=n)}setData(t){void 0!==t.cost&&(this.cost=t.cost),void 0!==t.diagonal&&(this.diagonal=t.diagonal)}}{constructor(){super(...arguments),this.G=0,this.H=1/0}}const c=function(t,[o,n],[i,l]){function u(t){for(let n of s){const i=Number(n)%2==0;if(!t[n]||!t[n].diagonal&&i||h.has(t[n])||t[n].cost===1/0)continue;const s=t[n];if(p.has(s)){const o=s.parent;if(t.G>=o.G)continue}s.G=i?(o=s,t.G+1.4*o.cost):r(t,s),s.H=a(s,T);const d=s.G+s.H;p.set(s,d),s.parent=t,window&&e.append(["putopen",s.coord])}var o;p.delete(t),h.set(t,""),window&&e.append(["putclose",t.coord])}const c=t[o][n];let T=t[i][l];const p=new Map;p.set(c,0);const h=new Map;for(u(c);!h.has(T);)u(d(p));for(;T.parent;)window&&e.append(["route",T.coord]),T=T.parent;window&&e.append(["route",T.coord]),e.run()};class T{constructor(t){this.map=[],this.initMap(t),window&&window.PubSub.publish("newmap",t)}static notInRange(t,o){return new RangeError(`x:${t},y:${o},not in range`)}initMap(t){var o,n,i,e,s,r,a,d,c,T,p,h,v,O,f,m;for(let o=0;o<t.length;o++){this.map[o]=[];for(let n=0;n<t[o].length;n++)this.map[o][n]=new u([o,n],t[o][n],!0)}for(let t=0;t<this.map.length;t++)for(let u=0;u<this.map[t].length;u++){const w=this.map[t][u];w[l.TOP]=null===(n=null===(o=this.map)||void 0===o?void 0:o[t-1])||void 0===n?void 0:n[u],w[l.TOP_RIGHT]=null===(e=null===(i=this.map)||void 0===i?void 0:i[t-1])||void 0===e?void 0:e[u+1],w[l.RIGHT]=null===(r=null===(s=this.map)||void 0===s?void 0:s[t])||void 0===r?void 0:r[u+1],w[l.BOTTOM_RIGHT]=null===(d=null===(a=this.map)||void 0===a?void 0:a[t+1])||void 0===d?void 0:d[u+1],w[l.BOTTOM]=null===(T=null===(c=this.map)||void 0===c?void 0:c[t+1])||void 0===T?void 0:T[u],w[l.BOTTOM_LEFT]=null===(h=null===(p=this.map)||void 0===p?void 0:p[t+1])||void 0===h?void 0:h[u-1],w[l.LEFT]=null===(O=null===(v=this.map)||void 0===v?void 0:v[t])||void 0===O?void 0:O[u-1],w[l.TOP_LEFT]=null===(m=null===(f=this.map)||void 0===f?void 0:f[t+1])||void 0===m?void 0:m[u-1]}}setNode(t,o,n){this.map[t][o].setData(n)}isInMap(t,o){return o in this.map&&t in this.map[0]}}AStar=o})();