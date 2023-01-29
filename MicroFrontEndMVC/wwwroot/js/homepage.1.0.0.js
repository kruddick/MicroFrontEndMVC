var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){const o=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;if(e&&e.host)return e;return t.ownerDocument}(t);if(!o.getElementById(e)){const t=i("style");t.id=e,t.textContent=n,function(t,e){(function(t,e){t.appendChild(e)})(t.head||t,e),e.sheet}(o,t)}}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}let u;function d(t){u=t}function l(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const f=[],p=[],h=[],g=[],m=Promise.resolve();let $=!1;function b(t){h.push(t)}const w=new Set;let y=0;function v(){if(0!==y)return;const t=u;do{try{for(;y<f.length;){const t=f[y];y++,d(t),_(t.$$)}}catch(t){throw f.length=0,y=0,t}for(d(null),f.length=0,y=0;p.length;)p.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];w.has(e)||(w.add(e),e())}h.length=0}while(f.length);for(;g.length;)g.pop()();$=!1,w.clear(),d(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const x=new Set;function k(t,e){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,m.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(s,c,i,l,f,p,h,g=[-1]){const m=u;d(s);const $=s.$$={fragment:null,ctx:[],props:p,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(m?m.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:c.target||m.$$.root};h&&h($.root);let w=!1;if($.ctx=i?i(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),w&&k(s,t)),e})):[],$.update(),w=!0,o($.before_update),$.fragment=!!l&&l($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(x.delete(y),y.i(_))),function(t,n,s,c){const{fragment:a,after_update:i}=t.$$;a&&a.m(n,s),c||b((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(b)}(s,c.target,c.anchor,c.customElement),v()}var y,_;d(m)}class B{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function A(t){c(t,"svelte-uzbk2",".window.svelte-uzbk2{background:rgb(0,98,140);background:linear-gradient(90deg, rgb(31 56 122) 0%, rgb(49 108 203) 49%, rgba(0,122,255,1) 100%);width:60%;border:solid white 4px;border-radius:10px;padding:20px;margin:auto}")}function N(e){let n;return{c(){var t,e,o;n=i("div"),n.innerHTML='<div class="card"><h5 class="card-header">Propose New Account</h5> \n\t\t<div class="card-body"><p class="card-text">Setup a new proposal for a prospective client</p> \n\t\t  <a href="#" class="btn btn-primary">Create Proposal</a></div></div> \n\t  <div class="card mt-3"><h5 class="card-header">Proposed Accounts</h5> \n\t\t<div class="card-body"><p class="card-text">View already proposed accounts.</p> \n\t\t  <a href="#" class="btn btn-primary">View Proposed</a></div></div> \n\t  <div class="card mt-3"><h5 class="card-header">Funded Accounts</h5> \n\t\t<div class="card-body"><p class="card-text">View funded accountss.</p> \n\t\t  <a href="#" class="btn btn-primary">View Funded</a></div></div>',t=n,e="class",null==(o="window svelte-uzbk2")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function P(t,e){}function z(t){return l((()=>{window.messageBus.register&&window.messageBus.register(P),window.messageBus.publish&&(window.messageBus.publish("navmenu-add",{name:"Home Page",id:"homepage"}),window.messageBus.publish("navmenu-show","homepage"))})),[]}return new class extends B{constructor(t){super(),E(this,t,z,N,s,{},A)}}({target:document.getElementById("homepage")})}();
//# sourceMappingURL=homepage.1.0.0.js.map
