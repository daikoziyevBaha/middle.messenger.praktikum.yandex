import OldBlock from '../Block/OldBlock';
import ChatListTmpl from './ChatList.tmpl';

export default class ChatList extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatListTmpl, this.props);
    }
}
