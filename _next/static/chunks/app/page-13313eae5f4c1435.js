(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{416:function(e,t,r){Promise.resolve().then(r.bind(r,3663))},3663:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var a=r(7437),s=r(2265),n=r(3145),l=r(7648),i=r(2869),o=r(6070),c=r(5922),d=r(4566),u=r(3223),f=r(8771),h=r(5647);function m(e,t){[...t].reverse().forEach(r=>{let a=e.getVariant(r);a&&(0,f.C)(e,a),e.variantChildren&&e.variantChildren.forEach(e=>{m(e,t)})})}function x(){let e=!1,t=new Set,r={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(r,a){(0,u.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let s=[];return t.forEach(e=>{s.push((0,h.d)(e,r,{transitionOverride:a}))}),Promise.all(s)},set:r=>((0,u.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{Array.isArray(r)?m(e,r):"string"==typeof r?m(e,[r]):(0,f.C)(e,r)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,r.stop()})};return r}var p=r(3576),g=r(1534);let v=function(){let e=(0,p.h)(x);return(0,g.L)(e.mount,[]),e};var b=r(3433),y=r(5625),j=r(5447),w=r(5584),N=r(9742),k=r(4508);function z(e){let{children:t,className:r,...s}=e;return(0,a.jsx)("button",{className:(0,k.cn)("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",r),...s,children:t})}var E=r(7479),C=e=>{let{children:t,className:r,shimmerWidth:s=100}=e;return(0,a.jsx)("p",{style:{"--shiny-width":"".concat(s,"px")},className:(0,k.cn)("mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70","animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]","bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",r),children:t})},R=r(7226);let A=(0,r(9205).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var M={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},_=((e,t,r,a)=>{let n=(0,s.forwardRef)((r,n)=>{let{color:l="currentColor",size:i=24,stroke:o=2,title:c,className:d,children:u,...f}=r;return(0,s.createElement)("svg",{ref:n,...M[e],width:i,height:i,className:["tabler-icon","tabler-icon-".concat(t),d].join(" "),..."filled"===e?{fill:l}:{strokeWidth:o,stroke:l},...f},[c&&(0,s.createElement)("title",{key:"svg-title"},c),...a.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(u)?u:[u]])});return n.displayName="".concat(r),n})("outline","send","IconSend",[["path",{d:"M10 14l11 -11",key:"svg-0"}],["path",{d:"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",key:"svg-1"}]]),F=e=>{let{className:t="",quantity:r=100,staticity:n=50,ease:l=50,size:i=.4,refresh:o=!1,color:c="#ffffff",vx:d=0,vy:u=0}=e,f=(0,s.useRef)(null),h=(0,s.useRef)(null),m=(0,s.useRef)(null),x=(0,s.useRef)([]),p=function(){let[e,t]=(0,s.useState)({x:0,y:0});return(0,s.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),g=(0,s.useRef)({x:0,y:0}),v=(0,s.useRef)({w:0,h:0}),b=window.devicePixelRatio;(0,s.useEffect)(()=>(f.current&&(m.current=f.current.getContext("2d")),y(),M(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[c]),(0,s.useEffect)(()=>{j()},[p.x,p.y]),(0,s.useEffect)(()=>{y()},[o]);let y=()=>{w(),R()},j=()=>{if(f.current){let e=f.current.getBoundingClientRect(),{w:t,h:r}=v.current,a=p.x-e.left-t/2,s=p.y-e.top-r/2;a<t/2&&a>-t/2&&s<r/2&&s>-r/2&&(g.current.x=a,g.current.y=s)}},w=()=>{h.current&&f.current&&m.current&&(x.current.length=0,v.current.w=h.current.offsetWidth,v.current.h=h.current.offsetHeight,f.current.width=v.current.w*b,f.current.height=v.current.h*b,f.current.style.width="".concat(v.current.w,"px"),f.current.style.height="".concat(v.current.h,"px"),m.current.scale(b,b))},N=()=>{let e=Math.floor(Math.random()*v.current.w);return{x:e,y:Math.floor(Math.random()*v.current.h),translateX:0,translateY:0,size:Math.floor(2*Math.random())+i,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.1,dy:(Math.random()-.5)*.1,magnetism:.1+4*Math.random()}},z=function(e){3===(e=e.replace("#","")).length&&(e=e.split("").map(e=>e+e).join(""));let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}(c),E=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(m.current){let{x:r,y:a,translateX:s,translateY:n,size:l,alpha:i}=e;m.current.translate(s,n),m.current.beginPath(),m.current.arc(r,a,l,0,2*Math.PI),m.current.fillStyle="rgba(".concat(z.join(", "),", ").concat(i,")"),m.current.fill(),m.current.setTransform(b,0,0,b,0,0),t||x.current.push(e)}},C=()=>{m.current&&m.current.clearRect(0,0,v.current.w,v.current.h)},R=()=>{C();for(let e=0;e<r;e++)E(N())},A=(e,t,r,a,s)=>{let n=(e-t)*(s-a)/(r-t)+a;return n>0?n:0},M=()=>{C(),x.current.forEach((e,t)=>{let r=parseFloat(A([e.x+e.translateX-e.size,v.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,v.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx+d,e.y+=e.dy+u,e.translateX+=(g.current.x/(n/e.magnetism)-e.translateX)/l,e.translateY+=(g.current.y/(n/e.magnetism)-e.translateY)/l,E(e,!0),(e.x<-e.size||e.x>v.current.w+e.size||e.y<-e.size||e.y>v.current.h+e.size)&&(x.current.splice(t,1),E(N()))}),window.requestAnimationFrame(M)};return(0,a.jsx)("div",{className:(0,k.cn)("pointer-events-none",t),ref:h,"aria-hidden":"true",children:(0,a.jsx)("canvas",{ref:f,className:"size-full"})})};let S=e=>{let{feature:t,index:r,description:l,isActive:i}=e,o=v(),c=(0,s.useRef)(null),d=(0,b.Y)(c,{once:!0,margin:"-100px 0px"});return(0,s.useEffect)(()=>{d&&o.start("visible")},[o,d]),(0,a.jsxs)(y.E.div,{ref:c,initial:"hidden",animate:i?"visible":"hidden",variants:{hidden:{opacity:0},visible:{opacity:1}},transition:{duration:.3},className:"flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto px-4 ".concat(i?"block":"hidden"),children:[(0,a.jsx)(y.E.div,{className:"w-full md:w-1/2 flex justify-center mb-6 md:mb-0",variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},transition:{duration:.5,ease:"easeOut"},children:(0,a.jsx)(n.default,{src:"/feature_".concat(r+1,".webp"),alt:t,width:200,height:200,className:"rounded-3xl object-contain"})}),(0,a.jsxs)(y.E.div,{className:"w-full md:w-1/2 text-center md:text-left md:pl-8",variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},transition:{duration:.5,ease:"easeOut",delay:.1},children:[(0,a.jsx)("h3",{className:"font-extrabold text-2xl md:text-3xl mb-4",children:t}),(0,a.jsx)("p",{className:"text-muted-foreground font-bold text-base md:text-lg",children:l})]})]})};function Y(){let{theme:e,setTheme:t}=(0,c.F)(),r=(0,s.useRef)(null),u=(0,s.useRef)(null),[f,h]=(0,s.useState)(!1),{scrollYProgress:m}=(0,j.v)(),x=(0,w.q)(m,{stiffness:100,damping:30,restDelta:.001}),p=(0,s.useRef)(null),{scrollYProgress:g}=(0,j.v)({target:p,offset:["start start","end start"]}),[v,b]=(0,s.useState)(0),M=[{title:"Seamless Google Sign-in",description:"Quickly access your account and personalized content with our easy-to-use Google Sign-in feature."},{title:"Loads of Free wallpapers",description:"Explore our vast collection of free wallpapers to find the perfect look for your device."},{title:"Exclusive Premium wallpapers",description:"Upgrade your experience with our handpicked selection of premium wallpapers for discerning users."},{title:"Easy customization",description:"Personalize your wallpapers with our intuitive editing tools to make them truly unique."},{title:"Curate your favorites",description:"Save and organize your favorite wallpapers for quick access and easy application."},{title:"Massive Collection",description:"Thousands of unique and trendy wallpapers spread across several collections to ensure there's something for everyone."}];return(0,s.useEffect)(()=>{let e=g.on("change",e=>{b(Math.min(Math.floor(e*M.length*1.5),M.length-1))});return()=>e()},[g,M.length]),(0,s.useEffect)(()=>{let e=new N.Z;return requestAnimationFrame(function t(r){e.raf(r),requestAnimationFrame(t)}),()=>{e.destroy()}},[]),(0,s.useEffect)(()=>{let e=r.current,t=u.current;if(e&&t){let r=e.firstElementChild,a=t.firstElementChild;if(r&&a){let s=r.cloneNode(!0),n=a.cloneNode(!0);e.appendChild(s),t.appendChild(n);let l=0,i=a.offsetWidth,o=0,c=s=>{o||(o=s);let n=s-o;o=s;let d=130*n/1e3;l+=d,i-=d,l>=r.offsetWidth&&(l-=r.offsetWidth),i<=0&&(i+=a.offsetWidth),e.scrollLeft=l,t.scrollLeft=i,requestAnimationFrame(c)};requestAnimationFrame(c)}}},[]),(0,s.useEffect)(()=>{h(!0)},[]),(0,a.jsxs)("div",{className:"min-h-screen bg-background text-foreground font-inter transition-opacity duration-1000 ".concat(f?"opacity-100":"opacity-0"),children:[(0,a.jsx)(y.E.div,{className:"fixed top-0 left-0 right-0 h-1 bg-primary z-50",style:{scaleX:x}}),(0,a.jsx)("header",{className:"container mx-auto px-4 py-4 sticky top-4 z-40",children:(0,a.jsx)("div",{className:"max-w-5xl mx-auto",children:(0,a.jsx)(o.Zb,{className:"rounded-full backdrop-blur-md bg-background/30 border-0 shadow-none",children:(0,a.jsxs)("div",{className:"flex justify-between items-center px-8 py-3",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(n.default,{src:"/radpapers_logo.svg",alt:"Radpapers Logo",width:36,height:36}),(0,a.jsx)("span",{className:"ml-4 text-base font-extrabold",children:"Radpapers"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(i.z,{asChild:!0,variant:"default",className:"hidden sm:flex rounded-xl",children:(0,a.jsxs)(l.default,{href:"https://play.google.com/store/apps/details?id=com.debojyoti.radpapers",children:[(0,a.jsx)(d.Y8C,{className:"mr-2 h-5 w-5"}),"Download Now"]})}),(0,a.jsx)(i.z,{variant:"ghost",size:"icon",onClick:()=>t("dark"===e?"light":"dark"),"aria-label":"Toggle theme",children:"dark"===e?(0,a.jsx)(d.sEY,{className:"h-5 w-5"}):(0,a.jsx)(R.Z,{className:"h-5 w-5"})})]})]})})})}),(0,a.jsxs)("main",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 z-0",children:(0,a.jsx)(F,{className:"absolute inset-0",quantity:90,ease:60,staticity:50,size:.6,color:"dark"===e?"#ffffff":"#000000",refresh:!0})}),(0,a.jsx)(E.Z,{delay:.3,children:(0,a.jsx)("div",{className:"z-10 flex min-h-20 items-center justify-center",children:(0,a.jsx)("div",{className:(0,k.cn)("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"),children:(0,a.jsxs)(C,{className:"inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",children:[(0,a.jsx)("span",{children:"✨ Introducing Radpapers"}),(0,a.jsx)(A,{className:"ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"})]})})})}),(0,a.jsx)(y.E.section,{id:"hero",className:"text-center my-12",children:(0,a.jsxs)(E.Z,{delay:.6,children:[(0,a.jsx)("h1",{className:"text-4xl sm:text-6xl font-black mb-2",children:"The ultimate app"}),(0,a.jsxs)("h2",{className:"text-4xl sm:text-6xl font-black mb-8",children:["for all your ",(0,a.jsx)("span",{className:"font-instrument-serif italic text-4xl sm:text-6xl font-medium mb-4",children:"wallpaper"})," needs"]}),(0,a.jsx)("p",{className:"text-lg sm:text-lg text-muted-foreground mb-[-2px] font-bold",children:"Explore the endless possibilities of"}),(0,a.jsx)("p",{className:"text-lg sm:text-lg text-muted-foreground mb-8 font-bold",children:"AI-driven art and customization!"}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8",children:[(0,a.jsx)(z,{children:(0,a.jsxs)(l.default,{href:"https://play.google.com/store/apps/details?id=com.debojyoti.radpapers",className:"flex items-center",children:[(0,a.jsx)(d.Y8C,{className:"mr-2 h-5 w-5"}),"Download Now"]})}),(0,a.jsx)(i.z,{size:"lg",children:(0,a.jsxs)(l.default,{href:"https://youtu.be/HldNEfVIw0I?si=f-jtYqvJLxvRN5WK",className:"flex items-center",children:[(0,a.jsx)("span",{children:"Video Trailer"}),(0,a.jsx)(d.jfD,{className:"ml-2 h-5 w-5"})]})})]})]})})]}),(0,a.jsx)("section",{id:"wallpaper-preview",className:"my-16 overflow-hidden relative",children:(0,a.jsxs)(E.Z,{delay:1.2,children:[(0,a.jsxs)("div",{className:"absolute inset-0 pointer-events-none z-10",children:[(0,a.jsx)("div",{className:"h-full w-20 bg-gradient-to-r from-background via-background/50 to-transparent absolute left-0"}),(0,a.jsx)("div",{className:"h-full w-20 bg-gradient-to-l from-background via-background/50 to-transparent absolute right-0"})]}),(0,a.jsx)("div",{ref:r,className:"flex mb-8 overflow-hidden",children:(0,a.jsxs)("div",{className:"flex gap-8",children:[[...Array(29)].map((e,t)=>(0,a.jsx)("div",{className:"relative aspect-[9/19.5] w-[125px] sm:w-[185px] flex-shrink-0 rounded-3xl overflow-hidden",children:(0,a.jsx)(n.default,{src:"/wallpaper".concat(t%15+1,".webp"),alt:"Wallpaper ".concat(t%15+1),fill:!0,style:{objectFit:"cover"}})},t)),(0,a.jsx)("div",{className:"w-2 flex-shrink-0"})]})}),(0,a.jsx)("div",{ref:u,className:"flex overflow-hidden",children:(0,a.jsxs)("div",{className:"flex gap-8",children:[[...Array(29)].map((e,t)=>(0,a.jsx)("div",{className:"relative aspect-[9/19.5] w-[125px] sm:w-[185px] flex-shrink-0 rounded-3xl overflow-hidden",children:(0,a.jsx)(n.default,{src:"/wallpaper".concat(t%15+16,".webp"),alt:"Wallpaper ".concat(t%15+16),fill:!0,style:{objectFit:"cover"}})},t)),(0,a.jsx)("div",{className:"w-2 flex-shrink-0"})]})})]})}),(0,a.jsxs)("section",{ref:p,id:"features",className:"my-16 h-[300vh]",children:[(0,a.jsxs)("div",{className:"text-center mb-8",children:[(0,a.jsx)("h2",{className:"text-3xl sm:text-4xl font-extrabold mb-4",children:"Key Features"}),(0,a.jsx)("p",{className:"text-lg sm:text-lg text-muted-foreground max-w-3xl mx-auto font-semibold",children:"Discover what makes Radpapers special"})]}),(0,a.jsx)("div",{className:"sticky top-16 h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden",children:M.map((e,t)=>(0,a.jsx)(S,{feature:e.title,index:t,description:e.description,isActive:t===v},t))})]}),(0,a.jsx)("section",{id:"categories",className:"my-16 text-center",children:(0,a.jsxs)(E.Z,{delay:1.2,children:[(0,a.jsx)("h2",{className:"text-3xl sm:text-4xl font-extrabold mb-4",children:"Explore Our Categories"}),(0,a.jsx)("p",{className:"text-lg sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto font-semibold",children:"Discover wallpapers that match your style from our diverse range of categories."}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-4",children:["Space","3D Landscapes","Monsters","Stylistic","Abstract","Scenery","Vehicles","Photorealistic","Portraits","3D Characters","Animescapes","Cute Animals","Architecture","Futuristic"].map(e=>(0,a.jsx)(i.z,{variant:"secondary",size:"sm",children:e},e))})]})}),(0,a.jsx)("section",{id:"cta",className:"text-center my-24",children:(0,a.jsxs)(E.Z,{delay:1.5,children:[(0,a.jsx)(n.default,{src:"/radpapers_logo.svg",alt:"Radpapers Icon",width:80,height:80,className:"mx-auto mb-6"}),(0,a.jsx)("h2",{className:"text-3xl sm:text-4xl font-extrabold mb-2",children:"Stop using boring wallpapers."}),(0,a.jsx)("p",{className:"text-lg sm:text-lg text-muted-foreground mb-6 font-bold",children:"Uplift your device's vibes. Install Radpapers"}),(0,a.jsx)(z,{children:(0,a.jsxs)(l.default,{href:"https://play.google.com/store/apps/details?id=com.debojyoti.radpapers",className:"flex items-center",children:[(0,a.jsx)(d.Y8C,{className:"mr-2 h-5 w-5"}),"Download Now"]})})]})})]}),(0,a.jsx)("footer",{id:"footer",className:"bg-muted py-8",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"Socials"}),(0,a.jsx)("p",{className:"text-muted-foreground mb-4 font-semibold",children:"Follow us on our socials to stay ahead of the curve"}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-4",children:[(0,a.jsx)(i.z,{variant:"outline",size:"sm",asChild:!0,children:(0,a.jsxs)(l.default,{href:"https://t.me/StellarStudios",children:[(0,a.jsx)(_,{className:"mr-3 h-5 w-5"}),"Telegram"]})}),(0,a.jsx)(i.z,{variant:"outline",size:"sm",asChild:!0,children:(0,a.jsxs)(l.default,{href:"https://www.instagram.com/stellarstudios.app",children:[(0,a.jsx)(d.Adh,{className:"mr-3 h-5 w-5"}),"Instagram"]})}),(0,a.jsx)(i.z,{variant:"outline",size:"sm",asChild:!0,children:(0,a.jsxs)(l.default,{href:"https://x.com/Pseudo_Maverick",children:[(0,a.jsx)(d.cy8,{className:"mr-3 h-4 w-4"}),"X (Twitter)"]})})]}),(0,a.jsxs)("p",{className:"mt-8 text-sm text-muted-foreground font-semibold",children:["\xa9 2024 Radpapers. All rights reserved. | ",(0,a.jsx)(l.default,{href:"/privacy-policy",className:"underline",children:"Privacy Policy"})," | ",(0,a.jsx)(l.default,{href:"/terms-of-use",className:"underline",children:"Terms of Use"})]})]})})]})}},7479:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7437),s=r(2265),n=r(3433),l=r(8614),i=r(5625);function o(e){let{children:t,className:r,variant:o,duration:c=.4,delay:d=0,yOffset:u=6,inView:f=!1,inViewMargin:h="-50px",blur:m="6px"}=e,x=(0,s.useRef)(null),p=(0,n.Y)(x,{once:!0,margin:h});return(0,a.jsx)(l.M,{children:(0,a.jsx)(i.E.div,{ref:x,initial:"hidden",animate:!f||p?"visible":"hidden",exit:"hidden",variants:o||{hidden:{y:u,opacity:0,filter:"blur(".concat(m,")")},visible:{y:-u,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+d,duration:c,ease:"easeOut"},className:r,children:t})})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(7437),s=r(2265),n=r(5293),l=r(7712),i=r(4508);let o=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-xl px-3",lg:"h-11 rounded-xl px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:s,size:l,className:r})),ref:t,...d})});c.displayName="Button"},6070:function(e,t,r){"use strict";r.d(t,{Zb:function(){return l}});var a=r(7437),s=r(2265),n=r(4508);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});l.displayName="Card",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})}).displayName="CardHeader",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})}).displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})}).displayName="CardDescription",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})}).displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(1994),s=r(3335);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[665,294,971,117,744],function(){return e(e.s=416)}),_N_E=e.O()}]);