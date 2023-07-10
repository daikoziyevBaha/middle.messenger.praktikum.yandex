import './ChatDetails.scss';
import ChatDetailsTmpl from "./ChatDetails.tmpl.js";
import Handlebars from "handlebars";
export default function ChatDetails() {
    const template = Handlebars.compile(ChatDetailsTmpl);
    return template({})
}