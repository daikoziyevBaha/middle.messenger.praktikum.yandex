import './DeleteUserForm.scss';
import OldBlock from '../../Block/OldBlock';
import DeleteUserFormTmpl from './DeleteUserForm.tmpl';

export default class DeleteUserForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(DeleteUserFormTmpl, this.props);
    }
}
