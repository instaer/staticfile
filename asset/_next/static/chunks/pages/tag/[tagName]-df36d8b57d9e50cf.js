(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{6989:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[tagName]",function(){return n(9890)}])},1370:function(e,t,n){"use strict";var o=n(5893);n(7294);var r=n(3972),i=n(2623),s=n(1623),c=n(8492),l=n(4781),a=n(2734),x=n(5675),p=n.n(x),h=n(3379);t.Z=function(e){let t=(0,a.Z)(),{item:n}=e,x="/article/".concat(n.urlName),d=n.title.length>60?"".concat(n.title.slice(0,57),"..."):n.title,m=n.summary.length>140?"".concat(n.summary.slice(0,137),"..."):n.summary;return(0,o.jsx)(s.Z,{component:"a",href:x,sx:{mb:4},children:(0,o.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,o.jsxs)(c.Z,{sx:{flex:1,height:{xs:"auto",sm:"auto"}},children:[(0,o.jsx)(r.Z,{component:"h2",marginBottom:t.spacing(2),fontWeight:"bold",sx:{fontSize:t.typography.h6.fontSize,[t.breakpoints.down("sm")]:{fontSize:"1.2rem",marginBottom:t.spacing(0)}},children:d}),(0,o.jsx)(r.Z,{color:"text.secondary",marginBottom:t.spacing(2),sx:{fontSize:"0.9rem",[t.breakpoints.down("sm")]:{display:"none"},[t.breakpoints.up("sm")]:{fontSize:"0.9rem"},[t.breakpoints.up("md")]:{fontSize:"1.1rem"}},children:m}),(0,o.jsxs)(r.Z,{marginBottom:t.spacing(1),sx:{display:"flex",alignItems:"center",color:"text.secondary",textDecoration:"underline",[t.breakpoints.down("sm")]:{display:"none"}},children:["Continue reading",(0,o.jsx)(h.Z,{fontSize:"inherit",color:"text.secondary"})]})]}),(0,o.jsx)(l.Z,{sx:{position:"relative",pt:"1rem",pb:"0.5rem",pr:"0.5rem",width:{xs:120,sm:160},height:{xs:160,sm:213},display:{xs:"block",sm:"block"}},children:(0,o.jsx)(p(),{src:n.coverImageUrl,alt:n.title,width:160,height:213,style:{objectFit:"cover",maxWidth:"100%",maxHeight:"100%"}})})]})})}},9044:function(e,t,n){"use strict";n.r(t);var o=n(5893);n(7294);var r=n(7357),i=n(5582),s=n(3972),c=n(7786),l=n(2734),a=n(8298),x=n(6628),p=n(8850),h=n(813),d=n(4080);let m={links:[{title:"Privacy",url:"/privacy"},{title:"Terms",url:"/terms"},{title:"Contact",url:"mailto:"+d.e.email}]};function ScrollTop(e){let{children:t}=e,n=(0,a.Z)({disableHysteresis:!0,threshold:100});return(0,o.jsx)(x.Z,{in:n,timeout:500,children:(0,o.jsx)(r.Z,{onClick:e=>{let t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");if(t){let e={block:"center",behavior:"smooth"};setTimeout(()=>{t.scrollIntoView(e)},150)}},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function Copyright(){return(0,o.jsxs)(s.Z,{variant:"subtitle2",align:"center",color:"#202124",gutterBottom:!0,children:["Copyright \xa9 ",(0,o.jsx)(c.Z,{color:"inherit",href:d.e.url,underline:"hover",children:d.e.title})," ",new Date().getFullYear(),"."]})}t.default=function(e){let t=(0,l.Z)(),{links:n}=m;return(0,o.jsxs)("footer",{children:[(0,o.jsx)(ScrollTop,{...e,children:(0,o.jsx)(p.Z,{size:"small","aria-label":"scroll back to top",sx:{bgcolor:"#FF9966","&:hover":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[8]},"&:active":{bgcolor:"#FF8533",boxShadow:e=>e.shadows[12]}},children:(0,o.jsx)(h.Z,{})})}),(0,o.jsx)(r.Z,{component:"footer",sx:{bgcolor:"#f2f2f2",pt:2,pb:1},children:(0,o.jsxs)(i.Z,{maxWidth:"lg",children:[(0,o.jsx)(Copyright,{}),(0,o.jsx)(s.Z,{variant:"subtitle2",align:"center",component:"p",sx:{display:"flex",justifyContent:"center",gap:t.spacing(1)},children:n.map(e=>(0,o.jsx)(c.Z,{href:e.url,underline:"hover",color:"#202124",children:e.title},e.title))})]})})]})}},6905:function(e,t,n){"use strict";n.d(t,{Z:function(){return components_PageHead}});var o=n(5893),r=n(9008),i=n.n(r);n(7294);var s=n(4080),c=n(1752),l=n.n(c),components_JsonLd=function(e){let{data:t}=e;return(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})},components_PageHead=function(e){let{url:t,title:n,description:r,keywords:c,imageUrl:a,jsonLdData:x}=e,{publicRuntimeConfig:p}=l()();return(0,o.jsxs)(i(),{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,o.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),(0,o.jsx)("meta",{name:"google-adsense-account",content:s.e.googleAdsenseAccount}),(0,o.jsx)("title",{children:n}),(0,o.jsx)("meta",{name:"description",content:r}),(0,o.jsx)("meta",{name:"keywords",content:c}),(0,o.jsx)("link",{rel:"canonical",href:t}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:site_name",content:s.e.title}),(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"og:title",content:n}),(0,o.jsx)("meta",{property:"og:description",content:r}),(0,o.jsx)("meta",{property:"og:url",content:t}),(0,o.jsx)("meta",{property:"og:image",content:a}),(0,o.jsx)("meta",{property:"og:image:secure_url",content:a}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:n}),(0,o.jsx)("meta",{name:"twitter:description",content:r}),(0,o.jsx)("meta",{name:"twitter:image",content:a}),(0,o.jsx)("meta",{name:"excerpt",content:r}),(0,o.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://cdn.jsdelivr.net"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://adservice.google.com/"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net/"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://pagead2.googlesyndication.com/"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://www.googletagservices.com/"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://tpc.googlesyndication.com/"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:p.publicResourcePrefix+"/icons/apple-touch-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:p.publicResourcePrefix+"/icons/apple-touch-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:p.publicResourcePrefix+"/icons/apple-touch-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"167x167",href:p.publicResourcePrefix+"/icons/apple-touch-icon-167x167.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:p.publicResourcePrefix+"/icons/apple-touch-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",href:p.publicResourcePrefix+"/icons/favicon-16x16.png",sizes:"16x16"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",href:p.publicResourcePrefix+"/icons/favicon-32x32.png",sizes:"32x32"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",href:p.publicResourcePrefix+"/icons/android-chrome-96x96.png",sizes:"96x96"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",href:p.publicResourcePrefix+"/icons/android-chrome-192x192.png",sizes:"192x192"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),x&&(0,o.jsx)(components_JsonLd,{data:x})]})}},9890:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return k},default:function(){return TagPage}});var o=n(5893),r=n(7294),i=n(8263),s=n(5582),c=n(802),l=n(5084),a=n(2734),x=n(3454),p=n(1370),h=n(9044),d=n(3508),m=n(3972),g=n(7285),u=n(1812),f=n(4080),j=n(9739),b=n(1233),y=n(7786),w=n(6905);let fetchSearchByTag=async(e,t)=>{let{result:n,error:o}=await (0,g.D2)("api/travel-journals/search/tag",(0,g.D4)({tag:e,cursor:t}));return o?[]:null==n?void 0:n.body};var k=!0;function TagPage(e){let{tagName:t,articles:n}=e,g=(0,a.Z)(),[k,Z]=r.useState(n),[v,_]=r.useState({loading:!1,disabled:0===k.length});if(!k||0===k.length)return null;let handleLoadMore=async()=>{let e=k[k.length-1].cursor;_({loading:!0,disabled:!0});let n=await fetchSearchByTag(t,e);_({loading:!1,disabled:0===n.length}),n.length>0&&Z([...k,...n])},S="Explore Articles Tagged with [".concat(t,"] | ").concat(f.e.title),P="Explore Articles Tagged with [".concat(t,"] | ").concat(f.e.title),z=f.e.url+"/tag/"+t,T=f.e.logoUrl,C=[{name:"Twitter",icon:l.Z,url:"https://twitter.com/intent/tweet?url=".concat(z,"&text=").concat(P)},{name:"Facebook",icon:c.Z,url:"https://www.facebook.com/sharer/sharer.php?u=".concat(z)}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.Z,{url:z,title:S,description:P,keywords:t,imageUrl:T}),(0,o.jsxs)(s.Z,{maxWidth:"lg",children:[(0,o.jsx)("div",{id:"back-to-top-anchor"}),(0,o.jsx)(x.Z,{}),(0,o.jsx)("main",{children:(0,o.jsxs)(i.ZP,{container:!0,spacing:4,children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,md:8,mt:2,mb:-2,children:(0,o.jsxs)(m.Z,{variant:"h6",component:"h1",fontWeight:"bold",color:"textSecondary",children:["Explore Articles Tagged with ",(0,o.jsxs)("span",{style:{textDecoration:"underline"},children:["[",t,"]"]})]})}),(0,o.jsxs)(i.ZP,{item:!0,xs:12,md:8,children:[k.map(e=>(0,o.jsx)(p.Z,{item:e},e.urlName)),(0,o.jsx)(i.ZP,{container:!0,justifyContent:"center",sx:{mb:g.spacing(4)},children:(0,o.jsx)(u.Z,{variant:"outlined",startIcon:(0,o.jsx)(d.Z,{}),loadingPosition:"start",loading:v.loading,disabled:v.disabled,onClick:()=>handleLoadMore(),sx:{color:"grey.700",borderColor:"grey.700"},children:"Load More"})})]}),(0,o.jsxs)(i.ZP,{item:!0,xs:12,md:4,mb:{xs:1},children:[(0,o.jsxs)(m.Z,{variant:"h6",gutterBottom:!0,color:"secondary",fontWeight:"bolder",sx:{display:"flex",alignItems:"center",mt:-4,[g.breakpoints.up("sm")]:{mt:-1}},children:[(0,o.jsx)(j.Z,{sx:{mr:1}}),"Share"]}),(0,o.jsx)(b.Z,{spacing:{xs:1,sm:2},direction:"row",useFlexGap:!0,flexWrap:"wrap",children:C.map(e=>(0,o.jsx)(y.Z,{display:"block",variant:"body1",href:e.url,sx:{mb:.5},underline:"hover",children:(0,o.jsxs)(b.Z,{direction:"row",spacing:1,alignItems:"center",color:"secondary",fontWeight:"bold",children:[(0,o.jsx)(e.icon,{}),(0,o.jsx)("span",{children:e.name})]})},e.name))})]})]})})]}),(0,o.jsx)(h.default,{})]})}}},function(e){e.O(0,[672,716,253,946,546,774,888,179],function(){return e(e.s=6989)}),_N_E=e.O()}]);