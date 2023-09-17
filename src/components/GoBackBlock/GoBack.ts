import GoBackTmpl from './GoBack.tmpl';
import './GoBack.scss';
import Block from '../Block/Block';

export default class GoBack extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(GoBackTmpl, this.props);
    }
}
