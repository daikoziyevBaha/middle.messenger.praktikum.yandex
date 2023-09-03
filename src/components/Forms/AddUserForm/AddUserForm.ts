import './AddUserForm.scss';
import OldBlock from '../../Block/OldBlock';
import AddUserFormTmpl from './AddUserForm.tmpl';

export default class AddUserForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(AddUserFormTmpl, this.props);
    }
}
