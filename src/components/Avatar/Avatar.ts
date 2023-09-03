import './Avatar.scss';
import AvatarTmpl from './Avatar.tmpl';
import OldBlock from '../Block/OldBlock';

export default class Avatar extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(AvatarTmpl, this.props);
    }
}
