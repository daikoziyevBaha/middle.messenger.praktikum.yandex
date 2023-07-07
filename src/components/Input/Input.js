import Handlebars from "handlebars";
import InputTmpl from "./Input.tmpl.js";
import './Input.scss';
export default function Input({
        value= '',
        label= '',
    }) {
    const template = Handlebars.compile(InputTmpl);
    const input = template({
        value, label
    });
    return input;
}