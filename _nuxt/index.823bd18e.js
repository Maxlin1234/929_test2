import{_ as x}from"./Navbar.da1633f7.js";import{_ as C,a as k}from"./Services.8aa7e0a2.js";import{l as $}from"./loadBackgroudImages.6dc4ef71.js";import{i as S}from"./isInView.af5ef8ec.js";import{k as H,p as A,o as l,a as c,b as s,F as h,r as p,u as g,e as T,t as d,l as _,i as B,j as u,f as a}from"./entry.206a9e2f.js";import"./nuxt-link.df0e75ba.js";const m=[{id:1,image:"assets/imgs/portfolio/gallery/1.jpg",number:"01.",type:"Digital",title:"Luxury Glassware",text:"We craft premium designs for agencies and global brands around the globe."},{id:2,image:"assets/imgs/portfolio/gallery/2.jpg",number:"02.",type:"Marketing",title:"Brand Identity",text:"We craft premium designs for agencies and global brands around the globe."},{id:3,image:"assets/imgs/portfolio/gallery/3.jpg",number:"03.",type:"Design",title:"Roseville Pottery",text:"We craft premium designs for agencies and global brands around the globe."}],E={class:"portfolio-fixed"},I={class:"container-fluid rest"},M={class:"row"},z={class:"col-lg-6 rest",style:{position:"relative"}},P={class:"left",id:"sticky_item"},V=["id","data-background"],j={class:"col-lg-6 sub-bg right"},D=["data-tab"],W={class:"img-hiden"},F=["src"],q={class:"sub-title mb-15"},N={class:"mb-15"},U={class:"row justify-content-center"},R={class:"col-md-11"},Z=_('<ul class="rest list-arrow mt-30"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Make your business visible online.</h6></li><li class="mt-5"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Make your eCommerce business stand out.</h6></li><li class="mt-5"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path></svg></span><h6 class="inline fz-16 fw-400">Grow with your audience.</h6></li></ul>',1),O={href:"#0",class:"butn-circle d-flex align-items-center text-center mt-50"},Q=s("div",{class:"full-width"},[s("span",null,[s("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})])]),s("span",{class:"full-width"},"View Details")],-1),G=["src"],J={__name:"Portfolio",props:["lightMode"],setup(r){H(()=>($(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i))),A(()=>{window.removeEventListener("scroll",i)});function i(){S({selector:".portfolio-fixed .sub-bg .cont",isElements:!0,callback(o){o.classList.add("current"),document.querySelector("#"+o.getAttribute("data-tab")).classList.add("current")},whenOutOfView(o){o.classList.remove("current"),document.querySelector("#"+o.getAttribute("data-tab")).classList.remove("current")}});const t=document.getElementById("sticky_item");if(!t)return;const n=t.getBoundingClientRect().width,e=document.querySelector(".portfolio-fixed").getBoundingClientRect();e.top<75&&e.height/2<e.bottom+400?(t.style.position="fixed",t.style.top="0px",t.style.width=n+"px",t.classList.remove("is_stuck")):e.height/2>e.bottom+400?(t.style.position="absolute",t.style.top="auto",t.style.bottom="0",t.style.width=n+"px",t.classList.add("is_stuck")):(t.style.position="relative",t.style.top="unset",t.style.bottom="unset",t.style.width="auto")}return(t,n)=>(l(),c("section",E,[s("div",I,[s("div",M,[s("div",z,[s("div",P,[(l(!0),c(h,null,p(g(m),(e,o)=>(l(),c("div",{id:`tab-${o+1}`,class:"img bg-img","data-background":`${r.lightMode?"/light/":"/dark/"}${e.image}`,key:o},null,8,V))),128))])]),s("div",j,[(l(!0),c(h,null,p(g(m),(e,o)=>(l(),c("div",{class:T(`cont ${o===0?"active":""}`),"data-tab":`tab-${o+1}`,key:o},[s("div",W,[s("img",{src:`${r.lightMode?"/light/":"/dark/"}${e.image}`,alt:""},null,8,F)]),s("span",q,d(e.number)+" "+d(e.type),1),s("h2",N,d(e.title)+".",1),s("div",U,[s("div",R,[s("p",null,d(e.text)+".",1),Z,s("a",O,[Q,s("img",{src:`/${r.lightMode?"light":"dark"}/assets/imgs/svg-assets/circle-star.svg`,alt:"",class:"circle-star"},null,8,G)])])])],10,D))),128))])])])]))}},K={class:"intro-corp section-padding pt-0"},X=s("div",{class:"col-lg-5"},[s("div",{class:"sec-head mb-40"},[s("h6",{class:"sub-title"},"FAQ.")])],-1),Y=_('<div class="text"><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">Watch the creative process</span></span><span class="sideup-text"><span class="up-text"><span>behind our digital marketing</span>.</span></span></h2></div>',1),ss=s("h6",{class:"fz-18"},"The Power of Influencer Marketing",-1),ts=s("span",{class:"ico"},null,-1),es=[ss,ts],os=s("div",{class:"accordion-info"},[s("p",{class:"fz-14"},"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.")],-1),is=s("h6",{class:"fz-18"},"Unique and Influential Design",-1),ns=s("span",{class:"ico"},null,-1),as=[is,ns],ls=s("div",{class:"accordion-info"},[s("p",{class:"fz-14"},"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.")],-1),cs=s("h6",{class:"fz-18"},"We Build and Activate Brands",-1),rs=s("span",{class:"ico"},null,-1),ds=[cs,rs],us=s("div",{class:"accordion-info"},[s("p",{class:"fz-14"},"Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.")],-1),hs={__name:"FAQ",setup(r){function i(t){document.querySelectorAll(".accordion-info").forEach(n=>{n.classList.remove("active"),n.style.maxHeight=0,n.parentElement.classList.remove("active")}),t.currentTarget.parentElement.classList.add("active"),t.currentTarget.nextElementSibling.style.maxHeight="300px",t.currentTarget.nextElementSibling.classList.add("active")}return(t,n)=>(l(),c("section",K,[s("div",{class:"container"},[s("div",{class:"row"},[X,s("div",{class:"col-lg-7"},[s("div",{class:"cont"},[Y,s("div",{class:"accordion bord mt-40"},[s("div",{class:"item mb-15 wow fadeInUp","data-wow-delay":".1s"},[s("div",{class:"title",onClick:i},es),os]),s("div",{class:"item mb-15 wow fadeInUp","data-wow-delay":".3s"},[s("div",{class:"title",onClick:i},as),ls]),s("div",{class:"item wow fadeInUp","data-wow-delay":".5s"},[s("div",{class:"title",onClick:i},ds),us])])])])])])]))}},ws={__name:"index",setup(r){const i={subTitle:"WHAT CAN WE DO ?",title:"We combine our passion for design and code.",text:"SERVICES"};return B({titleTemplate:"%s - Services",bodyAttrs:{class:"main-bg"}}),(t,n)=>{const e=x,o=C,f=k,v=J,w=u("DigitalAgencyServicesTab"),b=hs,y=u("StartupCallToAction"),L=u("StartupFooter");return l(),c("div",null,[a(e),s("main",null,[a(o,{data:i}),a(f),a(v),a(w),a(b),a(y,{innerPageStyle:!0})]),a(L)])}}};export{ws as default};
