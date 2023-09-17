import Block from '../../Block/Block';
import ProfileEditTmpl from './ProfileEdit.tmplForm';
import './ProfileEditForm.scss';

export default class ProfileEditForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(ProfileEditTmpl, this.props);
    }
}
