import Block from '../Block/Block';
import ChatListTmpl from './ChatList.tmpl';

export default class ChatList extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatListTmpl, this.props);
    }
}
