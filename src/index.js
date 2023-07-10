import './index.scss';
import {routes} from "./router/routes.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");
    console.log(window.location.pathname, routes[window.location.pathname])
    let Component = routes[window.location.pathname];
    root.innerHTML = Component();

    setTimeout(() => {
        document.getElementById("checkdv_1").remove();
    }, 3000)
})

