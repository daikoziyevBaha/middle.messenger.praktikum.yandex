import Block from '../../Block/Block';
import './PasswordEditForm.scss';
import PasswordEditFormTmpl from './PasswordEditForm.tmpl';

export default class PasswordEditForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(PasswordEditFormTmpl, this.props);
    }
}
