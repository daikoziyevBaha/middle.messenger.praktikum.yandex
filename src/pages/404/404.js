import './404.scss';
import Handlebars from "handlebars";
import NotFoundTmpl from "./404.tmpl";
export default function NotFound() {
    const template = Handlebars.compile(NotFoundTmpl);
    return template({})
}