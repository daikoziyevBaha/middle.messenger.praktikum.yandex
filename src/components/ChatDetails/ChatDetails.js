import './ChatDetails.scss';
import ChatDetailsTmpl from "./ChatDetails.tmpl.js";
import Handlebars from "handlebars";
export default function ChatDetails() {
    const handleOpenAttachMenu = () => {
        const attachMenu = document.querySelector("#attach-menu");
        attachMenu.style.display = "none";
    }
    const template = Handlebars.compile(ChatDetailsTmpl);
    const attachBtn = document.querySelector("#attach-btn");
    console.log(attachBtn);
    return template({handleOpenAttachMenu})
}