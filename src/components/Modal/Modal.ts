import Handlebars from "handlebars";
import ModalTmpl from './Modal.tmpl';
import './Modal.scss';
import Block from "../../utils/Block";

export default class Modal extends Block {
    static template = Handlebars.compile(ModalTmpl);

    render() {
        return this.compile(Modal.template, this.props);
    }
}
