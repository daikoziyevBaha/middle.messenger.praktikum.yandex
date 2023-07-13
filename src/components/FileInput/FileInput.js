import Handlebars from "handlebars";
import './FileInput.scss';
import FileInputTmpl from "./FileInput.tmpl.js";
export default function FileInput({
        value= '',
        label= '',
    }) {
    const template = Handlebars.compile(FileInputTmpl);
    return template({
            value, label
        });
}