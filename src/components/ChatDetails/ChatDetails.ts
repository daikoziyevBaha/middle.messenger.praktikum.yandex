import './ChatDetails.scss';
import ChatDetailsTmpl from './ChatDetails.tmpl';
import OldBlock from '../Block/OldBlock';

export default class ChatDetails extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatDetailsTmpl, this.props);
    }
}
