import './ChangeAvatar.scss';
import ChangeAvatarTmpl from './ChangeAvatar.tmpl';
import OldBlock from '../../Block/OldBlock';

export default class ChangeAvatarForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(ChangeAvatarTmpl, this.props);
    }
}
