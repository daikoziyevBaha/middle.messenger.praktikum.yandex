import Handlebars from 'handlebars';
import LoginPage from "./pages/LoginPage/LoginPage.js";
import './index.scss';
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import {routes} from "./router/routes.js";



document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");
    let Component = routes[window.location.pathname];
    root.innerHTML = Component();

    setTimeout(() => {
        document.getElementById("checkdv_1").remove();
    }, 3000)
})

