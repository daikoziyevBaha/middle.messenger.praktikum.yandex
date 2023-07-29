import './AddUserForm.scss';
import Block from '../../Block/Block';
import AddUserFormTmpl from './AddUserForm.tmpl';

export default class AddUserForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(AddUserFormTmpl, this.props);
    }
}
