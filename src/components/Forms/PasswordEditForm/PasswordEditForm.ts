import OldBlock from '../../Block/OldBlock';
import './PasswordEditForm.scss';
import PasswordEditFormTmpl from './PasswordEditForm.tmpl';

export default class PasswordEditForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(PasswordEditFormTmpl, this.props);
    }
}
