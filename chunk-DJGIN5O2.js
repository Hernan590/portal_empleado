import{a as z}from"./chunk-NPQECQVO.js";import{e as x}from"./chunk-PXAUR32P.js";import{a as O,b as k,c as E,d as I,f as L}from"./chunk-PRTS4XFT.js";import{$ as w,Aa as v,Eb as y,Hb as P,Oa as h,Ra as o,Sa as n,Ta as d,Va as u,_a as l,cb as p,d as W,db as g,eb as f,gb as M,jb as S,va as b,xa as C,za as s}from"./chunk-EVNGFNMQ.js";var _=W(z());var F=(c,a)=>({"fa-eye":c,"fa-eye-slash":a}),N=(()=>{let a=class a{constructor(t){this.router=t,this.username="",this.password="",this.verContra=!1,this.imageSrc="assets/web5.png",this.recordar_contra_usuario=!1,this.updateImageSrc(window.innerWidth)}onResize(t){this.updateImageSrc(t.target.innerWidth)}updateImageSrc(t){t<=991?this.imageSrc="assets/mobil2.png":this.imageSrc="assets/web5.png"}ngOnInit(){if(typeof window<"u"){let t=localStorage.getItem("recordar_contra_usuario")==="true",i=localStorage.getItem("username"),e=localStorage.getItem("password");t?(this.username=i||"",this.password=e||"",this.recordar_contra_usuario=!0):(this.username="",this.password="",this.recordar_contra_usuario=!1)}}onLogin(){let t={username:this.username,password:this.password};if(this.recordar_contra_usuario?(localStorage.setItem("username",this.username),localStorage.setItem("password",this.password),localStorage.setItem("recordar_contra_usuario","true")):(localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("recordar_contra_usuario")),!t.username){_.default.fire("Error!","Por favor digite el usuario.","error");return}if(!t.password){_.default.fire("Error!","Por favor digite la contrase\xF1a.","error");return}let i={username:"admin",password:"12345"};if(t.username===i.username&&t.password===i.password){let e={username:i.username};localStorage.setItem("userData",JSON.stringify(e)),this.router.navigate(["/empleado"])}else _.default.fire({title:"Error!",text:"Usuario o contrase\xF1a incorrectos.",icon:"error"})}verPassword(){this.verContra=!this.verContra;let t=document.getElementById("password");this.verContra?t.type="text":t.type="password"}};a.\u0275fac=function(i){return new(i||a)(v(x))},a.\u0275cmp=w({type:a,selectors:[["app-login"]],hostBindings:function(i,e){i&1&&u("resize",function(r){return e.onResize(r)},!1,C)},standalone:!0,features:[M],decls:41,vars:8,consts:[[1,"Form","my-5","mx-2"],[1,"container-fluid"],[1,"row","no-gutters"],["id","imagen",1,"col-lg-5"],["alt","",1,"mx-auto","d-block",3,"src"],[1,"col-lg-7","px-5","pt-5"],["id","title",1,"font-weight-bold","py-1","text-center"],[1,"form-row"],["id","campo1",1,"col-lg-10"],["for","user"],[1,"input-group","input-group-sm","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa-solid","fa-user"],["id","userid","type","text","placeholder","Escriba 'admin' Para iniciar sesion",1,"form-control","p-4",3,"ngModelChange","ngModel"],["id","campo2",1,"col-lg-10"],["for","password"],[1,"fa-solid","fa-key"],["id","password","type","password","placeholder","Escriba '12345' Para iniciar sesion",1,"form-control","p-4",3,"ngModelChange","ngModel"],[1,"input-group-append"],[1,"input-group-text","cursor",3,"click"],[1,"fas",3,"ngClass"],["id","recordar",1,"form-row"],[1,"col-lg-10"],["type","checkbox","id","recordar_contra_usuario",1,"form-check-input",2,"margin-top","5px",3,"ngModelChange","ngModel"],["for","recordar_contra_usuario",1,"form-check-label",2,"margin-left","20px"],["id","boton1",1,"col-lg-10"],["id","btnLogin","type","button",1,"mt-3","mb-5",3,"click"]],template:function(i,e){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),d(4,"img",4),n(),o(5,"div",5)(6,"h1",6),l(7,"Iniciar Sesion"),n(),o(8,"div",7)(9,"div",8)(10,"label",9)(11,"b"),l(12,"Usuario"),n()(),o(13,"div",10)(14,"div",11)(15,"span",12),d(16,"i",13),n()(),o(17,"input",14),f("ngModelChange",function(r){return g(e.username,r)||(e.username=r),r}),n()()()(),d(18,"br"),o(19,"div",7)(20,"div",15)(21,"label",16)(22,"b"),l(23,"Contrase\xF1a"),n()(),o(24,"div",10)(25,"div",11)(26,"span",12),d(27,"i",17),n()(),o(28,"input",18),f("ngModelChange",function(r){return g(e.password,r)||(e.password=r),r}),n(),o(29,"div",19)(30,"span",20),u("click",function(){return e.verPassword()}),d(31,"i",21),n()()()()(),o(32,"div",22)(33,"div",23)(34,"input",24),f("ngModelChange",function(r){return g(e.recordar_contra_usuario,r)||(e.recordar_contra_usuario=r),r}),n(),o(35,"label",25),l(36,"Recordar usuario y contrase\xF1a"),n()()(),o(37,"div",7)(38,"div",26)(39,"button",27),u("click",function(){return e.onLogin()}),l(40,"Ingresar "),n()()()()()()()),i&2&&(s(4),h("src",e.imageSrc,b),s(13),p("ngModel",e.username),s(11),p("ngModel",e.password),s(3),h("ngClass",S(5,F,!e.verContra,e.verContra)),s(3),p("ngModel",e.recordar_contra_usuario))},dependencies:[P,y,L,k,O,E,I],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}.row[_ngcontent-%COMP%]{background:#fff;border-radius:30px}img[_ngcontent-%COMP%]{border-top-left-radius:30px;border-bottom-left-radius:30px}@media (min-width:992px){#title[_ngcontent-%COMP%]{font-size:32px;margin-right:15%}}@media (max-width: 540px){#title[_ngcontent-%COMP%]{font-size:22px;margin-left:15px}}#btnLogin[_ngcontent-%COMP%]{border:none;outline:none;height:50px;width:100%;background-color:#007bff;color:#fff;border-radius:4px;font-weight:700}#btnLogin[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid;color:#007bff}#bntRetirados[_ngcontent-%COMP%]{border:none;outline:none;height:50px;width:100%;background-color:#b71c1c;color:#fff;border-radius:4px;font-weight:700}#bntRetirados[_ngcontent-%COMP%]:hover{background:#fff;border:1px solid;color:#b71c1c}.cursor[_ngcontent-%COMP%]{cursor:pointer}@media (min-width: 991px) and (max-width: 1200px){#campo1[_ngcontent-%COMP%], #campo2[_ngcontent-%COMP%], #campo3[_ngcontent-%COMP%], #boton1[_ngcontent-%COMP%], #boton2[_ngcontent-%COMP%], #title[_ngcontent-%COMP%], #recordar[_ngcontent-%COMP%], #cambiarContra[_ngcontent-%COMP%]{margin-left:20%}}"]});let c=a;return c})();export{N as default};