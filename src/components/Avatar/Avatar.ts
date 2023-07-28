import './Avatar.scss';
import AvatarTmpl from './Avatar.tmpl';
import Block from '../Block/Block';

export default class Avatar extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        console.log('hello world!');
        return this.compile(AvatarTmpl, this.props);
    }
}
