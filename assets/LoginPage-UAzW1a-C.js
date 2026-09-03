import{Q as w,a as B}from"./QCard-QWDpt0ll.js";import{Q as x}from"./use-router-link-Cm4rBKs_.js";import{Q as C}from"./QInput-5X_8TCWd.js";import{Q as E}from"./QBtn-CMloDug9.js";import{Q as O}from"./QForm-moNXFF-W.js";import{_ as A}from"./SGPI_LOGO-xPWlwdUp.js";import{_ as Q,u as q,g as P,o as T,f as L,d as t,w as l,e as c,h,S as n,i as U,j as R}from"./index-_8SBVuP7.js";import{api as _}from"./axios-DRAMrfeW.js";import{_ as j}from"./BotonEnviar-CS5ISDVA.js";import"./render-Cb7ebOKF.js";import"./focus-manager-BJWzFvJg.js";import"./dom-k4yGwTzD.js";const z={class:"login-container"},N={class:"text-center q-mt-none q-mb-sm"},W={class:"row justify-center q-gutter-sm q-mb-md"},D={class:"text-center q-mt-md"},M={__name:"LoginPage",setup(H){const p=q(),v=P(),a=R({email:"",password:""}),d=R(!0),I=async()=>{if(!a.value.email||!a.value.password){n.fire({icon:"error",title:"Campos vacíos",text:"Por favor completa todos los campos",confirmButtonColor:"#f26b1d"});return}n.fire({title:"Iniciando sesión...",text:"Por favor espera",allowOutsideClick:!1,allowEscapeKey:!1,didOpen:()=>{n.showLoading()}});try{const o=(await _.post("/auth/login",{email:a.value.email,password:a.value.password})).data;localStorage.setItem("token",o);const i=(await _.get("/auth/profile")).data;i.roles=(i.userRoles??[]).map(s=>({rol:s.userRol?.rol??s})),v.setUsuario(i);const S=i.roles.map(s=>typeof s=="string"?s:s.rol),f=["ADMIN","COORDINATOR","REVIEWER_CC","REVIEWER_CE","REVIEWER","TEACHER","GUEST"].filter(s=>S.includes(s));let g=f[0];if(f.length>1){const s={ADMIN:{label:"Administrador",icon:"mdi-shield-crown",color:"#6a1b9a"},COORDINATOR:{label:"Coordinador",icon:"mdi-account-tie",color:"#1565c0"},TEACHER:{label:"Investigador",icon:"mdi-flask",color:"#00695c"},REVIEWER_CC:{label:"Comité Científico",icon:"mdi-microscope",color:"#1565c0"},REVIEWER_CE:{label:"Comité de Ética",icon:"mdi-scale-balance",color:"#00838f"},REVIEWER:{label:"Comité de Ética",icon:"mdi-scale-balance",color:"#00838f"},GUEST:{label:"Invitado",icon:"mdi-account-outline",color:"#757575"}},V=f.map((r,m)=>{const b=s[r]||{label:r,icon:"mdi-account",color:"#757575"};return`
          <label class="rol-card ${m===0?"rol-seleccionado":""}" for="rol-${r}">
            <input type="radio" id="rol-${r}" name="rol-select" value="${r}" ${m===0?"checked":""} style="display:none">
            <i class="mdi ${b.icon}" style="font-size:2.2rem;color:${b.color}"></i>
            <span class="rol-nombre">${b.label}</span>
          </label>
        `}).join(""),{value:y,isDismissed:$}=await n.fire({title:`¡Bienvenido, ${i.name}!`,html:`
          <p style="color:#757575;margin:0 0 20px;font-size:0.95rem">
            Tienes varios roles disponibles.<br>¿Con cuál deseas ingresar?
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;padding:4px 8px 8px">
            ${V}
          </div>
          <style>
            .rol-card {
              display:flex; flex-direction:column; align-items:center; gap:8px;
              padding:18px 16px; border:2px solid #e0e0e0; border-radius:14px;
              cursor:pointer; min-width:110px; flex:1; max-width:140px;
              transition:all 0.2s ease; background:#fafafa; user-select:none;
            }
            .rol-card:hover {
              border-color:#1565c0; background:#e8f0fe;
              transform:translateY(-3px); box-shadow:0 4px 12px rgba(21,101,192,0.15);
            }
            .rol-seleccionado {
              border-color:#1565c0 !important; background:#e3f2fd !important;
              box-shadow:0 4px 16px rgba(21,101,192,0.25) !important;
              transform:translateY(-3px);
            }
            .rol-nombre {
              font-size:0.78rem; font-weight:700; color:#333;
              text-align:center; line-height:1.2;
            }
          </style>
        `,confirmButtonText:"Ingresar →",confirmButtonColor:"#f26b1d",allowOutsideClick:!1,showCancelButton:!1,customClass:{confirmButton:"swal-btn-ingresar"},didOpen:()=>{document.querySelectorAll(".rol-card").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".rol-card").forEach(m=>m.classList.remove("rol-seleccionado")),r.classList.add("rol-seleccionado"),r.querySelector('input[type="radio"]').checked=!0})})},preConfirm:()=>{const r=document.querySelector('input[name="rol-select"]:checked');return r?r.value:(n.showValidationMessage("Por favor selecciona un rol para continuar"),!1)}});!$&&y&&(g=y)}else await n.fire({icon:"success",title:`¡Bienvenido ${i.name}! 👋`,text:"Inicio de sesión exitoso",showConfirmButton:!1,timer:2e3});v.setActiveRole(g),p.push(U(g))}catch(u){console.error(u);let o="Ocurrió un error inesperado";const e=u.response?.data;e&&(Array.isArray(e.message)?o=e.message.join(", "):typeof e.message=="string"&&(o=e.message)),o==="Unauthorized"&&(o="Correo o contraseña incorrectos"),await n.fire({icon:"error",title:"Error",text:o,confirmButtonColor:"#f26b1d"})}},k=()=>{a.value.email="",a.value.password=""};return(u,o)=>(T(),L("div",z,[t(B,{class:"login-card"},{default:l(()=>[t(w,{class:"text-secondary text-center"},{default:l(()=>[...o[5]||(o[5]=[c("img",{src:A,class:"logo-responsive"},null,-1),c("div",{class:"text-h5 text-center text-secondary text-weight-bold"},"Iniciar Sesión",-1)])]),_:1}),t(w,null,{default:l(()=>[t(O,{onSubmit:I,onReset:k,class:"q-gutter-lg form-login"},{default:l(()=>[t(C,{rounded:"",outlined:"",color:"secondary","bg-color":"white",modelValue:a.value.email,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value.email=e),label:"Correo electrónico",type:"text","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor ingresa tu correo",e=>e&&e.includes("@")||"Ingresa un correo válido"]},{prepend:l(()=>[t(x,{color:"accent",name:"email"})]),_:1},8,["modelValue","rules"]),t(C,{rounded:"",outlined:"","bg-color":"white",color:"secondary",modelValue:a.value.password,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value.password=e),type:d.value?"password":"text",label:"Contraseña","lazy-rules":"",rules:[e=>e&&e.length>0||"Por favor ingresa tu contraseña",e=>e&&e.length>=5||"Mínimo 5 caracteres"]},{prepend:l(()=>[t(x,{color:"accent",name:"lock"})]),append:l(()=>[t(x,{color:"accent",name:d.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=e=>d.value=!d.value)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),c("div",N,[c("span",{class:"forgot-password-link",onClick:o[3]||(o[3]=e=>h(p).push("/olvido-contrasena"))}," ¿Olvidaste tu contraseña? ")]),c("div",W,[t(j,{label:"Ingresar"}),t(E,{outline:"",rounded:"",label:"Limpiar",type:"reset",color:"secondary",icon:"clear"})]),c("div",D,[t(E,{rounded:"",label:"Registrarme",onClick:o[4]||(o[4]=e=>h(p).push("/crear-usuario")),color:"secondary",icon:"mdi-account-plus-outline"})])]),_:1})]),_:1})]),_:1})]))}},le=Q(M,[["__scopeId","data-v-1870e640"]]);export{le as default};
