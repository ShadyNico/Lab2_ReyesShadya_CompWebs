import { Router } from "@vaadin/router";

const outlet = document.getElementById("app");
const router = new Router(outlet);

router.setRoutes([
    { path: "/", component: "mi-home" },
    { path: "/gallery", component: "galeria-imagenes" },
    { path: "/direction", component: "mi-direction" },
    { path: "/formulario", component: "mi-formulario" },
    { path: "/equipo", component: "mi-equipo" },
    { path: "(.*)", redirect: "/" },
]);

export { router };
