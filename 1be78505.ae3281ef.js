(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(149),c=a.n(s),i=a(150),r=a(93),o=a.n(r);function m({item:e,level:t,onItemClick:a,collapsible:s}){const{items:r,href:o,label:u,type:p}=e,[d,b]=Object(l.useState)(e.collapsed),[k,f]=Object(l.useState)(null);e.collapsed!==k&&(f(e.collapsed),b(e.collapsed));const h=Object(l.useCallback)(e=>{e.preventDefault(),b(e=>!e)});switch(p){case"category":return 0!=r.length&&(1==t?n.a.createElement("li",{className:c()("menu__list-item",{"menu__list-item--collapsed":!1}),key:u},n.a.createElement("div",{className:"title"},u),n.a.createElement("ul",{className:"menu__list"},r.map(e=>n.a.createElement(m,{key:e.label,item:e,onItemClick:a,collapsible:s,level:t+1})))):n.a.createElement("li",{className:c()("menu__list-item",{"menu__list-item--collapsed":!1}),key:u},n.a.createElement("a",{className:c()("menu__link",{"menu__link--sublist":s,"menu__link--active":s&&!e.collapsed}),href:"#!",onClick:s?h:void 0},u),n.a.createElement("ul",{className:"menu__list"},r.map(e=>n.a.createElement(m,{key:e.label,item:e,onItemClick:a,collapsible:s,level:t+1})))));case"link":default:return n.a.createElement("li",{className:"menu__list-item",key:u},n.a.createElement(i.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:o,onClick:a},u))}}t.a=function(e){const[t,a]=Object(l.useState)(!1),{docsSidebars:s,location:i,sidebar:r,sidebarCollapsible:u}=e;if(!r)return null;const p=s[r];if(!p)throw new Error(`Cannot find the sidebar "${r}" in the sidebar config!`);return u&&p.forEach(e=>function e(t,a){const{items:l,href:n,type:s}=t;switch(s){case"category":{const n=l.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!n,n}case"link":default:return n===a.pathname.replace(/\/$/,"")}}(e,i)),n.a.createElement("div",{className:o.a.sidebar},n.a.createElement("div",{className:c()("menu","menu--responsive",{"menu--show":t})},n.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?n.a.createElement("span",{className:c()(o.a.sidebarMenuIcon,o.a.sidebarMenuCloseIcon)},"\xd7"):n.a.createElement("svg",{className:o.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement("ul",{className:"menu__list"},p.map(e=>n.a.createElement(m,{key:e.label,item:e,onItemClick:()=>{a(!1)},collapsible:!1,level:1})))))}},163:function(e,t,a){"use strict";var l=a(1),n=a(0),s=a.n(n),c=a(149),i=a.n(c),r=a(170),o=a(169),m=a.n(o),u=a(164),p=a.n(u),d=a(165),b=a.n(d),k=a(146),f=a(94),h=a.n(f),E=a(166),_=a.n(E);a(167),a(168);const g=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(k.a)(),[o,u]=Object(n.useState)(!1),d=Object(n.useRef)(null),f=Object(n.useRef)(null);let E=[];if(a&&g.test(a)){const e=a.match(g)[1];E=b.a.parse(e).filter(e=>e>0)}Object(n.useEffect)(()=>{let e;return f.current&&(e=new p.a(f.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[f.current,d.current]);let y=t&&t.replace(/language-/,"");!y&&c.defaultLanguage&&(y=c.defaultLanguage);const N=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};return s.a.createElement(r.a,Object(l.a)({},r.b,{theme:c.theme||m.a,code:e.trim(),Prism:_.a,language:y}),({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:c})=>s.a.createElement("div",{className:h.a.codeBlockWrapper},s.a.createElement("pre",{ref:d,className:i()(e,h.a.codeBlock),style:t},a.map((e,t)=>{const a=n({line:e,key:t});return E.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),s.a.createElement("div",Object(l.a)({key:t},a),e.map((e,t)=>s.a.createElement("span",Object(l.a)({key:t},c({token:e,key:t})))))})),s.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:h.a.copyButton,onClick:N},o?"Copied":"Copy")))}}}]);