// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_kenburns(d,l,m){var e=jQuery;var g=e(this);var f=document.createElement("canvas").getContext;var i=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(m);var o=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[0.5,1,1],to:[0.5,1,1.3]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[1,0.5,1],to:[1,0.5,1.2]},{from:[0,0.5,1.2],to:[0,0.5,1]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[0.5,0.5,1],to:[0.5,0.5,1.2]},{from:[0.5,0.5,1.3],to:[0.5,0.5,1]},{from:[0.5,1,1],to:[0.5,0,1.15]}];function c(h){return o[h?Math.floor(Math.random()*(f?o.length:Math.min(5,o.length))):0]}var k=d.width,p=d.height;var j,b;var a,r;function n(){a=e('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(i)}n();function s(w,t,h){var u={width:100*w[2]+"%"};u[t?"right":"left"]=-100*(w[2]-1)*(t?(1-w[0]):w[0])+"%";u[h?"bottom":"top"]=-100*(w[2]-1)*(h?(1-w[1]):w[1])+"%";if(!f){for(var v in u){if(/\%/.test(u[v])){u[v]=(/right|left|width/.test(v)?k:p)*parseFloat(u[v])/100+"px"}}}return u}function q(w,z,A){var t=e(w);t={width:t.width(),height:t.height(),marginTop:t.css("marginTop"),marginLeft:t.css("marginLeft")};if(f){if(b){b.stop(1)}b=j}if(r){r.remove()}r=a;n();if(A){a.hide();r.stop(true,true)}if(f){var y,x;var u,h;u=e('<canvas width="'+k+'" height="'+p+'"/>');u.css({position:"absolute",left:0,top:0}).css(t).appendTo(a);y=u.get(0).getContext("2d");h=u.clone().appendTo(a);x=h.get(0).getContext("2d");j=wowAnimate(function(B){var D=[z.from[0]*(1-B)+B*z.to[0],z.from[1]*(1-B)+B*z.to[1],z.from[2]*(1-B)+B*z.to[2]];x.drawImage(w,-k*(D[2]-1)*D[0],-p*(D[2]-1)*D[1],k*D[2],p*D[2]);y.clearRect(0,0,k,p);var C=y;y=x;x=C},0,1,d.duration+d.delay*2)}else{k=t.width;p=t.height;var v=e('<img src="'+w.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(a).css(s(z.from,z.from[0]>0.5,z.from[1]>0.5)).animate(s(z.to,z.from[0]>0.5,z.from[1]>0.5),{easing:"linear",queue:false,duration:(1.5*d.duration+d.delay)})}if(A){a.fadeIn(d.duration)}}if(d.effect.length==1){e(function(){l.each(function(h){e(this).css({visibility:"hidden"});if(h==d.startSlide){q(this,c(h),0)}})})}this.go=function(h,t){setTimeout(function(){g.trigger("effectEnd")},d.duration);q(l.get(h),c(h),1)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blur(r,p,c){var h=jQuery;var o=h(this);var n=h("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(c);var b=!r.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(b){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(m){b=0}}var d;function k(s,e,t){wowAnimate(s.css({visibility:"visible"}),{opacity:0},{opacity:1},e,t)}function i(s,e,t){wowAnimate(s,{opacity:1},{opacity:0},e,t)}var l;this.go=function(e,s){if(l){return -1}l=1;var w=h(p.get(s)),u=h(p.get(e)),x={width:w.width(),height:w.height(),marginTop:w.css("marginTop"),marginLeft:w.css("marginLeft")};var v;if(b){if(!d){d='<canvas width="'+x.width+'" height="'+x.height+'"/>';d=h(d+d).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(n)}d.css(x).attr({width:x.width,height:x.height});v=g(w,x,30,d.get(0))}if(b&&v){var t=g(u,x,30,d.get(1));k(v,r.duration/3,function(){c.find(".ws_list").css({visibility:"hidden"});i(v,r.duration/6);k(t,r.duration/6,function(){v.css({visibility:"hidden"});c.find(".ws_list").css({visibility:"visible"});o.trigger("effectEnd",{delay:r.duration/2});i(t,r.duration/2,function(){l=0})})})}else{b=0;v=g(w,x,8);v.fadeIn(r.duration/3,"linear",function(){o.trigger("effectEnd",{delay:r.duration/3});v.fadeOut(r.duration/3,"linear",function(){v.remove();l=0})})}};function g(z,v,w,s){var C=(parseInt(z.parent().css("z-index"))||0)+1;if(b){var F=s.getContext("2d");F.drawImage(z.get(0),0,0,v.width,v.height);if(!j(F,0,0,s.width,s.height,w)){return 0}return h(s)}var G=h("<div></div>").css({position:"absolute","z-index":C,left:0,top:0,display:"none"}).css(v).appendTo(n);var E=(Math.sqrt(5)+1)/2;var t=1-E/2;for(var u=0;t*u<w;u++){var A=Math.PI*E*u;var e=(t*u+1);var D=e*Math.cos(A);var B=e*Math.sin(A);h(document.createElement("img")).attr("src",z.attr("src")).css({opacity:1/(u/1.8+1),position:"absolute","z-index":C,left:Math.round(D)+"px",top:Math.round(B)+"px",width:"100%",height:"100%"}).appendTo(G)}return G}var q=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var a=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function j(aj,R,P,s,t,aa){if(isNaN(aa)||aa<1){return}aa|=0;var ae;try{ae=aj.getImageData(R,P,s,t)}catch(ai){console.log("error:unable to access image data: "+ai);return false}var z=ae.data;var Y,X,ag,ad,G,J,D,v,w,O,E,Q,M,U,Z,H,C,I,K,T;var ah=aa+aa+1;var V=s<<2;var F=s-1;var ac=t-1;var B=aa+1;var ab=B*(B+1)/2;var S=new f();var N=S;for(ag=1;ag<ah;ag++){N=N.next=new f();if(ag==B){var A=N}}N.next=S;var af=null;var W=null;D=J=0;var L=q[aa];var u=a[aa];for(X=0;X<t;X++){U=Z=H=v=w=O=0;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}for(ag=1;ag<B;ag++){ad=J+((F<ag?F:ag)<<2);v+=(N.r=(C=z[ad]))*(T=B-ag);w+=(N.g=(I=z[ad+1]))*T;O+=(N.b=(K=z[ad+2]))*T;U+=C;Z+=I;H+=K;N=N.next}af=S;W=A;for(Y=0;Y<s;Y++){z[J]=(v*L)>>u;z[J+1]=(w*L)>>u;z[J+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(D+((ad=Y+aa+1)<F?ad:F))<<2;U+=(af.r=z[ad]);Z+=(af.g=z[ad+1]);H+=(af.b=z[ad+2]);v+=U;w+=Z;O+=H;af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=4}D+=s}for(Y=0;Y<s;Y++){Z=H=U=w=O=v=0;J=Y<<2;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}G=s;for(ag=1;ag<=aa;ag++){J=(G+Y)<<2;v+=(N.r=(C=z[J]))*(T=B-ag);w+=(N.g=(I=z[J+1]))*T;O+=(N.b=(K=z[J+2]))*T;U+=C;Z+=I;H+=K;N=N.next;if(ag<ac){G+=s}}J=Y;af=S;W=A;for(X=0;X<t;X++){ad=J<<2;z[ad]=(v*L)>>u;z[ad+1]=(w*L)>>u;z[ad+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(Y+(((ad=X+B)<ac?ad:ac)*s))<<2;v+=(U+=(af.r=z[ad]));w+=(Z+=(af.g=z[ad+1]));O+=(H+=(af.b=z[ad+2]));af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=s}}aj.putImageData(ae,R,P);return true}function f(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_rotate(i,h,a){var d=jQuery;var g=d(this);var e=d(".ws_list",a);var b={position:"absolute",left:0,top:0};var f=d("<div>").addClass("ws_effect ws_rotate").css(b).css({height:"100%",width:"100%",overflow:"hidden"}).appendTo(a);var c;this.go=function(j,k){var m=d(h[0]);m={width:m.width(),height:m.height(),marginTop:parseFloat(m.css("marginTop")),marginLeft:parseFloat(m.css("marginLeft")),maxHeight:"none",maxWidth:"none",};if(c){c.stop(true,true)}c=d(h.get(j)).clone().css(b).css(m).appendTo(f);if(!i.noCross){var l=d(h.get(k)).clone().css(b).css(m).appendTo(f);wowAnimate(l,{opacity:1,rotate:0,scale:1},{opacity:0,rotate:i.rotateOut||180,scale:i.scaleOut||10},i.duration,"easeInOutExpo",function(){l.remove()})}wowAnimate(c,{opacity:1,rotate:-(i.rotateIn||180),scale:i.scaleIn||10},{opacity:1,rotate:0,scale:1},i.duration,"easeInOutExpo",function(){c.remove();c=0;g.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(q,p,o,m,l,n){if(k.support.transform){if(p.top){p.translate=[0,p.top||0,0]}if(o.top){o.translate=[0,o.top||0,0]}delete p.top;delete o.top}wowAnimate(q,p,o,m,l,"swing",n)}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.each(function(I){g(b(this),{width:0,opacity:0},{width:D,opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"kenburns,blur,rotate,slices",prev:"",next:"",duration:20*100,delay:20*100,width:1280,height:550,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});