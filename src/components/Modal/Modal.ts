import ModalTmpl from './Modal.tmpl';
import './Modal.scss';
import Block from '../Block/Block';

export default class Modal extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ModalTmpl, this.props);
    }
}
