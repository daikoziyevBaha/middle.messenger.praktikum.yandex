import OldBlock from '../../Block/OldBlock';
import SendMessageFormTmpl from './SendMessageForm.tmpl';
import './SendMessageForm.scss';

export default class SendMessageForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(SendMessageFormTmpl, this.props);
    }
};
