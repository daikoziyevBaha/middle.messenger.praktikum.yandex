import './500.scss';
import Handlebars from "handlebars";
import ServerErrorTmpl from "./500.tmpl.js";
export default function ServerError() {
    const template = Handlebars.compile(ServerErrorTmpl);
    return template({})
}
