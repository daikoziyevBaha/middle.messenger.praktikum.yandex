import './ChangeAvatar.scss';
import ChangeAvatarTmpl from './ChangeAvatar.tmpl';
import Block from '../../Block/Block';

export default class ChangeAvatarForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(ChangeAvatarTmpl, this.props);
    }
}
