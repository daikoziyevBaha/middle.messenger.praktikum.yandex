import OldBlock from '../../Block/OldBlock';
import ProfileEditTmpl from './ProfileEdit.tmplForm';
import './ProfileEditForm.scss';

export default class ProfileEditForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(ProfileEditTmpl, this.props);
    }
}
