import{d as l,_ as r,a as p,u as _,o as i,c as d,b as t,t as n,e as o}from"./index.a2afeb17.js";const v=l("app",{state:()=>({count:0}),getters:{doubleCount(e){return e.count*2}},actions:{countPlus(){this.count++}}});const f={class:"fm1 text-5xl"},m={class:"mt-5"},x=p({setup(e){const{countPlus:a,count:b}=v(),{t:u}=_();return(c,s)=>(i(),d("div",null,[t("div",null,[t("span",f,n(o(u)("helloWorld")),1)]),t("p",m,[t("button",{class:"btn w-32",onClick:s[0]||(s[0]=g=>o(a)())}," plus "+n(c.$pinia.state.value.app.count),1)])]))}});var k=r(x,[["__scopeId","data-v-5394cec0"]]);export{k as default};