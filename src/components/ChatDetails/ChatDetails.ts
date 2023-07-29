import './ChatDetails.scss';
import ChatDetailsTmpl from './ChatDetails.tmpl';
import Block from '../Block/Block';

export default class ChatDetails extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatDetailsTmpl, this.props);
    }
}
