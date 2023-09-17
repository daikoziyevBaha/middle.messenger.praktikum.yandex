import ModalTmpl from './ModalBlock.tmpl';
import './ModalBlock.scss';
import Block from '../Block/Block';

export default class ModalBlock extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ModalTmpl, this.props);
    }
}
