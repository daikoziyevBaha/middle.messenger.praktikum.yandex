import './index.scss';
import {routes} from "./router/routes.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#app");
    let Component = routes[window.location.pathname];
    const contentElement = Component();
    root.innerHTML = `
        <main>
            ${contentElement}
        </main>
    `;

    setTimeout(() => {
        document.getElementById("checkdv_1").remove();
    }, 3000)
})
