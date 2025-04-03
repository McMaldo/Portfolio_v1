const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hobbies-C-JygMXM.js","assets/index-DNYYNSB7.js","assets/index-Q7CYb0Lj.css","assets/Hobbies-CqN3YB9n.css"])))=>i.map(i=>d[i]);
import{u as C,j as e,a as j,b as _,r as l,F as x,f as I,p as k,c as y,d as A,e as D,g as N,h as w,i as R,k as E,l as L,m as P,n as $,o as F,q as B,s as G,L as H,_ as V}from"./index-DNYYNSB7.js";const O="_skillSet_1ng1w_1",z="_expanded_1ng1w_39",U="_tagSlider_1ng1w_45",q="_tagSliderSimple_1ng1w_55",W="_skillTag_1ng1w_71",J="_skillTagSimple_1ng1w_91",K="_skillTagMore_1ng1w_127",X="_name_1ng1w_185",Y="_desc_1ng1w_195",d={skillSet:O,expanded:z,tagSlider:U,tagSliderSimple:q,skillTag:W,skillTagSimple:J,skillTagMore:K,name:X,desc:Y},Q="_skillTagMore_efnn3_1",Z="_skillTag_efnn3_1",ee="_name_efnn3_85",se="_desc_efnn3_95",p={skillTagMore:Q,skillTag:Z,name:ee,desc:se};function ne({skillMore:s}){let{theme:i}=C();return e.jsxs("div",{className:p.skillTagMore,children:[e.jsx("h5",{children:"Related"}),s.map((n,a)=>e.jsxs("div",{className:p.skillTag,children:[e.jsx("img",{src:j.SKILLTAGS_ICONS_DIR+(i=="dark"?n.img:n.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:p.name,children:n.name}),e.jsx("div",{className:p.desc,children:n.desc})]},a))]})}function ae({skill:s}){let{theme:i}=C();const[n,a]=l.useState(!1);return s.more?e.jsxs("div",{className:d.skillTag+" "+d.skillTagMore,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.jsx("img",{src:j.SKILLTAGS_ICONS_DIR+(i=="dark"?s.img:s.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:d.name,children:s.name}),e.jsx("div",{className:d.desc,children:s.desc}),n?e.jsx(ne,{skillMore:s.more}):""]}):e.jsxs("div",{className:d.skillTag,children:[e.jsx("img",{src:j.SKILLTAGS_ICONS_DIR+(i=="dark"?s.img:s.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:d.name,children:s.name}),e.jsx("div",{className:d.desc,children:s.desc})]})}function ie({cat:s,index:i}){const[n]=_("translatedToEnglish",!0),[a,o]=l.useState(i<3),c=()=>{o(t=>!t)};return e.jsxs("details",{open:a,children:[e.jsxs("summary",{onClick:t=>{t.preventDefault(),c()},children:[e.jsx(x,{icon:I,className:a?d.expanded:""}),e.jsx("h4",{children:s.catName})]}),s.catName==="Programming Concepts"||s.catName==="Soft Skills"?e.jsx("div",{className:d.tagSliderSimple,children:s.skills.map((t,r)=>e.jsx("div",{className:d.skillTagSimple,children:n?t.en:t.es},r))}):e.jsx("div",{className:d.tagSlider,children:s.skills.map((t,r)=>e.jsx(ae,{skill:t},r))})]})}function te(){return e.jsx("div",{className:d.skillSet,children:j.skillTags.map((s,i)=>e.jsx(ie,{cat:s,index:i},i))})}const oe="_projects_lu9gj_1",re="_imgContainer_lu9gj_25",le="_colaboratorsCount_lu9gj_45",ce="_noImg_lu9gj_89",de="_links_lu9gj_111",he="_techs_lu9gj_201",me="_desc_lu9gj_219",u={projects:oe,imgContainer:re,colaboratorsCount:le,noImg:ce,links:de,techs:he,desc:me};function ge(){const{ARTICLES_IMGS_DIR:s}=k;let[i]=_("translatedToEnglish",!0);return e.jsx("div",{className:u.projects,children:k.articles.map((n,a)=>e.jsxs("article",{children:[e.jsxs("div",{className:u.imgContainer,children:[e.jsxs("div",{className:u.colaboratorsCount,title:"Colaborators Count",children:[e.jsx(x,{icon:n.colaboratorsCount>2?y:A}),e.jsx("span",{children:n.colaboratorsCount})]}),e.jsx("img",{className:n.img?"":u.noImg,src:n.img?s+n.img:"/Portfolio_v1/img/no-image.svg",alt:""}),e.jsxs("div",{className:n.demo||n.gh||n.gl||n.figma?u.links:"",children:[n.demo?e.jsx("a",{href:n.demo,title:"demo",children:e.jsx(x,{icon:D})}):"",n.gh?e.jsx("a",{href:n.gh,title:"github repo",children:e.jsx(x,{icon:N})}):"",n.gl?e.jsx("a",{href:n.gl,title:"gitlab repo",children:e.jsx(x,{icon:w})}):"",n.figma?e.jsx("a",{href:n.figma,title:"figma",children:e.jsx(x,{icon:R})}):""]})]}),e.jsx("div",{className:u.techs,children:n.techs.map((o,c)=>e.jsx("div",{children:o},c))}),e.jsx("h4",{className:u.name,children:n.name}),e.jsx("div",{className:u.desc,children:i?n.desc.en:n.desc.es})]},a))})}const ue="_aboutMe_1kc8m_1",xe="_eduItem_1kc8m_63",je="_upperTag_1kc8m_83",v={aboutMe:ue,eduItem:xe,upperTag:je};function fe(){let[s]=_("translatedToEnglish",!0);return e.jsxs("div",{className:v.aboutMe,children:[e.jsx("article",{children:s?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Maldonado Ignacio, also known as Maldo. Personal & Professional IT Technician, programming since the age of 15."}),e.jsx("p",{children:"With a strong affinity for Front-end Development and Web Design, as well as considerable experience in Back-end and Database development."}),e.jsx("p",{children:"Currently focused on React JS, along with its multiple libraries, such as MUI, AntD, RRD, and others."})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Maldonado Ignacio, también conocido como Maldo. Técnico en Informática Personal y Profesional, programando desde los 15 años."}),e.jsx("p",{children:"Gran afinidad por el Desarrollo Front-end y el Diseño Web, complementada con amplia práctica en Back-end y Bases de Datos para aplicaciones web."}),e.jsx("p",{children:"Actualmente enfocado en React JS y sus múltiples librerías, como MUI, AntD, RRD, entre otras."})]})}),e.jsxs("article",{children:[e.jsx("h4",{children:s?"Education":"Educación"}),e.jsxs("div",{className:v.eduItem,children:[e.jsxs("div",{children:[s?"High Scholl":"Secundaria",": Técnica N°3, Malv. Arg., Bs. As., Argentina"]}),e.jsxs("div",{children:[s?"Title":"Título",": Tecnicatura en Programación Personal y Profesional"]})]}),e.jsxs("div",{className:v.eduItem,children:[e.jsxs("div",{children:[s?"College":"Universidad",": UBA, Bs. As., Argentina"]}),e.jsxs("div",{children:[s?"Career":"Carrera",": Licenciatura en Ciencia de la Computación"]}),e.jsx("div",{className:v.upperTag,children:s?"Current":"Cursando"})]})]})]})}function pe(s){const[i,n]=l.useState("");return l.useEffect(()=>{const a=setInterval(()=>{const o=new Date(s),t=new Date-o,r=Math.floor(t/1e3),h=Math.floor(r/(60*60*24)),m=Math.floor(r%(60*60*24)/(60*60)),g=Math.floor(r%(60*60)/60),f=r%60;n(`${h} ${h>1?"days":"day"}, ${m}:${g}:${f}`)},1e3);return()=>clearInterval(a)},[s]),{lifeTime:i}}function ve(){const{lifeTime:s}=pe("2025-02-13T19:30:00"),i=[{name:"Github",icon:N,link:"https://github.com/McMaldo"},{name:"Gitlab",icon:w,link:"https://gitlab.com/maldonado.ignacio.pablo"},{name:"LinkedIn",icon:E,link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},{name:"DevTo",icon:L,link:"https://dev.to/mcmaldo"}],n=[P,$,F,B];return e.jsxs("footer",{className:"center",children:[e.jsx("h2",{className:"heading",children:"Prototype Portfolio"}),e.jsx("hr",{}),e.jsxs("section",{className:"info",children:[e.jsxs("div",{className:"time group center",children:[e.jsx("h3",{children:"Creation"}),e.jsx("p",{children:"13/02/2025"}),e.jsx("p",{className:"lifeTime",children:s})]}),e.jsxs("div",{className:"author group center",children:[e.jsx("h3",{children:"Author"}),e.jsx("p",{children:"@McMaldo"}),e.jsx("div",{className:"svgRow",children:i.map((a,o)=>e.jsx("a",{href:a.link,children:e.jsx(x,{icon:a.icon})},o))})]}),e.jsxs("div",{className:"credits group center",children:[e.jsx("h3",{children:"Credits"}),e.jsx("a",{href:"https://codingstella.github.io/vCard-personal-portfolio/",children:"CodingStella (inspiration)"}),e.jsx("a",{href:"https://andrijaweb.vercel.app/",children:"Andrijaweb (skill tags)"}),e.jsx("a",{href:"https://www.1001freefonts.com/es/prototype.font",children:"Prototype (body font)"}),e.jsx("a",{href:"https://www.1001freefonts.com/es/orbitron.font",children:"Orbitron (heading font)"}),e.jsx("a",{href:"https://github.com/tandpfun/skill-icons",children:"skill-icons-gh (tech svgs)"}),e.jsx("a",{href:"https://usehooks.com/",children:"useHooks (React library)"}),e.jsx("a",{href:"https://kasela.com.ar/us/Landing",children:"Kasela (life time counter)"}),e.jsx("a",{href:"https://fontawesome.com/",children:"FontAwesome (icons)"})]}),e.jsxs("div",{className:"tech group center",children:[e.jsx("h3",{children:"Tech Stack"}),e.jsx("p",{children:"React"}),e.jsx("p",{children:"Java Script"}),e.jsx("p",{children:"CSS"}),e.jsx("p",{children:"HTML"}),e.jsx("p",{children:"useHooks"}),e.jsx("p",{children:"React FontA"})]})]}),e.jsx("hr",{}),e.jsxs("section",{className:"bottom",children:[e.jsx("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",className:"svgRow license",children:n.map((a,o)=>e.jsx(x,{icon:a},o))}),e.jsxs("div",{className:"ubic",children:[e.jsx("p",{children:"Arg."}),e.jsx("p",{children:"Bs. As."})]})]})]})}const _e=({zIndex:s})=>{const[i,n]=l.useState({x:0,y:0}),[a,o]=l.useState(!1),[c,t]=l.useState([]),r=l.useRef(null);return l.useEffect(()=>{const h=m=>{if(!r.current)return;const g=r.current.getBoundingClientRect(),f=m.clientX-g.left,b=m.clientY-g.top,S=f>=0&&f<=g.width&&b>=0&&b<=g.height;if(o(S),S){const T={x:f,y:b};n(T),t(M=>[...M,T].slice(-10))}};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)}},[]),e.jsxs("div",{ref:r,style:{zIndex:s},className:"mouseFollowerContainer",children:[c.map((h,m)=>e.jsx("div",{className:"mouseFollower trail-dot",style:{zIndex:s+1,transform:`translate(${h.x}px, ${h.y}px)`,opacity:a?(m+1)/c.length:0}},m)),e.jsx("div",{className:`mouseFollower ${a?"visible":""}`,style:{zIndex:s+1,transform:`translate(${i.x}px, ${i.y}px)`}})]})},be=()=>{const s=l.useRef(null),[i,n]=l.useState(0),a=20*20;l.useEffect(()=>{if(!s.current)return;const c=()=>{const{width:r,height:h}=s.current.getBoundingClientRect(),m=r*(h+20),g=Math.ceil(m/a);n(g)};c();const t=new ResizeObserver(c);return t.observe(s.current),()=>{s.current&&t.unobserve(s.current)}},[]);const o=Array.from({length:i},(c,t)=>e.jsx("div",{},t));return e.jsxs("div",{className:"bgDotsContainer",children:[e.jsx("div",{className:"bgDots",ref:s,children:o}),e.jsx(_e,{zIndex:0})]})},Se=l.lazy(()=>V(()=>import("./Hobbies-C-JygMXM.js"),__vite__mapDeps([0,1,2,3])));function Ce(){let[s]=_("translatedToEnglish",!0),[i,n]=l.useState(!1);const{width:a}=G();return e.jsxs(e.Fragment,{children:[e.jsxs("nav",{children:[e.jsx("button",{onClick:()=>document.querySelector("#SkillSet").scrollIntoView({behavior:"smooth"}),children:s?"Skill Set":"Habilidades"}),e.jsx("button",{onClick:()=>document.querySelector("#Projects").scrollIntoView({behavior:"smooth"}),children:s?"Projects":"Proyectos"}),e.jsx("button",{onClick:()=>document.querySelector("#AboutMe").scrollIntoView({behavior:"smooth"}),children:s?"About Me":"Sobre Mí"})]}),a>750&&e.jsx(be,{}),e.jsxs("div",{className:"mainScroll",children:[e.jsx("header",{children:e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:s?j.heading.h1.en:j.heading.h1.es}),e.jsx("div",{className:"extras",children:j.heading.subtitle.map((o,c)=>e.jsx("span",{children:s?o.en:o.es},c))})]})}),e.jsxs("section",{className:"mainContent",children:[e.jsx("h3",{id:"SkillSet",children:s?"Skill Set":"Habilidades"}),e.jsx(te,{}),e.jsx("h3",{id:"Projects",children:s?"Projects":"Proyectos"}),e.jsx(ge,{}),e.jsx("h3",{id:"AboutMe",children:s?"About Me":"Sobre Mí"}),e.jsx(fe,{}),i?e.jsx(l.Suspense,{fallback:e.jsx(H,{}),children:e.jsx(Se,{})}):e.jsx("button",{className:"expand",onClick:()=>n(!0),children:s?"About My Hobbies":"Acerca de Mis Pasatiempos"})]}),e.jsx(ve,{})]})]})}export{Ce as default};
