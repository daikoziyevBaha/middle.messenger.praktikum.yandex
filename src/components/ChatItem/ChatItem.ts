import ChatItemTmpl from './ChatItem.tmpl';
import './ChatItem.scss';
import Block from '../Block/Block';

export default class ChatItem extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatItemTmpl, this.props);
    }
}
