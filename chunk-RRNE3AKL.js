import{a as G}from"./chunk-NPQECQVO.js";import{c as L,d as B,e as D,f as A,g as R,i as H}from"./chunk-PXAUR32P.js";import{$ as u,$a as T,Aa as y,Eb as h,Fb as N,Gb as M,Hb as C,Ma as p,Oa as c,Qa as k,Ra as t,Sa as o,Ta as r,Ua as E,Va as f,Wa as g,_a as m,ab as I,bb as W,d as U,gb as v,hb as z,ia as P,ib as F,ja as b,pa as S,xa as w,za as d}from"./chunk-EVNGFNMQ.js";var V=[{routeLink:"/empleado",icon:"fa-solid fa-house-chimney",label:"Inicio"},{routeLink:"/empleado/Perfil",icon:"fas fa-id-card icon",label:"Mis datos"},{routeLink:"/empleado/Desprendibles",icon:"fa-solid fa-file-invoice-dollar",label:"Desprendibles"},{routeLink:"/empleado/Contrase\xF1a",icon:"fa-solid fa-lock",label:"Contrase\xF1a"}];var _=U(G());var Q=e=>[e],X=()=>({exact:!0});function Y(e,n){e&1&&(t(0,"div",14),m(1,"Empleado"),o())}function Z(e,n){if(e&1){let l=E();t(0,"button",15),f("click",function(){P(l);let a=g();return b(a.closeSidenav())}),r(1,"i",16),o()}}function ee(e,n){if(e&1&&(t(0,"p",17),m(1),o()),e&2){let l=g();d(),W(" ",l.nombre1," ",l.apellido1,"")}}function ne(e,n){if(e&1&&(t(0,"span",21),m(1),o()),e&2){let l=g().$implicit;d(),T(l.label)}}function te(e,n){if(e&1&&(t(0,"li",18)(1,"a",19),r(2,"i",20),p(3,ne,2,1,"span",13),o()()),e&2){let l=n.$implicit,i=g();d(),c("routerLink",F(5,Q,l.routeLink))("routerLinkActiveOptions",z(7,X)),d(),k(l.icon),d(),c("ngIf",i.collapsed)}}function ie(e,n){e&1&&(t(0,"span",21),m(1,"Cerrar Sesion"),o())}var j=(()=>{let n=class n{constructor(){this.nombre1="Usuario",this.apellido1="Admin",this.onToggleSideNav=new S,this.collapsed=!0,this.screenWidth=0,this.navData=V}onResize(i){this.screenWidth=window.innerWidth,this.screenWidth<=500&&(this.collapsed=!1,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth}))}ngOnInit(){this.screenWidth=window.innerWidth,this.screenWidth<=500?this.collapsed=!1:this.collapsed=!0}cerrarSesion(){_.default.fire({title:"\xBFEst\xE1s seguro?",text:"Cerrar\xE1s sesi\xF3n de tu cuenta.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xED, cerrar sesi\xF3n",cancelButtonText:"Cancelar"}).then(i=>{i.isConfirmed&&(_.default.fire({title:"Cerrando sesi\xF3n...",text:"Por favor espera.",allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{_.default.showLoading()}}),setTimeout(()=>{localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("recordar_contra_usuario"),_.default.fire({title:"\xA1Sesi\xF3n cerrada!",text:"Has cerrado sesi\xF3n con \xE9xito.",icon:"success"}).then(()=>{window.location.href="/login"})},1e3))})}toggleCollapse(){this.collapsed=!this.collapsed,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}closeSidenav(){this.collapsed=!1,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=u({type:n,selectors:[["app-sidebar"]],hostBindings:function(a,s){a&1&&f("resize",function(x){return s.onResize(x)},!1,w)},outputs:{onToggleSideNav:"onToggleSideNav"},standalone:!0,features:[v],decls:16,vars:6,consts:[[1,"sidenav",3,"ngClass"],[1,"logo-container"],[1,"logo",3,"click"],["src","../../../../assets/icono2.png",2,"width","35px","height","35px"],["class","logo-text",4,"ngIf"],["class","btn-close",3,"click",4,"ngIf"],["class","user-text",4,"ngIf"],[2,"background-color","white"],[1,"sidenav-nav"],["class","sidenav-nav-item",4,"ngFor","ngForOf"],[1,"sidenav-nav-item","logout-button"],[1,"sidenav-nav-link",3,"click"],[1,"sidenav-link-icon","fa-solid","fa-right-from-bracket"],["class","sidenav-link-text",4,"ngIf"],[1,"logo-text"],[1,"btn-close",3,"click"],[1,"fa-solid","fa-xmark","text-white"],[1,"user-text"],[1,"sidenav-nav-item"],["routerLinkActive","active",1,"sidenav-nav-link",3,"routerLink","routerLinkActiveOptions"],[1,"sidenav-link-icon"],[1,"sidenav-link-text"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return s.toggleCollapse()}),r(3,"img",3),o(),p(4,Y,2,0,"div",4)(5,Z,2,0,"button",5),o(),t(6,"div"),p(7,ee,2,2,"p",6),r(8,"hr",7),o(),t(9,"ul",8),p(10,te,4,8,"li",9),t(11,"li",10),r(12,"hr",7),t(13,"a",11),f("click",function(){return s.cerrarSesion()}),r(14,"i",12),p(15,ie,2,0,"span",13),o()()()()),a&2&&(c("ngClass",s.collapsed?"sidenav-collapsed":""),d(4),c("ngIf",s.collapsed),d(),c("ngIf",s.collapsed),d(2),c("ngIf",s.collapsed),d(3),c("ngForOf",s.navData),d(5),c("ngIf",s.collapsed))},dependencies:[H,A,R,C,h,N,M],styles:[".sidenav[_ngcontent-%COMP%]{background:#263238;transition:all .5s ease;position:fixed;z-index:1;top:0;width:5rem;height:100vh;box-shadow:.063rem 0 1.25rem #8690a3;display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.938rem .938rem 0;width:100%}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background:#fff;text-align:center;width:3rem;min-width:3rem;border-radius:.313rem;padding:.313rem;font-size:24px;font-weight:900;cursor:pointer;border:none}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:24px;font-weight:700;color:#fff}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;width:2rem;height:2rem;border-radius:50%;background-color:transparent;border:none}.sidenav-collapsed[_ngcontent-%COMP%]{width:16.5625rem}.sidenav-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;margin:0;display:flex;flex-direction:column;align-items:center;height:calc(100% - 3.65rem);cursor:pointer}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]{width:100%;margin-bottom:.625rem}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:2.5rem;color:#f3f3f3;text-decoration:none;border-radius:.625rem;transition:all .3s ease}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center}.user-text[_ngcontent-%COMP%]{margin-top:1.5rem;margin-left:1.5rem;color:#f3f3f3}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-text[_ngcontent-%COMP%]{margin-left:1.5rem}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]{background-color:#fff;color:#000}.active[_ngcontent-%COMP%]{background-color:#fff}.active[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]   .sidenav-link-text[_ngcontent-%COMP%]{color:#000}.logout-button[_ngcontent-%COMP%]{margin-top:auto}"]});let e=n;return e})();var K=(()=>{let n=class n{constructor(){this.collapsed=!1,this.screenWidth=0}getBodyClass(){let i="";return this.collapsed&&this.screenWidth>600?i="body-trimmed":this.collapsed&&this.screenWidth<=600&&this.screenWidth>0&&(i="body-md-screen"),i}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=u({type:n,selectors:[["app-body"]],inputs:{collapsed:"collapsed",screenWidth:"screenWidth"},standalone:!0,features:[v],decls:2,vars:1,consts:[[1,"body",3,"ngClass"]],template:function(a,s){a&1&&(t(0,"div",0),r(1,"router-outlet"),o()),a&2&&c("ngClass",s.getBodyClass())},dependencies:[C,h,B],styles:[".body[_ngcontent-%COMP%]{width:calc(100% - 5rem);height:100vh;margin-left:5rem;z-index:0;top:0;transition:all .5s ease;background:#f4f7fa;padding:3rem}.body-trimmed[_ngcontent-%COMP%]{width:calc(100% - 16.5625rem);margin-left:16.5625rem}.body-md-screen[_ngcontent-%COMP%]{width:calc(100% - 5rem);margin-left:5rem}"]});let e=n;return e})();function oe(e,n){if(e&1&&(t(0,"div",3)(1,"div",4)(2,"div",5)(3,"h1"),m(4),o(),t(5,"p"),m(6,"Este portal te permitir\xE1 gestionar tu informaci\xF3n personal, consultar desprendibles y revisar tus quincenas. A continuaci\xF3n, te presentamos una descripci\xF3n de cada secci\xF3n para que conozcas su funcionalidad (los botones se encuentran en el panel a la izquierda)."),o()(),t(7,"div",6)(8,"div",7),r(9,"i",8),t(10,"div",9)(11,"h2"),m(12,"Mis Datos"),o(),t(13,"p"),m(14,"Consulta y actualiza tu informaci\xF3n personal, como direcci\xF3n, n\xFAmero de contacto y detalles de identificaci\xF3n."),o()()(),r(15,"br"),t(16,"div",7),r(17,"i",10),t(18,"div",9)(19,"h2"),m(20,"Desprendibles"),o(),t(21,"p"),m(22,"Visualiza y descarga tus desprendibles de pago. Lleva un control personal de tus ingresos."),o()()(),r(23,"br"),t(24,"div",7),r(25,"i",11),t(26,"div",9)(27,"h2"),m(28,"Contrase\xF1a"),o(),t(29,"p"),m(30,"Actualiza la contrase\xF1a de tu portal empleado por una nueva."),o()()()()()()),e&2){let l=g();d(4),I("",l.saludo," al Portal del Empleado")}}function ae(e,n){if(e&1&&r(0,"app-body",12),e&2){let l=g();c("collapsed",l.isSideNavCollapsed)("screenWidth",l.screenWidth)}}var xe=(()=>{let n=class n{constructor(i){this.router=i,this.isSideNavCollapsed=!1,this.screenWidth=0,this.saludo="Bienvenido(a)",this.showContent=!0}ngOnInit(){let i=localStorage.getItem("sexo");this.showContent=this.router.url==="/empleado",i==="M"?this.saludo="Bienvenido":i==="F"&&(this.saludo="Bienvenida"),this.router.events.subscribe(a=>{a instanceof L&&(this.showContent=this.router.url==="/empleado")})}onToggleSideNav(i){this.screenWidth=i.screenWidth,this.isSideNavCollapsed=i.collapsed}};n.\u0275fac=function(a){return new(a||n)(y(D))},n.\u0275cmp=u({type:n,selectors:[["app-cambiar-contra"]],standalone:!0,features:[v],decls:3,vars:2,consts:[["class","content",4,"ngIf"],[3,"onToggleSideNav"],[3,"collapsed","screenWidth",4,"ngIf"],[1,"content"],[1,"bienvenida"],[1,"header"],[1,"sections-list"],[1,"section"],[1,"fas","fa-id-card","icon"],[1,"section-content"],[1,"fa-solid","fa-file-invoice-dollar","icon"],[1,"fa-solid","fa-lock","icon"],[3,"collapsed","screenWidth"]],template:function(a,s){a&1&&(p(0,oe,31,1,"div",0),t(1,"app-sidebar",1),f("onToggleSideNav",function(x){return s.onToggleSideNav(x)}),o(),p(2,ae,1,2,"app-body",2)),a&2&&(c("ngIf",s.showContent),d(2),c("ngIf",!s.showContent))},dependencies:[K,j,C,M],styles:[".content[_ngcontent-%COMP%]{margin-left:250px;padding:20px}@media (max-width: 500px){.content[_ngcontent-%COMP%]{margin-left:5rem;padding:20px;width:calc(100% - 5rem)}.bienvenida[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6%}.bienvenida[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1.5rem}.sections-list[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2rem}.sections-list[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}}.bienvenida[_ngcontent-%COMP%]{text-align:center;padding:20px}.bienvenida[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;padding:20px;border-radius:8px;margin-bottom:20px;box-shadow:0 2px 4px #0000001a}.bienvenida[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem;margin-bottom:10px}.bienvenida[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{display:flex;align-items:flex-start;background-color:#fff;padding:15px;border-radius:8px;margin:10px 0;width:100%;max-width:900px;box-shadow:0 2px 4px #0000001a}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem;color:#263238;margin-right:15px}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{text-align:left}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:5px}.bienvenida[_ngcontent-%COMP%]   .sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin:0}@media (max-width: 768px){.sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-bottom:10px;margin-right:0}.sections-list[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{text-align:center}}"]});let e=n;return e})();export{xe as default};
