const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WindowUser-snKc-9aE.js","assets/index-BMLwewf1.js","assets/index-CgmaULl5.css","assets/Title-CZxz7DGK.js","assets/Title-BhSAi6b_.css","assets/Header-BieSmDmX.js","assets/Header-BfnR4q7l.css","assets/WindowUser-mJCMyFRm.css"])))=>i.map(i=>d[i]);
import{b as g,u as m,c as x,d as _,e as j,r as n,f as i,j as s,g as h,_ as f}from"./index-BMLwewf1.js";const U="_wrapper_jbubx_1",y="_loading_jbubx_13",t={wrapper:U,loading:y},c=n.lazy(()=>f(()=>import("./WindowUser-snKc-9aE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),w=()=>{const l=g(),{category:d}=m(),{data:a,isLoading:p}=x(null),o=_(),r=j(e=>e.allUsers);return n.useEffect(()=>{if(l.pathname.startsWith("/Pavepo/category")&&a){const e=a.filter(u=>u.address.city===d);o(i(e))}else a&&o(i(a))},[a]),s.jsx(s.Fragment,{children:s.jsx("section",{className:"container",children:s.jsxs("main",{className:t.wrapper,children:[p&&s.jsx("img",{className:t.loading,src:h,alt:""}),s.jsx(n.Suspense,{children:r.filteredUsers?r.filteredUsers.map(e=>s.jsx(c,{user:e})):r.Users.map(e=>s.jsx(c,{user:e}))}),!r.Users.length&&s.jsx("h2",{className:t.loading,children:"Товар не найдин"})]})})})};export{w as C};
