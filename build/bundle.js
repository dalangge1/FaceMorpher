var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u,a;function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){a=t}const m=[],$=[],g=[],y=[],b=Promise.resolve();let v=!1;function _(t){g.push(t)}let x=!1;const k=new Set;function E(){if(!x){x=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),w(e.$$)}for(h(null),m.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];k.has(e)||(k.add(e),e())}g.length=0}while(m.length);for(;y.length;)y.pop()();v=!1,x=!1,k.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function q(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(c,u,s,i,d,f,p,m=[-1]){const $=a;h(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||($?$.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:u.target||$.$$.root};p&&p(g.root);let y=!1;if(g.ctx=s?s(c,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&q(c,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(C.delete(b),b.i(v))),function(t,n,c,u){const{fragment:a,on_mount:s,on_destroy:i,after_update:l}=t.$$;a&&a.m(n,c),u||_((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(_)}(c,u.target,u.anchor,u.customElement),E()}var b,v;h($)}function j(e){let n,o,r,c,a,h,m,$,g;return{c(){var t,e;n=d("head"),n.innerHTML='<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/> \n  <meta http-equiv="Pragma" content="no-cache"/> \n  <meta http-equiv="Expires" content="0"/> \n  <div class="content svelte-gnybzn"></div>',o=f(),r=d("div"),c=d("h1"),c.textContent="Random Face Interpolation",a=f(),h=d("video"),$=f(),g=d("br"),p(h,"id","video-display"),t=h.src,e=m=`https://sour-dragonfly-60.loca.lt/getVideo/20/${(new Date).getTime()}`,u||(u=document.createElement("a")),u.href=e,t!==u.href&&p(h,"src",m),h.controls=!0,p(h,"class","svelte-gnybzn"),p(r,"class","content svelte-gnybzn")},m(t,e){i(t,n,e),i(t,o,e),i(t,r,e),s(r,c),s(r,a),s(r,h),s(r,$),s(r,g)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(r)}}}const z=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,null,j,c,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{z.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),z}();
//# sourceMappingURL=bundle.js.map
