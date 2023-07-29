import ButtonTmpl from "./Button.tmpl.js";
import Handlebars from "handlebars";
import './Button.scss';
export default function Button({text=''}) {
    const template = Handlebars.compile(ButtonTmpl);
    const button = template({text: text})
    return button
}
