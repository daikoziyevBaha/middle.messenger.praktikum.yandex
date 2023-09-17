import './AvatarShort.scss';
import Block from '../Block/Block';
import AvatarShortTmpl from './AvatarShort.tmpl';

export default class AvatarShort extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(AvatarShortTmpl, this.props);
    }
}
