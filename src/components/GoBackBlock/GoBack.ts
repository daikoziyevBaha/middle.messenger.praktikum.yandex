import GoBackTmpl from './GoBack.tmpl';
import './GoBack.scss';
import OldBlock from '../Block/OldBlock';

export default class GoBack extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(GoBackTmpl, this.props);
    }
}
