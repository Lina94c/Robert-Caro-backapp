(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a(33),r=a.n(s),i=(a(43),a(10)),o=a(7),l=a(3),u=a(4),d=a(6),h=a(5),j=(a(44),Object(n.createContext)()),m=a(2),b=a.p+"static/media/logo_principal.c2e71c26.png",p=a.p+"static/media/login.04e89ed3.png",x=a(21),O=a.n(x);O.a.defaults.withCredentials=!0;var v=O.a.create({baseURL:"https://robert-caro-back.herokuapp.com/api",timeout:1e4}),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={exp:"",prodcuts:{}},e}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.user,n=t.logout;return Object(c.jsx)("header",{children:Object(c.jsxs)("nav",{className:"uk-navbar-container","uk-navbar":"true",children:[Object(c.jsx)("div",{className:"uk-navbar-left",children:Object(c.jsxs)("ul",{className:"uk-navbar-nav",children:[Object(c.jsx)("li",{className:"uk-active",children:Object(c.jsx)(m.b,{to:"/",children:Object(c.jsx)("img",{src:b,width:"50",height:"50",className:"uk-img"})})}),Object(c.jsx)("li",{className:"uk-active",children:Object(c.jsx)(m.b,{to:"/About",children:"Sobre nosotros"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/allproducts",children:"Productos"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/allstores",children:"Tiendas"})})]})}),Object(c.jsx)("div",(e={className:"uk-navbar-item"},Object(i.a)(e,"className","uk-navbar-center"),Object(i.a)(e,"children",Object(c.jsx)("form",{className:"uk-search uk-search-default",children:Object(c.jsx)("span",{className:"uk-flex","uk-icon":"icon: search",children:Object(c.jsx)("input",{className:"uk-search-input",type:"search",placeholder:"Buscar producto"})})})),e)),Object(c.jsx)("div",{className:"uk-navbar-right",children:Object(c.jsx)("ul",{className:"uk-navbar-nav",children:a._id?Object(c.jsxs)("li",{children:[Object(c.jsx)(m.b,{to:"/profile",children:Object(c.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:a.name,src:p})}),Object(c.jsx)("div",{className:"uk-width-expand",children:Object(c.jsx)("div",{className:"uk-margin-remove-bottom",children:a.name})})]})}),Object(c.jsx)("div",{className:"uk-navbar-dropdown",children:Object(c.jsx)("ul",{className:"uk-nav uk-navbar-dropdown-nav",children:Object(c.jsx)("li",{onClick:n,children:"Logout"})})})]}):Object(c.jsx)("li",{children:Object(c.jsxs)(m.b,{to:"/login",children:[Object(c.jsx)("span",{"uk-icon":"icon: sign-in"}),"Login"]})})})})]})})}}]),a}(n.Component),g=a(8),f=function(e){return v.post("/user/login",e)},N=function(e){return v.post("/user/signup",e)},y=function(){return v.post("/user/logout")},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e.handleChange=function(t){var a=t.target,c=a.value,n=a.name,s=e.state.data;s[n]=c,e.setState({data:s})},e.onSubmit=function(t){t.preventDefault(),console.log("Voy a enviar datos"),f(e.state.data).then((function(t){e.setState({data:{}}),localStorage.setItem("user",JSON.stringify(t.data.user)),e.context.setUser(t.data.user),e.props.history.push("/")})).catch((function(e){console.log("hay un error",e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.onSubmit,a=this.state.data;return Object(c.jsx)("section",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(c.jsxs)("div",{className:"uk-width-1-4",children:[Object(c.jsx)("h3",{children:"Inicia sesi\xf3n"}),Object(c.jsxs)("form",{onSubmit:t,className:"uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column",children:[Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(c.jsx)("input",{className:"uk-input",type:"email",name:"email",onChange:e,required:!0,value:a.email?a.email:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: lock"}),Object(c.jsx)("input",{className:"uk-input",type:"password",required:!0,name:"password",onChange:e,value:a.password?a.password:""})]})}),Object(c.jsxs)("div",{className:"uk-text-meta",children:["\xbfA\xfan no tienes cuenta?"," ",Object(c.jsx)(m.b,{className:"uk-text-primary",to:"/signup",children:"Registrate"})]}),Object(c.jsx)("div",{className:"uk-margin-small",children:Object(c.jsx)("button",{className:"uk-button uk-button-danger",children:"Entrar"})})]})]})})})}}]),a}(n.Component);C.contextType=j;var w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e.handleChange=function(t){var a=t.target,c=a.value,n=a.name,s=e.state.data;s[n]=c,e.setState({data:s})},e.onSubmit=function(t){t.preventDefault(),console.log("Voy a enviar datos");var a=e.props.history;N(e.state.data).then((function(t){e.setState({data:{}}),console.log("Registro exitoso",t),a.push("/login")})).catch((function(e){console.log("hay un error",e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.onSubmit,a=this.state.data;return Object(c.jsx)("section",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(c.jsxs)("div",{className:"uk-width-1-4",children:[Object(c.jsx)("h3",{children:"Registrate "}),Object(c.jsxs)("form",{onSubmit:t,className:"uk-card uk-card-default uk-card-body",children:[Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(c.jsx)("input",{className:"uk-input",type:"text",name:"name",placeholder:"Nombre",onChange:e,required:!0,value:a.name?a.name:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(c.jsx)("input",{className:"uk-input",type:"text",name:"lastname",placeholder:"Apellido",onChange:e,required:!0,value:a.lastname?a.lastname:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: receiver"}),Object(c.jsx)("input",{className:"uk-input",type:"number",name:"phone",placeholder:"Celular",onChange:e,required:!0,value:a.phone?a.phone:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: mail"}),Object(c.jsx)("input",{className:"uk-input",type:"email",name:"email",placeholder:"e-mail",onChange:e,required:!0,value:a.email?a.email:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: unlock"}),Object(c.jsx)("input",{className:"uk-input",type:"password",required:!0,name:"password",placeholder:"Contrase\xf1a",onChange:e,value:a.password?a.password:""})]})}),Object(c.jsx)("div",{className:"uk-margin",children:Object(c.jsxs)("div",{className:"uk-inline",children:[Object(c.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),Object(c.jsx)("input",{className:"uk-input",type:"password",name:"confirmPassword",placeholder:"Confirmar contrase\xf1a",onChange:e,required:!0,value:a.confirmPassword?a.confirmPassword:""})]})}),Object(c.jsxs)("div",{className:"uk-text-meta",children:["\xbfYa tienes cuenta?"," ",Object(c.jsx)(m.b,{className:"uk-text-primary",to:"/login",children:"Ingresa"})]}),Object(c.jsx)("button",{type:"submit",className:"uk-button uk-button-primary",children:"Registrate"})]})]})})})}}]),a}(n.Component),S=a.p+"static/media/hogar.4b512276.jpg",_=a.p+"static/media/mascotas.d8c6892b.jpg",P=a.p+"static/media/deporte.9fd24f8d.jpg",A=function(){return Object(c.jsxs)("div",{className:"uk-position-relative uk-visible-toggle uk-light",tabIndex:"-1","uk-slider":"center: true",children:[Object(c.jsxs)("ul",{className:"uk-slider-items uk-grid",children:[Object(c.jsx)("li",{className:"uk-width-3-4",children:Object(c.jsx)("div",{className:"uk-panel",children:Object(c.jsxs)(m.b,{to:"/allproducts",children:[Object(c.jsx)("img",{src:_,alt:""}),Object(c.jsx)("div",{className:"uk-position-center uk-panel",children:Object(c.jsx)("h1",{children:"Mascotas"})})]})})}),Object(c.jsx)("li",{className:"uk-width-3-4",children:Object(c.jsx)("div",{className:"uk-panel",children:Object(c.jsxs)(m.b,{to:"/allproducts",children:[Object(c.jsx)("img",{src:S,alt:""}),Object(c.jsx)("div",{className:"uk-position-center uk-panel",children:Object(c.jsx)("h1",{children:"Hogar"})})]})})}),Object(c.jsx)("li",{className:"uk-width-3-4",children:Object(c.jsx)("div",{className:"uk-panel",children:Object(c.jsxs)(m.b,{to:"/allproducts",children:[Object(c.jsx)("img",{src:P,alt:""}),Object(c.jsx)("div",{className:"uk-position-center uk-panel",children:Object(c.jsx)("h1",{children:"Deporte"})})]})})})]}),Object(c.jsx)("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"true","uk-slider-item":"previous"}),Object(c.jsx)("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"true","uk-slider-item":"next"})]})},I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(c.jsx)("section",{children:Object(c.jsx)("div",{children:Object(c.jsx)(A,{})})})}}]),a}(n.Component),T=a(37),D=function(e){var t=e.name,a=e.type,n=e.nombre,s=e.handleChange,r=e.placeholder,i=e.value,l=Object(T.a)(e,["name","type","nombre","handleChange","placeholder","value"]);return Object(c.jsxs)("div",{className:"uk-margin",children:[Object(c.jsxs)("label",{className:"uk-form-label uk-text-capitalize",htmlFor:n,children:[n,":"]}),Object(c.jsx)("div",{className:"uk-form-controls",children:Object(c.jsx)("input",Object(o.a)({onChange:s,name:t,className:"uk-input",id:t,type:a,value:i,placeholder:r},l))})]})},E=function(e){var t=e.images;return Object(c.jsxs)("div",{className:"uk-position-relative uk-visible-toggle uk-light","uk-slideshow":"animation: fade;ratio: 2:2;max-height: 500",children:[Object(c.jsx)("ul",{className:"uk-slideshow-items",children:void 0!=t?t.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:e,alt:"","uk-cover":"true"})},t)})):null}),Object(c.jsx)("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"true","uk-slideshow-item":"previous"}),Object(c.jsx)("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"true","uk-slideshow-item":"next"}),Object(c.jsx)("div",{className:"uk-position-bottom-center uk-position-small",children:Object(c.jsx)("ul",{className:"uk-dotnav",children:void 0!=t?t.map((function(e,t){return Object(c.jsx)("li",{"uk-slideshow-item":t,children:Object(c.jsx)("a",{href:"#",children:"Item 1"})},t)})):null})})]})},U=a(15),M=a.n(U),q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"check",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";M.a.notification({message:"<span uk-icon='icon: ".concat(a,"'></span> ").concat(e),status:t,pos:c})},R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleAdd=function(t){t.preventDefault();var a=e.props,c=a._id,n=(a.images,a.title,a.description,a.price,a._owner),s=(a.userId,null===n||void 0===n||n._id,e.context.state.cart),r=e.context.handleSaveProduct;!function(e){return!!s.find((function(t){return t._id===e}))}?q("El producto ya est\xe0 en el carrito","error"):r(c).then((function(){q("El producto se agreg\xf3 al carrito","success")})).catch((function(e){q("Sucedi\xf3 un error, el producto no se pudo agregar al carrito","error"),console.log(e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e._id,a=e.images,n=e.title,s=e.description,r=e.price,i=e._owner,o=e.userId,l=e.index,u=e._store,d=e.onDelete,h=void 0===d?function(){}:d,j=o===(null===i||void 0===i?void 0:i._id);return console.log(this.props),Object(c.jsx)("div",{className:"uk-margin-small-bottom",children:Object(c.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(c.jsx)("div",{className:"uk-card-header uk-padding-small",children:Object(c.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:null===i||void 0===i?void 0:i.name,src:null===u||void 0===u?void 0:u.store_picture})}),Object(c.jsxs)("div",{className:"uk-width-expand",children:[Object(c.jsx)("p",{className:"uk-margin-remove-top"}),Object(c.jsx)("p",{className:"uk-title"})]}),Object(c.jsx)("div",{children:j?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.b,{"uk-icon":"pencil",to:"/product/".concat(t),children:"Editar"}),Object(c.jsx)(m.b,{"uk-icon":"trash",onClick:function(){return h(t,l)},children:"Eliminar"})]}):null})]})}),Object(c.jsx)("div",{className:"uk-card-media-top",children:Object(c.jsx)(E,{images:a})}),Object(c.jsxs)("div",{className:"uk-card-body uk-padding-small",children:[Object(c.jsx)("h3",{className:"uk-card-title uk-text-center",children:Object(c.jsx)("span",{className:"uk-text-lead",children:n})}),Object(c.jsxs)("div",{children:["Precio: ",r]}),Object(c.jsx)("p",{className:"uk-text-break",children:s}),Object(c.jsxs)("p",{className:"uk-text-break",children:["Vendedor:",null===i||void 0===i?void 0:i.name]}),Object(c.jsx)("div",{className:"uk-text-center",children:j?null:Object(c.jsxs)(m.b,{to:"/cart",className:"uk-button uk-button-primary",children:[Object(c.jsx)("span",{children:Object(c.jsx)("span",{onClick:this.handleAdd,className:"btn btn-outline-primary btn-sm"})}),"Agregar"]})})]})]})})}}]),a}(n.Component);R.contextType=j;var F=R,L=a(18),z=a.n(L),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleAdd=function(t){t.preventDefault();var a=e.props._id,c=e.context.state.cart,n=e.context.handleSaveProduct;!function(e){return!!c.find((function(t){return t._id===e}))}?q("El producto ya est\xe0 en el carrito","error"):n(a).then((function(){q("El producto se agreg\xf3 al carrito","success")})).catch((function(e){q("Sucedi\xf3 un error, el producto no se pudo agregar al carrito","error"),console.log(e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.cart),Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:this.handleAdd})})}}]),a}(n.Component);B.contextType=j;var J=function(e){var t=e.name,a=e.handleChange,n=e.hint,s=e.value;return Object(c.jsxs)("div",{className:"uk-margin",children:[Object(c.jsxs)("label",{className:"uk-form-label uk-text-capitalize",htmlFor:t,children:[t," ",n&&"(".concat(n,")"),":"]}),Object(c.jsx)("div",{className:"uk-form-controls",children:Object(c.jsx)("textarea",{onChange:a,className:"uk-textarea",name:t,id:t,cols:"30",rows:"5",value:s})})]})},V=function(e){e._id;var t=e.store_name,a=e.store_picture,n=e.description,s=e._owner;return Object(c.jsx)("div",{className:"uk-margin-small-bottom",children:Object(c.jsx)(m.b,{to:"/store/products/".concat(s),children:Object(c.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(c.jsx)("div",{className:"uk-card-header uk-padding-small",children:Object(c.jsx)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:Object(c.jsx)("div",{className:"uk-width-expand",children:Object(c.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:t})})})}),Object(c.jsx)("div",{className:"uk-card-media-top"}),Object(c.jsxs)("div",{className:"uk-card-body uk-padding-small",children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{src:a})}),Object(c.jsx)("div",{}),Object(c.jsx)("p",{className:"uk-text-break",children:n})]})]})})})},W=function(e){e._id;var t=e.store_name,a=e.store_picture,n=e.description,s=e._owner;return Object(c.jsx)("div",{className:"uk-margin-small-bottom",owner:s._id,children:Object(c.jsx)(m.b,{to:"/store/products/".concat(s._id),owner:s._id,children:Object(c.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(c.jsx)("div",{className:"uk-card-header uk-padding-small",children:Object(c.jsx)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:Object(c.jsx)("div",{className:"uk-width-expand",children:Object(c.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:t})})})}),Object(c.jsx)("div",{className:"uk-card-media-top"}),Object(c.jsxs)("div",{className:"uk-card-body uk-padding-small",children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{src:a})}),Object(c.jsx)("div",{}),Object(c.jsx)("p",{className:"uk-text-break",children:n})]})]})})})},H=function(e){return v.get("/product?_owner=".concat(e))},Y=function(e){return v.post("/product",e.product)},G=function(e){return v.patch("/product/".concat(e.id),e.product)},K=function(e){return v.delete("/product/".concat(e))},Q=function(e){var t,a=e.handleSubmit,n=e.handleChange,s=e.handleImagesChange,r=e.product,i=r.description&&r.description.length||0;return Object(c.jsxs)("div",{children:[console.log(r._id),Object(c.jsxs)("form",{className:"uk-width-1-1",onSubmit:a,children:[Object(c.jsx)(D,{name:"title",type:"text",nombre:"T\xedtulo del Producto",value:r.title,placeholder:"Nombre de producto",handleChange:n}),Object(c.jsx)(D,{name:"price",type:"number",nombre:"Precio",value:r.price,placeholder:"Precio",handleChange:n}),Object(c.jsx)(J,{name:"description",type:"text",nombre:"Descripci\xf3n",value:r.description,hint:"".concat(i,"/50"),handleChange:n}),Object(c.jsx)(J,{name:"images",value:null===(t=r.images)||void 0===t?void 0:t.join(","),nombre:"Im\xe1genes",handleChange:s,hint:"Separar im\xe1genes por comas"}),Object(c.jsx)(D,{name:"inventory",type:"number",nombre:"Inventario",value:r.inventory,placeholder:"Inventario",handleChange:n}),void 0!==r._id?Object(c.jsx)("button",{onClick:a,type:"submit",className:"uk-button uk-button-primary",children:"Confirmar Cambios"}):Object(c.jsx)("button",{onClick:a,type:"submit",className:"uk-button uk-button-primary",children:"Crear producto"})]})]})},X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={product:{},user:{}},e.handleChange=function(t){var a=e.state.product;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value)),e.setState({product:a})},e.handleImageChange=function(t){var a=e.state.product;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value.split(","))),e.setState({product:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.product,c=e.context.addProduct,n=e.props.history,s=e.props.match.params.id;(s?G:Y)(s?{product:a,id:s}:{product:a}).then((function(e){var t=e.data.result;c(t),n.push("/store/profile")})).catch((function(e){q("Revisa los campos y asegurate de tener una tienda creada","error"),console.log("error",e.response)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context.state,a=this.props.history;if(!Object.keys(t.user).length)return a.push("/login"),!1;var c=this.props.match.params.id;c&&function(e){return v.get("/product/id/".concat(e))}(c).then((function(t){console.log(c);var a=t.data.result;e.setState({product:a})})),console.log(this.state.product)}},{key:"render",value:function(){var e=this.state.product;return console.log(e),Object(c.jsx)("section",{className:"uk-section",children:Object(c.jsxs)("div",{className:"uk-container",children:[void 0!==e._id?Object(c.jsx)("h3",{children:"Editar producto"}):Object(c.jsx)("h3",{children:"Crear producto"}),Object(c.jsxs)("div",{className:"uk-grid uk-child-width-1-2",children:[Object(c.jsx)(Q,{product:e,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleImagesChange:this.handleImageChange}),Object(c.jsx)("div",{children:Object(c.jsx)(F,Object(o.a)({},e))})]})]})})}}]),a}(n.Component);X.contextType=j;var Z=function(e){return v.delete("/cart/".concat(e))},$=function(e){return e.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t._id,t))}),{})},ee=function(e){return Object.values(e)},te=function(e,t){return delete e[t],e},ae=a(35),ce=a.n(ae),ne=function(e){return v.post("/store",e.store)},se=function(e){return v.patch("/store/".concat(e.id),e.store)};z.a.extend(ce.a);var re=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={store:{}},e.removeProduct=function(t){var a=e.context.state,c=a.products,n=a.userProducts,s=e.context,r=s.setProducts,i=s.setUserProducts;K(t).then((function(e){var t=e.data.result,a=te(c,t._id),s=te(n,t._id);r(a),i(s),M.a.modal("#remove-".concat(t._id)).hide()}))},e.removeCart=function(t){var a=e.context.state.userCart,c=e.context.setUserCart;Z(t).then((function(e){var t=e.data.result,n=te(a,t._id);c(n),M.a.modal("#remove-".concat(t._id)).hide()}))},e}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.context.state.user._id;v.get("/store/user").then((function(t){var a=t.data.result;e.setState({store:a})})).catch((function(e){console.log("error",e.response)}));var a=this.props.history;if(null===t||void 0===t)return a.push("/login"),!1}},{key:"render",value:function(){var e=this.context.state,t=e.user,a=(e.userProducts,e.userCart),n=this.state.store;return console.log("user",a),console.log(n),Object(c.jsxs)("div",{className:"uk-card uk-card-default uk-width-1-4@m uk-align-center",children:[Object(c.jsx)("div",{className:"uk-card-header",children:Object(c.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":!0,children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{src:p,className:"uk-border-circle",width:"40",height:"40"})}),Object(c.jsxs)("div",{className:"uk-width-expand",children:[Object(c.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:" Mi perfil "}),Object(c.jsxs)("p",{className:"uk-text-meta uk-margin-remove-top",children:[t.name," ",t.lastname," "]})]})]})}),Object(c.jsx)("div",{className:"uk-card-body",children:Object(c.jsxs)("p",{children:["Miembro desde el"," ",z()(t.createdAt).locale("es").format("LL"),Object(c.jsx)("br",{}),t.phone,Object(c.jsx)("br",{}),t.email]})}),Object(c.jsx)("div",{className:"uk-card-footer",children:0===n.length?Object(c.jsx)(m.b,{className:"uk-button uk-button-text",to:"/store/new",children:"Crear tienda"}):Object(c.jsx)(m.b,{className:"uk-button uk-button-text",to:"/store/profile",children:"Mi tienda"})})]})}}]),a}(n.Component);re.contextType=j;var ie=re,oe=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.store;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"uk-width-1-1",onSubmit:t,children:[Object(c.jsx)(D,{name:"store_name",type:"text",nombre:"Nombre de la Tienda",value:n.store_name,placeholder:"Nombre de la tienda",onChange:a}),Object(c.jsx)(J,{name:"store_picture",value:n.store_picture,nombre:"Imagen de la tienda",onChange:a,hint:"solo una imagen para la tienda"}),Object(c.jsx)(D,{name:"street",type:"text",nombre:"Calle",value:n.street,placeholder:"calle",onChange:a}),Object(c.jsx)(D,{name:"ext_number",type:"text",nombre:"N\xfamero exterior",value:n.ext_number,placeholder:"n\xfamero exterior",onChange:a}),Object(c.jsx)(D,{name:"int_number",type:"text",nombre:"N\xfamero interior",value:n.int_number,placeholder:"n\xfamero interior",onChange:a}),Object(c.jsx)(D,{name:"neighborhood",type:"text",nombre:"Colonia o asentamiento",value:n.neighborhood,placeholder:"colonia o asentamiento",onChange:a}),Object(c.jsx)(D,{name:"municipality",type:"text",nombre:"Municipio",value:n.municipality,placeholder:"municipio",onChange:a}),Object(c.jsx)(D,{name:"state",type:"text",nombre:"Estado",value:n.state,placeholder:"estado",onChange:a}),Object(c.jsx)(D,{name:"country",type:"text",nombre:"Pa\xecs",value:n.country,placeholder:"pa\xeds",onChange:a}),Object(c.jsx)(D,{name:"zipcode",type:"text",nombre:"Codigo Postal",value:n.zipcode,placeholder:"c\xf3digo postal",onChange:a}),Object(c.jsx)(D,{name:"clabe",type:"number",nombre:"Cuenta Clabe",value:n.clabe,placeholder:"cuenta clabe",onChange:a}),Object(c.jsx)(D,{name:"bank",type:"text",nombre:"banco",value:n.bank,placeholder:"banco",onChange:a}),Object(c.jsx)(D,{name:"account_holder_name",type:"text",nombre:"Nombre del titular de la cuenta",value:n.account_holder_name,placeholder:"Nombre del titular de la cuenta",onChange:a}),Object(c.jsx)(D,{name:"phone",type:"number",nombre:"Tel\xe9fono",value:n.phone,placeholder:"Tel\xe9fono",onChange:a}),Object(c.jsx)(D,{name:"mobile",type:"number",nombre:"Celular",value:n.mobile,placeholder:"celular",onChange:a}),Object(c.jsx)(D,{name:"email",type:"email",nombre:"Email",value:n.email,placeholder:"correo electr\xf3nico",onChange:a}),Object(c.jsx)("button",{type:"submit",className:"uk-button uk-button-primary",children:"Crear Tienda"})]})})},le=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={store:{},user:{}},e.handleChange=function(t){var a=e.state.store;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value)),e.setState({store:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.store,c=e.props.history,n=e.props.match.params.id,s=n?{store:a,id:n}:{store:a};(n?se:ne)(s).then((function(e){e.data.result;c.push("/")})).catch((function(e){console.log(e),console.log(s)}))},e}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.context.state,a=this.props.history;if(!Object.keys(t.user).length)return a.push("/login"),!1;var c=this.props.match.params.id;c&&function(e){return v.get("/store/".concat(e))}(c).then((function(t){var a=t.data.result;e.setState({store:a})}))}},{key:"render",value:function(){var e=this.state.store;return Object(c.jsx)("section",{className:"uk-section",children:Object(c.jsxs)("div",{className:"uk-container",children:[Object(c.jsx)("h3",{children:"Crear Tienda"}),Object(c.jsxs)("div",{className:"uk-grid uk-child-width-1-2",children:[Object(c.jsx)(oe,{store:e,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleImagesChange:this.handleImageChange}),Object(c.jsx)("div",{children:Object(c.jsx)(V,Object(o.a)(Object(o.a)({},e),{},{isDemo:!0}))})]})]})})}}]),a}(n.Component);le.contextType=j;var ue=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={products:{}},e.onDeleteProduct=function(t,a){var c=e.context.state.products;K(t).then((function(a){console.log("done"),delete c[t],e.setState({products:c})})).catch((function(e){console.log("error")}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context.state.user,a=this.state.products,c=this.props.history;ee(a).length<1&&H("".concat(t._id)).then((function(t){var a=t.data.result,n=$(a);console.log(c),console.log(a),e.setState({products:n})}))}},{key:"render",value:function(){var e=this,t=this.context.state.user,a=this.state.products;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"uk-card uk-card-default uk-card-body uk-margin-small",children:[Object(c.jsxs)("h1",{children:[" ",Object(c.jsx)("span",{"uk-icon":"icon: home; ratio: 2"}),"Bienvenido a tu tienda"]}),Object(c.jsx)("p",{children:"Ahora podr\xe1s editar, crear o eliminar productos cuando gustes"}),Object(c.jsx)(m.b,{to:"/product/new",class:"uk-button uk-button-default",type:"button",children:"Crear producto"})]}),Object(c.jsx)("div",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container",children:Object(c.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:ee(a).map((function(a,n){return Object(c.jsx)(F,Object(o.a)(Object(o.a)({},a),{},{index:n,userId:t._id,onDelete:e.onDeleteProduct}),n)}))})})})]})}}]),a}(n.Component);ue.contextType=j;var de=ue,he=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.context.state.products,t=this.context.setProducts;ee(e).length<1&&v.get("/product/allproducts").then((function(e){var a=e.data.result,c=$(a);t(c),console.log(e)}))}},{key:"render",value:function(){var e=this.context.state.products;return console.log(e),Object(c.jsx)("div",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container",children:Object(c.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:ee(e).map((function(e,t){return Object(c.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{index:t}),t)}))})})})}}]),a}(n.Component);he.contextType=j;var je=he,me=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={stores:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.stores;ee(t).length<1&&v.get("/store").then((function(t){var a=t.data.result,c=$(a);e.setState({stores:c}),console.log(t)}))}},{key:"render",value:function(){var e=this.state.stores;return console.log(e),Object(c.jsx)("div",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container",children:Object(c.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:ee(e).map((function(e,t){return Object(c.jsx)(W,Object(o.a)(Object(o.a)({},e),{},{index:t}),t)}))})})})}}]),a}(n.Component);me.contextType=j;var be=me,pe=a.p+"static/media/robert.805fc861.jpg",xe=a.p+"static/media/caro.905c1fb5.jpg",Oe=a.p+"static/media/iron.0b5f1843.png",ve=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"uk-card uk-card-default uk-width-2-3@m uk-align-center",children:[Object(c.jsx)("div",{className:"uk-card-header",children:Object(c.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":!0,children:[Object(c.jsxs)("div",{className:"uk-width-auto uk align-left",children:[Object(c.jsx)("img",{src:pe,className:"uk-border-circle",width:"200",height:"200"}),Object(c.jsx)("span",{"uk-icon":"code"}),Object(c.jsx)("img",{src:xe,className:"uk-border-circle",width:"200",height:"200"})]}),Object(c.jsxs)("div",{className:"uk-width-expand",children:[Object(c.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:" Estudiantes Ironhack "}),Object(c.jsx)("img",{src:Oe,width:"50",height:"50"})]})]})}),Object(c.jsx)("div",{className:"uk-card-body",children:Object(c.jsxs)("p",{children:["Creamos este proyecto con la finalidad de poder",Object(c.jsx)("br",{})," dar soluci\xf3n a peque\xf1as empresas a vender sus productos durante esta \xe9poca de pandemia."]})}),Object(c.jsx)("div",{className:"uk-card-footer"})]})}}]),a}(n.Component),ke=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={products:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.products;if(ee(t).length<1){var a=this.props.match.params.id;H(a).then((function(t){var a=t.data.result,c=$(a);e.setState({products:c})}))}}},{key:"render",value:function(){var e=this.state.products;return console.log(e),Object(c.jsx)("div",{className:"uk-section",children:Object(c.jsx)("div",{className:"uk-container",children:Object(c.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:ee(e).map((function(e,t){return Object(c.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{index:t}),t)}))})})})}}]),a}(n.Component);ke.contextType=j;var ge=ke,fe=function(){return Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{exact:!0,path:"/",component:I}),Object(c.jsx)(g.a,{exact:!0,path:"/About",component:ve}),Object(c.jsx)(g.a,{exact:!0,path:"/login",component:C}),Object(c.jsx)(g.a,{exact:!0,path:"/signup",component:w}),Object(c.jsx)(g.a,{exact:!0,path:"/product/new",component:X}),Object(c.jsx)(g.a,{exact:!0,path:"/product/:id",component:X}),Object(c.jsx)(g.a,{exact:!0,path:"/profile",component:ie}),Object(c.jsx)(g.a,{exact:!0,path:"/store/new",component:le}),Object(c.jsx)(g.a,{exact:!0,path:"/store/profile",component:de}),Object(c.jsx)(g.a,{exact:!0,path:"/product/delete",component:X}),Object(c.jsx)(g.a,{exact:!0,path:"/allproducts",component:je}),Object(c.jsx)(g.a,{exact:!0,path:"/allstores",component:be}),Object(c.jsx)(g.a,{exact:!0,path:"/store/products/:id",component:ge})]})},Ne=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={user:JSON.parse(localStorage.getItem("user"))||{},products:{},userproducts:{},cart:[],sum:0,total:0},e.logout=function(){var t=e.props.history;y().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),t.push("/login")}))},e.setUser=function(t){e.setState({user:t})},e.setProducts=function(t){e.setState({products:t})},e.setUserProducts=function(t){e.setState({userProducts:t})},e.setUserCart=function(t){e.setState({userCart:t})},e.addProduct=function(t){e.state.products;Object(o.a)(Object(i.a)({},t._id,t),t)},e}return Object(u.a)(a,[{key:"handlerClearCart",value:function(){this.setState({cart:[],sum:0,total:0})}},{key:"sumProducts",value:function(e){var t=0;e.forEach((function(e){return t+=e.order})),this.setState({total:t})}},{key:"sumTotal",value:function(e){var t=0;e.forEach((function(e){return t+=e.total})),this.setState({sum:t})}},{key:"handlerAddProduct",value:function(e,t){var a=Object.assign({},this.state);0!==a.products[t].status?(a.cart[e].total+=a.cart[e].price,a.cart[e].order+=1,a.products[t].status-=1,this.setState(a),this.sumProducts(a.cart),this.sumTotal(a.cart)):alert("Producto inexistente")}},{key:"handlerRemoveProduct",value:function(e){var t=this.state.products.find((function(t){return t.id===e})),a=this.state.products.findIndex((function(e){return e.id===t.id})),c=this.state.cart.find((function(t){return t.id===e})),n=this.state.cart.findIndex((function(e){return e.id===c.id})),s=Object.assign({},this.state);s.cart[n].total===s.cart[n].price?(-1!==n&&s.cart.splice(n,1),this.setState(s),alert("El producto fue eliminado del carrito de compras")):(s.cart[n].total-=s.cart[n].price,s.products[a].status+=1,s.cart[n].order-=1,s.total-=1,s.sum-=s.cart[n].price,this.setState(s))}},{key:"handleSaveProduct",value:function(e){var t=this.state.products.find((function(t){return t.id===e})),a=this.state.products.findIndex((function(e){return e.id===t.id})),c={_id:t._id,name:t.name,img:t.picture,price:t.price,order:1,total:t.price},n=this.state.cart.find((function(t){return t.id===e}));if(void 0!==n&&null!==n){var s=this.state.cart.findIndex((function(e){return e.id===n.id}));this.handlerAddProduct(s,a)}else{var r=Object.assign({},this.state);r.products[a].status-=1,this.sumProducts(r.cart),this.sumTotal(r.cart),this.setState({cart:this.state.cart.concat([c]),statusCopy:r})}}},{key:"handlerOpenOrder",value:function(e){e.preventDefault(),this.setState({openOrder:!0})}},{key:"render",value:function(){var e=this.state,t=this.logout,a=this.setUser,n=this.setProducts,s=this.setUserProducts,r=this.setUserCart,i=this.addProduct,o=this.handlerClearCart,l=this.sumProducts,u=this.sumTotal,d=this.handlerAddProduct,h=this.handlerRemoveProduct,m=this.handleSaveProduct;return Object(c.jsx)(j.Provider,{value:{state:e,logout:t,setUser:a,setProducts:n,setUserProducts:s,setUserCart:r,addProduct:i,handlerClearCart:o,sumProducts:l,sumTotal:u,handlerAddProduct:d,handlerRemoveProduct:h,handleSaveProduct:m},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{user:this.state.user,logout:t}),Object(c.jsx)(fe,{})]})})}}]),a}(n.Component),ye=Object(g.f)(Ne),Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},we=a(36),Se=a.n(we);a(68),a(69);M.a.use(Se.a);var _e=function(){return Object(c.jsx)(m.a,{children:Object(c.jsx)(ye,{})})};r.a.render(Object(c.jsx)(_e,{}),document.getElementById("root")),Ce()}},[[70,1,2]]]);
//# sourceMappingURL=main.dac2cfbc.chunk.js.map