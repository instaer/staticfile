(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{9424:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[urlName]",function(){return r(5235)}])},9044:function(e,t,r){"use strict";r.r(t);var i=r(5893);r(7294);var n=r(7357),a=r(5582),o=r(3972),l=r(7786),s=r(2734),c=r(8298),d=r(6628),h=r(8850),u=r(813),x=r(4080);let p={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+x.e.email}]};function ScrollTop(e){let{children:t}=e,r=(0,c.Z)({disableHysteresis:!0,threshold:100});return(0,i.jsx)(d.Z,{in:r,timeout:500,children:(0,i.jsx)(n.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function Copyright(){return(0,i.jsxs)(o.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,i.jsx)(l.Z,{color:"inherit",href:x.e.url,underline:"hover",children:x.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,s.Z)(),{links:r}=p;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ScrollTop,{...e,children:(0,i.jsx)(h.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,i.jsx)(u.Z,{})})}),(0,i.jsx)(n.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,i.jsxs)(a.Z,{maxWidth:"lg",children:[(0,i.jsx)(Copyright,{}),(0,i.jsx)(o.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:r.map(e=>(0,i.jsx)(l.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},5235:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return F},default:function(){return ArticlePage}});var i=r(5893),n=r(7294),a=r(5582),o=r(3454),l=r(9044),s=r(3972),c=r(7311),d=r(2734),h=r(7285),u=r(1163),x=r(7720),p=r(6195),m=r(1961),g=r(1233),f=r(4080),b=r(5084),j=r(802),Z=r(9739),w=r(4617),v=r(7786),y=r(2623),S=r(366),k=r(5675),_=r.n(k);let postPageStatistic=async e=>{await (0,h.D2)("api/travel-journals/page/statistic",{},{urlname:e})};var F=!0;function ArticlePage(e){var t,r;let h;let{article:k}=e,F=(0,d.Z)(),W=(0,u.useRouter)(),[T,C]=n.useState(!1);if(n.useEffect(()=>{0===Object.entries(k).length?(C(!0),W.replace("/404").then()):postPageStatistic(k.urlName).then()},[]),T)return null;let N=k.title+" | "+f.e.title,P=null===(t=k.summary)||void 0===t?void 0:t.substr(0,160),z=f.e.url+"/article/"+k.urlName,E=[{name:"Twitter",icon:b.Z,url:"https://twitter.com/intent/tweet?url=".concat(z,"&text=").concat(P)},{name:"Facebook",icon:j.Z,url:"https://www.facebook.com/sharer/sharer.php?u=".concat(z)}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.Z,{url:z,title:N,description:P,keywords:k.tags,imageUrl:k.coverImageUrl}),(0,i.jsxs)(a.Z,{maxWidth:"lg",children:[(0,i.jsx)("div",{id:"back-to-top-anchor"}),(0,i.jsx)(o.Z,{}),(0,i.jsxs)("main",{children:[(0,i.jsx)(s.Z,{variant:"h5",component:"h1",fontWeight:"bold",gutterBottom:!0,marginTop:F.spacing(3),children:k.title}),(0,i.jsxs)(g.Z,{direction:"row",useFlexGap:!0,flexWrap:"nowrap",spacing:{xs:5,sm:14},alignItems:"center",marginTop:F.spacing(3),children:[(0,i.jsxs)(s.Z,{color:"text.secondary",variant:"body2",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(w.Z,{fontSize:"small",sx:{marginRight:F.spacing(1)}}),(0,p.W)(k.createdTime)]}),(0,i.jsxs)(s.Z,{color:"text.secondary",variant:"body2",sx:{display:"flex",[F.breakpoints.down("sm")]:{display:"none"},justifyContent:"center"},children:[(0,i.jsx)(m.Z,{fontSize:"small",sx:{marginRight:F.spacing(1)}}),k.tags]})]}),(0,i.jsx)(x.Z,{variant:"fullWidth"}),(0,i.jsx)(s.Z,{component:"div",variant:"body1",paragraph:!0,sx:{fontSize:"1.1rem","@media (min-width:600px)":{fontSize:"1.1rem"},[F.breakpoints.up("md")]:{fontSize:"1.2rem"},"& img":{maxWidth:"100%",height:"auto",display:"block",marginLeft:"0",overflow:"hidden",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"}},children:(r=k.content,h=0,(0,c.ZP)(r,{replace:e=>{if("tag"===e.type&&"img"===e.name){let t=e.attribs.src,r=e.attribs.alt,n=e.attribs.width,a=e.attribs.height;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(_(),{src:t,alt:r,width:n,height:a,style:{objectFit:"fill",maxWidth:"100%"},priority:0==h++})})}}}))}),(0,i.jsx)(x.Z,{variant:"fullWidth"}),(0,i.jsxs)(y.Z,{elevation:0,sx:{pt:1.5,pb:1.5},"aria-label":"Share",children:[(0,i.jsxs)(s.Z,{variant:"h6",gutterBottom:!0,color:"secondary",fontWeight:"bolder",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(Z.Z,{sx:{mr:1}}),"Share"]}),(0,i.jsx)(g.Z,{spacing:{xs:1,sm:2},direction:"row",useFlexGap:!0,flexWrap:"wrap",children:E.map(e=>(0,i.jsx)(v.Z,{display:"block",variant:"body1",href:e.url,sx:{mb:.5},underline:"hover",children:(0,i.jsxs)(g.Z,{direction:"row",spacing:1,alignItems:"center",color:"secondary",children:[(0,i.jsx)(e.icon,{}),(0,i.jsx)("span",{children:e.name})]})},e.name))})]})]})]}),(0,i.jsx)(l.default,{})]})}}},function(e){e.O(0,[895,716,679,94,774,888,179],function(){return e(e.s=9424)}),_N_E=e.O()}]);