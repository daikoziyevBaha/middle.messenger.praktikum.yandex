import './DeleteUserForm.scss';
import Block from '../../Block/Block';
import DeleteUserFormTmpl from './DeleteUserForm.tmpl';

export default class DeleteUserForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(DeleteUserFormTmpl, this.props);
    }
}
