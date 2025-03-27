const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hobbies-DYKxGNhy.js","assets/index-B9qWGiVQ.js","assets/index-BlOcK-A7.css","assets/Hobbies-C9tOIKmx.css"])))=>i.map(i=>d[i]);
import{u as _,j as e,a as h,b as u,r as m,F as d,f as N,p as f,c as C,d as M,e as I,g as b,h as S,i as A,k as y,l as w,m as D,n as L,o as P,q as E,L as R,_ as $}from"./index-B9qWGiVQ.js";const q="_skillSet_1bazi_1",F="_expanded_1bazi_37",z="_tagSlider_1bazi_43",G="_tagSliderSimple_1bazi_53",H="_skillTag_1bazi_69",B="_skillTagSimple_1bazi_89",U="_skillTagMore_1bazi_131",V="_name_1bazi_183",O="_desc_1bazi_193",o={skillSet:q,expanded:F,tagSlider:z,tagSliderSimple:G,skillTag:H,skillTagSimple:B,skillTagMore:U,name:V,desc:O},J="_skillTagMore_10ygk_1",K="_skillTag_10ygk_1",W="_name_10ygk_69",Q="_desc_10ygk_79",x={skillTagMore:J,skillTag:K,name:W,desc:Q};function X({skillMore:s}){let{theme:i}=_();return e.jsxs("div",{className:x.skillTagMore,children:[e.jsx("h5",{children:"Related"}),s.map((a,n)=>e.jsxs("div",{className:x.skillTag,children:[e.jsx("img",{src:h.SKILLTAGS_ICONS_DIR+(i=="dark"?a.img:a.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:x.name,children:a.name}),e.jsx("div",{className:x.desc,children:a.desc})]},n))]})}function Y({skill:s}){let{theme:i}=_();const[a,n]=m.useState(!1);return s.more?e.jsxs("div",{className:o.skillTag+" "+o.skillTagMore,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[e.jsx("img",{src:h.SKILLTAGS_ICONS_DIR+(i=="dark"?s.img:s.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:o.name,children:s.name}),e.jsx("div",{className:o.desc,children:s.desc}),a?e.jsx(X,{skillMore:s.more}):""]}):e.jsxs("div",{className:o.skillTag,children:[e.jsx("img",{src:h.SKILLTAGS_ICONS_DIR+(i=="dark"?s.img:s.img.replace(/-Dark/g,"-Light")),alt:""}),e.jsx("div",{className:o.name,children:s.name}),e.jsx("div",{className:o.desc,children:s.desc})]})}function Z({cat:s,index:i}){const[a]=u("translatedToEnglish",!0),[n,t]=m.useState(i<3),g=()=>{t(l=>!l)};return e.jsxs("details",{open:n,children:[e.jsxs("summary",{onClick:l=>{l.preventDefault(),g()},children:[e.jsx(d,{icon:N,className:n?o.expanded:""}),e.jsx("h4",{children:s.catName})]}),s.catName==="Programming Concepts"||s.catName==="Soft Skills"?e.jsx("div",{className:o.tagSliderSimple,children:s.skills.map((l,r)=>e.jsx("div",{className:o.skillTagSimple,children:a?l.en:l.es},r))}):e.jsx("div",{className:o.tagSlider,children:s.skills.map((l,r)=>e.jsx(Y,{skill:l},r))})]})}function ee(){return e.jsx("div",{className:o.skillSet,children:h.skillTags.map((s,i)=>e.jsx(Z,{cat:s,index:i},i))})}const se="_projects_lqm6u_1",ae="_imgContainer_lqm6u_33",ne="_colaboratorsCount_lqm6u_53",ie="_noImg_lqm6u_97",oe="_links_lqm6u_119",te="_techs_lqm6u_197",le="_desc_lqm6u_215",c={projects:se,imgContainer:ae,colaboratorsCount:ne,noImg:ie,links:oe,techs:te,desc:le};function re(){const{ARTICLES_IMGS_DIR:s}=f;let[i]=u("translatedToEnglish",!0);return e.jsx("div",{className:c.projects,children:f.articles.map((a,n)=>e.jsxs("article",{children:[e.jsxs("div",{className:c.imgContainer,children:[e.jsxs("div",{className:c.colaboratorsCount,title:"Colaborators Count",children:[e.jsx(d,{icon:a.colaboratorsCount>2?C:M}),e.jsx("span",{children:a.colaboratorsCount})]}),e.jsx("img",{className:a.img?"":c.noImg,src:a.img?s+a.img:"/Portfolio_v1/img/no-image.svg",alt:""}),e.jsxs("div",{className:a.demo||a.gh||a.gl||a.figma?c.links:"",children:[a.demo?e.jsx("a",{href:a.demo,title:"demo",children:e.jsx(d,{icon:I})}):"",a.gh?e.jsx("a",{href:a.gh,title:"github repo",children:e.jsx(d,{icon:b})}):"",a.gl?e.jsx("a",{href:a.gl,title:"gitlab repo",children:e.jsx(d,{icon:S})}):"",a.figma?e.jsx("a",{href:a.figma,title:"figma",children:e.jsx(d,{icon:A})}):""]})]}),e.jsx("div",{className:c.techs,children:a.techs.map((t,g)=>e.jsx("div",{children:t},g))}),e.jsx("h4",{className:c.name,children:a.name}),e.jsx("div",{className:c.desc,children:i?a.desc.en:a.desc.es})]},n))})}const ce="_aboutMe_12b6r_1",de="_eduItem_12b6r_65",he="_upperTag_12b6r_87",j={aboutMe:ce,eduItem:de,upperTag:he};function me(){let[s]=u("translatedToEnglish",!0);return e.jsxs("div",{className:j.aboutMe,children:[e.jsx("article",{children:s?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Maldonado Ignacio, also known as Maldo. Personal & Professional Information Technology Technician, programming since the age of 15."}),e.jsx("p",{children:"With a strong affinity for Front-end Development and Web Design, as well as considerable experience in Back-end and Database development."}),e.jsx("p",{children:"Currently focused on React JS, along with its multiple libraries, such as MUI, AntD, RRD, and others."})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Maldonado Ignacio, también conocido como Maldo. Técnico en Informática Personal y Profesional, programando desde los 15 años."}),e.jsx("p",{children:"Gran afinidad por el Desarrollo Front-end y el Diseño Web, complementada con amplia práctica en Back-end y Bases de Datos para aplicaciones web."}),e.jsx("p",{children:"Actualmente enfocado en React JS y sus múltiples librerías, como MUI, AntD, RRD, entre otras."})]})}),e.jsxs("article",{children:[e.jsx("h4",{children:s?"Education":"Educación"}),e.jsxs("div",{className:j.eduItem,children:[e.jsxs("div",{children:[s?"High Scholl":"Secundaria",": Técnica N°3, Malv. Arg., Bs. As., Argentina"]}),e.jsxs("div",{children:[s?"Title":"Título",": Tecnicatura en Programación Personal y Profesional"]})]}),e.jsxs("div",{className:j.eduItem,children:[e.jsxs("div",{children:[s?"College":"Universidad",": UBA (Universidad Nacional de Buenos Aires), Bs. As., Argentina"]}),e.jsxs("div",{children:[s?"Career":"Carrera",": Licenciatura en Ciencia de la Computación"]}),e.jsx("div",{className:j.upperTag,children:s?"Current":"Cursando"})]})]})]})}function ge(s){const[i,a]=m.useState("");return m.useEffect(()=>{const n=setInterval(()=>{const t=new Date(s),l=new Date-t,r=Math.floor(l/1e3),p=Math.floor(r/(60*60*24)),v=Math.floor(r%(60*60*24)/(60*60)),k=Math.floor(r%(60*60)/60),T=r%60;a(`${p} ${p>1?"days":"day"}, ${v}:${k}:${T}`)},1e3);return()=>clearInterval(n)},[s]),{lifeTime:i}}function xe(){const{lifeTime:s}=ge("2025-02-13T19:30:00"),i=[{name:"Github",icon:b,link:"https://github.com/McMaldo"},{name:"Gitlab",icon:S,link:"https://gitlab.com/maldonado.ignacio.pablo"},{name:"LinkedIn",icon:y,link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},{name:"DevTo",icon:w,link:"https://dev.to/mcmaldo"}],a=[D,L,P,E];return e.jsxs("footer",{className:"center",children:[e.jsx("h2",{className:"heading",children:"Prototype Portfolio"}),e.jsx("hr",{}),e.jsxs("section",{className:"info",children:[e.jsxs("div",{className:"time group center",children:[e.jsx("h3",{children:"Creation"}),e.jsx("p",{children:"13/02/2025"}),e.jsx("p",{className:"lifeTime",children:s})]}),e.jsxs("div",{className:"author group center",children:[e.jsx("h3",{children:"Author"}),e.jsx("p",{children:"@McMaldo"}),e.jsx("div",{className:"svgRow",children:i.map((n,t)=>e.jsx("a",{href:n.link,children:e.jsx(d,{icon:n.icon})},t))})]}),e.jsxs("div",{className:"credits group center",children:[e.jsx("h3",{children:"Credits"}),e.jsx("a",{href:"https://codingstella.github.io/vCard-personal-portfolio/",children:"CodingStella (inspiration)"}),e.jsx("a",{href:"https://andrijaweb.vercel.app/",children:"Andrijaweb (skill tags)"}),e.jsx("a",{href:"https://www.1001freefonts.com/es/prototype.font",children:"Prototype (body font)"}),e.jsx("a",{href:"https://www.1001freefonts.com/es/orbitron.font",children:"Orbitron (heading font)"}),e.jsx("a",{href:"https://github.com/tandpfun/skill-icons",children:"skill-icons-gh (tech svgs)"}),e.jsx("a",{href:"https://usehooks.com/",children:"useHooks (React library)"}),e.jsx("a",{href:"https://kasela.com.ar/us/Landing",children:"Kasela (life time counter)"}),e.jsx("a",{href:"https://fontawesome.com/",children:"FontAwesome (icons)"})]}),e.jsxs("div",{className:"tech group center",children:[e.jsx("h3",{children:"Tech Stack"}),e.jsx("p",{children:"React"}),e.jsx("p",{children:"Java Script"}),e.jsx("p",{children:"CSS"}),e.jsx("p",{children:"HTML"}),e.jsx("p",{children:"useHooks"}),e.jsx("p",{children:"React FontA"})]})]}),e.jsx("hr",{}),e.jsxs("section",{className:"bottom",children:[e.jsx("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",className:"svgRow license",children:a.map((n,t)=>e.jsx(d,{icon:n},t))}),e.jsxs("div",{className:"ubic",children:[e.jsx("p",{children:"Arg."}),e.jsx("p",{children:"Bs. As."})]})]})]})}const je=m.lazy(()=>$(()=>import("./Hobbies-DYKxGNhy.js"),__vite__mapDeps([0,1,2,3])));function pe(){let[s]=u("translatedToEnglish",!0),[i,a]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{className:"gradient",children:s?h.heading.h1.en:h.heading.h1.es}),e.jsx("div",{className:"extras gradient",children:h.heading.subtitle.map((n,t)=>e.jsx("span",{children:s?n.en:n.es},t))})]}),e.jsxs("nav",{children:[e.jsx("button",{onClick:()=>document.querySelector("#SkillSet").scrollIntoView({behavior:"smooth"}),children:s?"Skill Set":"Habilidades"}),e.jsx("button",{onClick:()=>document.querySelector("#Portfolio").scrollIntoView({behavior:"smooth"}),children:s?"Portfolio":"Portafolio"}),e.jsx("button",{onClick:()=>document.querySelector("#AboutMe").scrollIntoView({behavior:"smooth"}),children:s?"About Me":"Sobre Mí"})]})]}),e.jsxs("section",{className:"mainContent",children:[e.jsx("h3",{id:"SkillSet",children:s?"Skill Set":"Habilidades"}),e.jsx(ee,{}),e.jsx("h3",{id:"Portfolio",children:s?"Portfolio":"Portafolio"}),e.jsx(re,{}),e.jsx("h3",{id:"AboutMe",children:s?"About Me":"Sobre Mí"}),e.jsx(me,{}),i?e.jsx(m.Suspense,{fallback:e.jsx(R,{}),children:e.jsx(je,{})}):e.jsx("button",{className:"expand",onClick:()=>a(!0),children:s?"About My Hobbies":"Acerca de Mis Pasatiempos"})]}),e.jsx(xe,{})]})}export{pe as default};
