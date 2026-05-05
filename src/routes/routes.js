import { Router } from "@vaadin/router";
 const outle = document.getElementById("app");

 const router = new Router(outle);

 router.setRoutes([
     {
        path: "/",
        component: "lit-home",
     },
     {
        path: "/gallery",
        component: "lit-gallery",
     },
     {
        path: "/direction",
        component: "lit-direction",
     },
     {
        path: "/about",
        component: "lit-about",
     },
     {
        path: "/questions",
        component: "lit-questions",
     },
     {
        path: "(.*)",
        redirect: "/",
     },
 ]);

 export {router}//exportar de esta forma porque es un modulo y no un componente
