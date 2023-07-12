import Handlebars from "handlebars";
import ModalTmpl from "./ModalBlock.tmpl.js";
import './ModalBlock.scss';
export default function ModalBlock({content}) {
    const template = Handlebars.compile(ModalTmpl)
    return template({content: content})
}