import ModalTmpl from './ModalBlock.tmpl';
import './ModalBlock.scss';
import OldBlock from '../Block/OldBlock';

export default class ModalBlock extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ModalTmpl, this.props);
    }
}
