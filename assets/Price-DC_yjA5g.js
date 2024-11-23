import{d as C,r as p,a as o,b as e,F as c,e as r,u as _,t as s,h as K,o as n,n as h,w as k,f as P,i as f,j as w,E as I,_ as T}from"./index-DlgDJ6zA.js";let t=1001;const m={personal:{title:"个人版",common:"专注设计，提升设计效率",version:[{id:10,title:"免费版",common:"免费",btnText:"立即使用",advantage:[{aid:t++,title:"专业云设计工具"},{aid:t++,title:"标清渲染"}]},{id:11,title:"基础会员",common:"¥399首单优惠/年",btnText:"立即升级",advantage:[{aid:t++,title:"每月300+渲染券（最高5K）"},{aid:t++,title:"3K/4K夜间无限渲染（22:00-8:00）"},{aid:t++,title:"最高720P视频渲染"},{aid:t++,title:"全景图去水印+自定义音乐上传"}]},{id:12,title:"高级会员",common:"¥999/年",btnText:"立即升级",advantage:[{aid:t++,title:"4K/5K半日无限渲染（20:00-8:00）"},{aid:t++,title:"20000+设计精品库素材"},{aid:t++,title:"定制图纸清单一键导出"},{aid:t++,title:"施工图升级卡全部特权"}]},{id:12,title:"专业会员",common:"¥3,000/年",btnText:"立即升级",advantage:[{aid:t++,title:"4K/5K全天无限渲染"},{aid:t++,title:"最高32K渲染（可增购）"},{aid:t++,title:"同时渲染3张，享优先渲染"},{aid:t++,title:"最高1080P视频渲染"},{aid:t++,title:"全景图个人联系方式+logo设置"}]}]},enterprise:{title:"企业版",common:"全链路协作各行业覆盖，打造专业解决方案",version:[{id:10,title:"团队版（龙年腾飞版）",common:"适用以设计渲染为主要需求的小微企业",advantage:[{aid:t++,title:"全行业设计能力"},{aid:t++,title:"最高可同时渲染6张；最高渲染清晰度可达32K"},{aid:t++,title:"全量酷家乐精品设计素材"},{aid:t++,title:"全景图营销留资能力"},{aid:t++,title:"可自定义施工图模版"}]},{id:11,title:"企业设计营销版（2024）",common:"适用大家居、公装、别墅建筑、专业照明、门窗等行业（包括跨行业业务）的企业",advantage:[{aid:t++,title:"全行业设计能力"},{aid:t++,title:"海量高清视频权益"},{aid:t++,title:"无限量自建3D/参数化模型库"},{aid:t++,title:"无限量自定义企业模版"},{aid:t++,title:"多品牌营销管理，多渠道素材管理"},{aid:t++,title:"设计数据API对接"}]},{id:12,title:"企业生产对接版（2024）",common:"适用设计-生产一体化需求企业，柔性生产企业",advantage:[{aid:t++,title:"可打通设计与生产对接，拥有全量酷家乐精品素材"},{aid:t++,title:"无限量自定义企业模版"},{aid:t++,title:"多品牌营销管理，多渠道素材管理"},{aid:t++,title:"设计数据+生产数据API对接"},{aid:t++,title:"可增购酷家乐定制行业生产对接全线版"},{aid:t++,title:"专属实施工程师1V1答疑服务"}]}]}},F={class:"container min-h-[100vh] w-[80%] mx-auto"},V={class:"topbar mt-7 mb-12"},j={class:"flex justify-center text-2xl font-bold text-gray-500"},B=["onClick"],E={href:"#"},M={class:"text-4xl text-center font-bold text-gray-700 mb-12"},z={class:"main"},A={class:"main-inner flex justify-center pb-[100px]"},D=["onMouseenter"],N={class:"title text-xl font-bold text-gray-700"},S={class:"desc"},L={class:"advantage px-3"},q={class:"left-icon mr-2 text-blue-300"},G={class:"text align-middle"},H=C({__name:"Price",setup(J){const i=p("personal");function b(v,u){return v[u]}const d=p(0);return(v,u)=>{const g=K("CircleCheckFilled"),y=I;return n(),o("div",F,[e("div",V,[e("ul",j,[(n(!0),o(c,null,r(_(m),(a,l)=>(n(),o("li",{class:h({active:l==i.value}),key:l,onClick:k(()=>{i.value=l,d.value=0},["prevent"])},[e("a",E,s(a.title),1)],10,B))),128))])]),e("h1",M,s(b(_(m),i.value).common),1),e("div",z,[e("div",A,[(n(!0),o(c,null,r(_(m)[i.value].version,(a,l)=>(n(),o("div",{key:a.id,class:h(["box flex flex-col mx-3",{active:l==d.value,boxbg:i.value=="personal"&&l==d.value}]),style:P({width:i.value=="personal"?"284px":"320px"}),onMouseenter:()=>d.value=l},[e("div",N,s(a.title),1),e("div",S,s(a.common),1),e("button",null,s(i.value=="personal"?a.btnText:"立即咨询"),1),e("div",L,[(n(!0),o(c,null,r(a.advantage,x=>(n(),o("div",{key:x.aid,class:"item flex text-xs tracking-wider"},[e("div",q,[f(y,null,{default:w(()=>[f(g)]),_:1})]),e("div",G,s(x.title),1)]))),128))])],46,D))),128))])])])}}}),Q=T(H,[["__scopeId","data-v-32610914"]]);export{Q as default};
