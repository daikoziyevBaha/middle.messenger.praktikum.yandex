import GoBackTmpl from "./GoBack.tmpl.js";
import './GoBack.scss';
import Handlebars from "handlebars";
export default function GoBack({href}) {
    const template = Handlebars.compile(GoBackTmpl)
    return template({href})
}
