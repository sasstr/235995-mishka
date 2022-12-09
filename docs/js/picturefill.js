!function(e,i,l){"use strict";var n,o,u;i.createElement("picture");var b={},c=!1,t=function(){},s=i.createElement("img"),f=s.getAttribute,p=s.setAttribute,d=s.removeAttribute,a=i.documentElement,r={},E={algorithm:""},h="data-pfsrc",m=h+"set",A=navigator.userAgent,z=/rident/.test(A)||/ecko/.test(A)&&A.match(/rv\:(\d+)/)&&35<RegExp.$1,T="currentSrc",g=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,w=e.picturefillCFG,S="font-size:100%!important;",x=!0,y={},R={},C=e.devicePixelRatio,M={px:1,in:96},P=i.createElement("a"),D=!1,k=/^[ \t\n\r\u000c]+/,I=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,$=/[,]+$/,B=/^\d+$/,L=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Q=function(e,t,s,r){e.addEventListener?e.addEventListener(t,s,r||!1):e.attachEvent&&e.attachEvent("on"+t,s)},W=function(t){var s={};return function(e){return e in s||(s[e]=t(e)),s[e]}};function G(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var F,H,j,q,N,O,V,J,K,X,_,Y,Z,ee,te,se,re,ne,ie,ce=(F=/^([\d\.]+)(em|vw|px)$/,H=W(function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var s;if(!(e in y))if(y[e]=!1,t&&(s=e.match(F)))y[e]=s[1]*M[s[2]];else try{y[e]=new Function("e",H(e))(M)}catch(e){}return y[e]}),ae=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ue=function(e){if(c){var t,s,r,n=e||{};if(n.elements&&1===n.elements.nodeType&&("IMG"===n.elements.nodeName.toUpperCase()?n.elements=[n.elements]:(n.context=n.elements,n.elements=null)),r=(t=n.elements||b.qsa(n.context||i,n.reevaluate||n.reselect?b.sel:b.selShort)).length){for(b.setupRun(n),D=!0,s=0;s<r;s++)b.fillImg(t[s],n);b.teardownRun(n)}}};function le(e,t){return e.res-t.res}function oe(e,t){var s,r,n;if(e&&t)for(n=b.parseSet(t),e=b.makeUrl(e),s=0;s<n.length;s++)if(e===b.makeUrl(n[s].url)){r=n[s];break}return r}e.console&&console.warn,T in s||(T="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in s,b.supSizes="sizes"in s,b.supPicture=!!e.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&(j=i.createElement("img"),s.srcset="data:,a",j.src="data:,a",b.supSrcset=s.complete===j.complete,b.supPicture=b.supSrcset&&b.supPicture),b.supSrcset&&!b.supSizes?(q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",N=i.createElement("img"),O=function(){2===N.width&&(b.supSizes=!0),o=b.supSrcset&&!b.supSizes,c=!0,setTimeout(ue)},N.onload=O,N.onerror=O,N.setAttribute("sizes","9px"),N.srcset=q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",N.src=q):c=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=E,b.DPR=C||1,b.u=M,b.types=r,b.setSize=t,b.makeUrl=W(function(e){return P.href=e,P.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||ce(e)},b.calcLength=function(e){var t=ce(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||r[e]},b.parseSize=W(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,s=e.exec(r.substring(c));if(s)return t=s[0],c+=t.length,t}var p,d,t,s,n,i=r.length,c=0,h=[];function a(){var e,t,s,r,n,i,c,a,u,l=!1,o={};for(r=0;r<d.length;r++)i=(n=d[r])[n.length-1],c=n.substring(0,n.length-1),a=parseInt(c,10),u=parseFloat(c),B.test(c)&&"w"===i?((e||t)&&(l=!0),0===a?l=!0:e=a):L.test(c)&&"x"===i?((e||t||s)&&(l=!0),u<0?l=!0:t=u):B.test(c)&&"h"===i?((s||t)&&(l=!0),0===a?l=!0:s=a):l=!0;l||(o.url=p,e&&(o.w=e),t&&(o.d=t),s&&(o.h=s),s||t||e||(o.d=1),1===o.d&&(f.has1x=!0),o.set=f,h.push(o))}function u(){for(e(k),t="",s="in descriptor";;){if(n=r.charAt(c),"in descriptor"===s)if(G(n))t&&(d.push(t),t="",s="after descriptor");else{if(","===n)return c+=1,t&&d.push(t),void a();if("("===n)t+=n,s="in parens";else{if(""===n)return t&&d.push(t),void a();t+=n}}else if("in parens"===s)if(")"===n)t+=n,s="in descriptor";else{if(""===n)return d.push(t),void a();t+=n}else if("after descriptor"===s)if(G(n));else{if(""===n)return void a();s="in descriptor",c-=1}c+=1}}for(;;){if(e(I),i<=c)return h;p=e(U),d=[],","===p.slice(-1)?(p=p.replace($,""),a()):u()}}(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!n&&(e=i.body)){var t=i.createElement("div"),s=a.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",a.style.cssText=S,e.style.cssText=S,e.appendChild(t),n=t.offsetWidth,e.removeChild(t),n=parseFloat(n,10),a.style.cssText=s,e.style.cssText=r}return n||16},b.calcListLength=function(e){if(!(e in R)||E.uT){var t=b.calcLength(function(e){var t,s,r,n,i,c,a,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(s=function(e){var t,s="",r=[],n=[],i=0,c=0,a=!1;function u(){s&&(r.push(s),s="")}function l(){r[0]&&(n.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return u(),l(),n;if(a){if("*"===t&&"/"===e[c+1]){a=!1,c+=2,u();continue}c+=1}else{if(G(t)){if(e.charAt(c-1)&&G(e.charAt(c-1))||!s){c+=1;continue}if(0===i){u(),c+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){u(),l(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){a=!0,c+=2;continue}}s+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(i=(n=s[t])[n.length-1],a=i,u.test(a)&&0<=parseFloat(a)||l.test(a)||"0"===a||"-0"===a||"+0"===a){if(c=i,n.pop(),0===n.length)return c;if(n=n.join(" "),b.matchesMedia(n))return c}return"100vw"}(e));R[e]=t||M.width}return R[e]},b.setRes=function(e){var t;if(e)for(var s=0,r=(t=b.parseSet(e)).length;s<r;s++)ae(t[s],e.sizes);return t},b.setRes.res=ae,b.applySetCandidate=function(e,t){if(e.length){var s,r,n,i,c,a,u,l,o,f,p,d,h,m,A,g,v,w,S,x=t[b.ns],y=b.DPR;if(a=x.curSrc||t[T],(u=x.curCan||(f=t,p=a,!(d=e[0].set)&&p&&(d=(d=f[b.ns].sets)&&d[d.length-1]),(h=oe(p,d))&&(p=b.makeUrl(p),f[b.ns].curSrc=p,(f[b.ns].curCan=h).res||ae(h,h.set.sizes)),h))&&u.set===e[0].set&&((o=z&&!t.complete&&u.res-.1>y)||(u.cached=!0,u.res>=y&&(c=u))),!c)for(e.sort(le),c=e[(i=e.length)-1],r=0;r<i;r++)if((s=e[r]).res>=y){c=e[n=r-1]&&(o||a!==b.makeUrl(s.url))&&(m=e[n].res,A=s.res,g=y,v=e[n].cached,S=w=void 0,g<("saveData"===E.algorithm?2.7<m?g+1:(S=(A-g)*(w=Math.pow(m-.6,1.5)),v&&(S+=.1*w),m+S):1<g?Math.sqrt(m*A):m))?e[n]:s;break}c&&(l=b.makeUrl(c.url),x.curSrc=l,x.curCan=c,l!==a&&b.setSrc(t,c),b.setSize(t))}},b.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},b.getSet=function(e){var t,s,r,n=!1,i=e[b.ns].sets;for(t=0;t<i.length&&!n;t++)if((s=i[t]).srcset&&b.matchesMedia(s.media)&&(r=b.supportsType(s.type))){"pending"===r&&(s=r),n=s;break}return n},b.parseSets=function(e,t,s){var r,n,i,c,a=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[b.ns];(u.src===l||s.src)&&(u.src=f.call(e,"src"),u.src?p.call(e,h,u.src):d.call(e,h)),(u.srcset===l||s.srcset||!b.supSrcset||e.srcset)&&(r=f.call(e,"srcset"),u.srcset=r,c=!0),u.sets=[],a&&(u.pic=!0,function(e,t){var s,r,n,i,c=e.getElementsByTagName("source");for(s=0,r=c.length;s<r;s++)(n=c[s])[b.ns]=!0,(i=n.getAttribute("srcset"))&&t.push({srcset:i,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,u.sets)),u.srcset?(n={srcset:u.srcset,sizes:f.call(e,"sizes")},u.sets.push(n),(i=(o||u.src)&&g.test(u.srcset||""))||!u.src||oe(u.src,n)||n.has1x||(n.srcset+=", "+u.src,n.cands.push({url:u.src,d:1,set:n}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=l,u.supported=!(a||n&&!b.supSrcset||i&&!b.supSizes),c&&b.supSrcset&&!u.supported&&(r?(p.call(e,m,r),e.srcset=""):d.call(e,m)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==b.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},b.fillImg=function(e,t){var s,r,n,i,c,a=t.reselect||t.reevaluate;(e[b.ns]||(e[b.ns]={}),s=e[b.ns],a||s.evaled!==u)&&(s.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),s.supported?s.evaled=u:(r=e,i=b.getSet(r),c=!1,"pending"!==i&&(c=u,i&&(n=b.setRes(i),b.applySetCandidate(n,r))),r[b.ns].evaled=c))},b.setupRun=function(){D&&!x&&C===e.devicePixelRatio||(x=!1,C=e.devicePixelRatio,y={},R={},b.DPR=C||1,M.width=Math.max(e.innerWidth||0,a.clientWidth),M.height=Math.max(e.innerHeight||0,a.clientHeight),M.vw=M.width/100,M.vh=M.height/100,u=[M.height,M.width,C].join("-"),M.em=b.getEmValue(),M.rem=M.em)},b.supPicture?(ue=t,b.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=i.readyState||"";te=setTimeout(ee,"loading"===e?200:999),i.body&&(b.fillImgs(),(V=V||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,i.body?9:99),se=a.clientHeight,Q(e,"resize",(J=function(){x=Math.max(e.innerWidth||0,a.clientWidth)!==M.width||a.clientHeight!==se,se=a.clientHeight,x&&b.fillImgs()},K=99,Y=function(){var e=new Date-_;e<K?X=setTimeout(Y,K-e):(X=null,J())},function(){_=new Date,X||(X=setTimeout(Y,K))})),Q(i,"readystatechange",ee)),b.picturefill=ue,b.fillImgs=ue,b.teardownRun=t,ue._=b,e.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(E[t]=e[0],D&&b.fillImgs({reselect:!0}))}};for(;w&&w.length;)e.picturefillCFG.push(w.shift());e.picturefill=ue,"object"==typeof module&&"object"==typeof module.exports?module.exports=ue:"function"==typeof define&&define.amd&&define("picturefill",function(){return ue}),b.supPicture||(r["image/webp"]=(re="image/webp",ne="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(ie=new e.Image).onerror=function(){r[re]=!1,ue()},ie.onload=function(){r[re]=1===ie.width,ue()},ie.src=ne,"pending"))}(window,document);