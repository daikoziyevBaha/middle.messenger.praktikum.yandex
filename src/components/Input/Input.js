import Handlebars from "handlebars";
import InputTmpl from "./Input.tmpl.js";
import './Input.scss';
export default function Input({
        name= '',
        value= '',
        label= '',
    }) {
    const template = Handlebars.compile(InputTmpl);
    const input = template({
        value, label, name
    });
    return input;
}