var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode.removeChild(t)}let s;function l(t){s=t}const i=[],a=[],d=[],f=[],p=Promise.resolve();let h=!1;function $(t){d.push(t)}let m=!1;const g=new Set;function y(){if(!m){m=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];l(e),b(e.$$)}for(l(null),i.length=0;a.length;)a.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];g.has(e)||(g.add(e),e())}d.length=0}while(i.length);for(;f.length;)f.pop()();h=!1,m=!1,g.clear()}}function b(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const _=new Set;function v(t,e){-1===t.$$.dirty[0]&&(i.push(t),h||(h=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(c,i,a,d,f,p,h,m=[-1]){const g=s;l(c);const b=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||g.$$.root};h&&h(b.root);let x=!1;if(b.ctx=a?a(c,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&f(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),x&&v(c,t)),e})):[],b.update(),x=!0,o(b.before_update),b.fragment=!!d&&d(b.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);b.fragment&&b.fragment.l(t),t.forEach(u)}else b.fragment&&b.fragment.c();i.intro&&((k=c.$$.fragment)&&k.i&&(_.delete(k),k.i(w))),function(t,n,c,u){const{fragment:s,on_mount:l,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,c),u||$((()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach($)}(c,i.target,i.anchor,i.customElement),y()}var k,w;l(g)}function k(e){let n;return{c(){var t,e,o,r;t="div",n=document.createElement(t),n.innerHTML='<h1>Random Face Interpolation</h1> \n  <video id="video-display" src="https://sour-dragonfly-60.loca.lt/getVideo/20" controls="" class="svelte-gnybzn"></video> \n  <br/>',e=n,o="class",null==(r="content svelte-gnybzn")?e.removeAttribute(o):e.getAttribute(o)!==r&&e.setAttribute(o,r)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}const w=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,null,k,c,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{w.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),w}();
//# sourceMappingURL=bundle.js.map
