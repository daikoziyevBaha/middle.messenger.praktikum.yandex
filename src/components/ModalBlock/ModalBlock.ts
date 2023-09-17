import Handlebars from "handlebars";
import ModalTmpl from './ModalBlock.tmpl';
import './ModalBlock.scss';
import Block from "../../utils/Block";

export default class ModalBlock extends Block {
    static template = Handlebars.compile(ModalTmpl);

    init() {
        this.props.display = this.props.open ? 'flex' : 'none';
        this.props.events = {
            click: e => {
                e.stopPropagation();
                if (e.target.id === "modal-window") {
                    this.props.onClose();
                }
            },
        };
    }

    render() {
        return this.compile(ModalBlock.template, this.props);
    }
}
