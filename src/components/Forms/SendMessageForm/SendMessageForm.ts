import Block from '../../Block/Block';
import SendMessageFormTmpl from './SendMessageForm.tmpl';
import './SendMessageForm.scss';

export default class SendMessageForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(SendMessageFormTmpl, this.props);
    }
};
