import './AvatarShort.scss';
import OldBlock from '../Block/OldBlock';
import AvatarShortTmpl from './AvatarShort.tmpl';

export default class AvatarShort extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(AvatarShortTmpl, this.props);
    }
}
