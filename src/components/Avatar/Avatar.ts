import './Avatar.scss';
import AvatarTmpl from './Avatar.tmpl';
import Block from '../Block/Block';

export default class Avatar extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(AvatarTmpl, this.props);
    }
}
