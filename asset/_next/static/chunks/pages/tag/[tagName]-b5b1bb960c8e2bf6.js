(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{6989:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[tagName]",function(){return r(5194)}])},4686:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(3972),o=r(2623),s=r(1623),l=r(8492),a=r(4781),c=r(2734),d=r(6374),h=r(6003),u=r(5675),x=r.n(u);t.Z=function(e){let t=(0,c.Z)(),{item:r}=e,u="/article/".concat(r.urlName),m=r.title.length>60?"".concat(r.title.slice(0,57),"..."):r.title,g=r.summary.length>160?"".concat(r.summary.slice(0,157),"..."):r.summary;return(0,n.jsx)(s.Z,{component:"a",href:u,sx:{mb:4},children:(0,n.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,n.jsxs)(l.Z,{sx:{flex:1},children:[(0,n.jsx)(i.Z,{component:"h2",variant:"h6",gutterBottom:!0,children:m}),(0,n.jsx)(i.Z,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:(0,d.W)(r.createdTime)}),(0,n.jsx)(i.Z,{variant:"subtitle2",gutterBottom:!0,sx:{fontSize:"0.9rem","@media (min-width:600px)":{fontSize:"0.9rem"},[t.breakpoints.down("sm")]:{display:"none"},[t.breakpoints.up("md")]:{fontSize:"1.1rem"}},children:g}),(0,n.jsx)(h.Z,{variant:"outlined",label:"Continue reading...",size:"small",sx:{fontSize:t.typography.body2.fontSize}})]}),(0,n.jsx)(a.Z,{sx:{position:"relative",pt:"1rem",pb:"0.5rem",pr:"0.5rem",width:{xs:120,sm:160},height:{xs:160,sm:213},display:{xs:"block",sm:"block"}},children:(0,n.jsx)(x(),{src:r.coverImageUrl,alt:r.title,width:160,height:213,style:{objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}})})]})})}},765:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);var i=r(7357),o=r(5582),s=r(3972),l=r(7786),a=r(2734),c=r(8298),d=r(6628),h=r(8850),u=r(813),x=r(3964);let m={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+x.e.email}]};function g(e){let{children:t}=e,r=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,n.jsx)(d.Z,{in:r,timeout:500,children:(0,n.jsx)(i.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function p(){return(0,n.jsxs)(s.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,n.jsx)(l.Z,{color:"inherit",href:x.e.url,underline:"hover",children:x.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,a.Z)(),{links:r}=m;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{...e,children:(0,n.jsx)(h.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,n.jsx)(u.Z,{})})}),(0,n.jsx)(i.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,n.jsxs)(o.Z,{maxWidth:"lg",children:[(0,n.jsx)(p,{}),(0,n.jsx)(s.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:r.map(e=>(0,n.jsx)(l.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},5194:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return k},default:function(){return S}});var n=r(5893),i=r(7294),o=r(8263),s=r(5582),l=r(802),a=r(5084),c=r(2734),d=r(5221),h=r(4686),u=r(765),x=r(3508),m=r(3972),g=r(1163),p=r(6829),j=r(1812),f=r(3964),b=r(9739),Z=r(1233),y=r(7786),v=r(1342);let w=async(e,t)=>{let{result:r,error:n}=await (0,p.D2)("api/travel-journals/search/tag",(0,p.D4)({tag:e,cursor:t}));return n?[]:null==r?void 0:r.body};var k=!0;function S(e){let{tagName:t,articles:r}=e,p=(0,c.Z)(),k=(0,g.useRouter)(),[S,_]=i.useState(r),[F,C]=i.useState({loading:!1,disabled:0===S.length});if(i.useEffect(()=>{0===S.length&&k.replace("/404")},[]),0===S.length)return null;let P=async()=>{let e=S[S.length-1].cursor;C({loading:!0,disabled:!0});let r=await w(t,e);C({loading:!1,disabled:0===r.length}),r.length>0&&_([...S,...r])},N=t+" Search Results | "+f.e.title,z="Search Results for: "+t,W=f.e.url+"/tag/"+t,E=f.e.url+f.e.logoUrl,T=[{name:"Twitter",icon:a.Z,url:"https://twitter.com/intent/tweet?url=".concat(W,"&text=").concat(z)},{name:"Facebook",icon:l.Z,url:"https://www.facebook.com/sharer/sharer.php?u=".concat(W)}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.Z,{url:W,title:N,description:z,keywords:t,imageUrl:E}),(0,n.jsxs)(s.Z,{maxWidth:"lg",children:[(0,n.jsx)("div",{id:"back-to-top-anchor"}),(0,n.jsx)(d.Z,{}),(0,n.jsx)("main",{children:(0,n.jsxs)(o.ZP,{container:!0,spacing:4,children:[(0,n.jsx)(o.ZP,{item:!0,xs:12,md:8,mt:2,mb:-2,children:(0,n.jsxs)(m.Z,{variant:"h6",component:"h1",fontWeight:"bold",color:"textSecondary",children:["Search Results for: ",(0,n.jsx)("span",{style:{textDecoration:"underline"},children:t})]})}),(0,n.jsxs)(o.ZP,{item:!0,xs:12,md:8,children:[S.map(e=>(0,n.jsx)(h.Z,{item:e},e.urlName)),(0,n.jsx)(o.ZP,{container:!0,justifyContent:"center",sx:{mb:p.spacing(4)},children:(0,n.jsx)(j.Z,{variant:"outlined",startIcon:(0,n.jsx)(x.Z,{}),loadingPosition:"start",loading:F.loading,disabled:F.disabled,onClick:()=>P(),sx:{color:"grey.700",borderColor:"grey.700"},children:"Load More"})})]}),(0,n.jsxs)(o.ZP,{item:!0,xs:12,md:4,mb:{xs:1},children:[(0,n.jsxs)(m.Z,{variant:"h6",gutterBottom:!0,color:"secondary",fontWeight:"bolder",sx:{display:"flex",alignItems:"center",mt:-4,[p.breakpoints.up("sm")]:{mt:-1}},children:[(0,n.jsx)(b.Z,{sx:{mr:1}}),"Share"]}),(0,n.jsx)(Z.Z,{spacing:{xs:1,sm:2},direction:"row",useFlexGap:!0,flexWrap:"wrap",children:T.map(e=>(0,n.jsx)(y.Z,{display:"block",variant:"body1",href:e.url,sx:{mb:.5},underline:"hover",children:(0,n.jsxs)(Z.Z,{direction:"row",spacing:1,alignItems:"center",color:"secondary",children:[(0,n.jsx)(e.icon,{}),(0,n.jsx)("span",{children:e.name})]})},e.name))})]})]})})]}),(0,n.jsx)(u.default,{})]})}}},function(e){e.O(0,[895,75,946,390,774,888,179],function(){return e(e.s=6989)}),_N_E=e.O()}]);