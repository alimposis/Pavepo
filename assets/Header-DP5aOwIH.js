import{r as n,j as e,c as m,e as p,d as x,h as u,b as g}from"./index-CY_b22kh.js";const w=t=>{const[s,a]=n.useState(t);return n.useEffect(()=>{const r=setTimeout(()=>{a(t)},500);return()=>{clearTimeout(r)}},[t]),s},j=({title:t,titleId:s,...a},r)=>n.createElement("svg",{fill:"#000000",height:"800px",width:"800px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 488.4 488.4",xmlSpace:"preserve",ref:r,"aria-labelledby":s,...a},t?n.createElement("title",{id:s},t):null,n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"})))),S=n.forwardRef(j),_=({title:t,titleId:s,...a},r)=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:r,"aria-labelledby":s,...a},t?n.createElement("title",{id:s},t):null,n.createElement("path",{d:"M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"}));n.forwardRef(_);const f="_wrapperInput_tee1e_1",L="_input_tee1e_34",i={wrapperInput:f,input:L},b=({setSearchState:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:i.wrapperInput,children:[e.jsx(S,{}),e.jsx("input",{onChange:s=>t(s.target.value),className:i.input,type:"text"})]})}),y="_menu_sbaue_1",E="_ul_sbaue_24",d={menu:y,ul:E},k="_button_wx7ta_1",C={button:k},M=({text:t,functionProps:s,color:a})=>e.jsx(e.Fragment,{children:e.jsx("button",{style:{background:`${a}`},onClick:()=>s?s():null,className:C.button,children:t&&t})}),v=()=>{const[t,s]=n.useState(!1),[a,r]=n.useState(null),{data:o}=m(null);function l(){s(c=>!c)}return e.jsx(e.Fragment,{children:e.jsxs("section",{className:d.menu,children:[e.jsx(M,{text:a||"Выбрать город",functionProps:l,color:"red"}),t&&e.jsx("ul",{className:d.ul,children:o&&o.map(c=>e.jsx("a",{href:`/category/${c.address.city}`,children:e.jsx("li",{onClick:()=>{r(c.address.city),l()},children:c.address.city})},c.id))})]})})},N=()=>{const[t,s]=n.useState(),a=p(l=>l.allUsers.Users),r=w(t),o=x();return n.useEffect(()=>{if(r){console.log();const l=a.filter(c=>c.username.trim().toLowerCase()===r.trim().toLowerCase()||c.email.trim().toLowerCase()===r.trim().toLowerCase());o(u(l))}else(r==null?void 0:r.length)===0&&o(u(a))},[r]),e.jsxs(e.Fragment,{children:[e.jsx(b,{setSearchState:s}),e.jsx(v,{})]})},F=()=>g().pathname.startsWith("/user/")?e.jsx("h2",{children:"Страница товара"}):e.jsx(N,{}),U="_header_elgak_1",B="_link_elgak_16",h={header:U,link:B},T=()=>e.jsx(e.Fragment,{children:e.jsx("header",{className:h.header,children:e.jsxs("main",{className:"container",children:[e.jsx("a",{className:h.link,href:"/",children:e.jsx("h1",{children:"Test"})}),e.jsx(F,{})]})})});export{M as B,T as H};
