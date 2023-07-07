import Handlebars from "handlebars";
import ModalTmpl from "./Modal.tmpl.js";
import './Modal.scss';
export default function Modal({content}) {
    const template = Handlebars.compile(ModalTmpl)
    return template({content: content})
}