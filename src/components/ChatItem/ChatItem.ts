import ChatItemTmpl from './ChatItem.tmpl';
import './ChatItem.scss';
import OldBlock from '../Block/OldBlock';

export default class ChatItem extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatItemTmpl, this.props);
    }
}
