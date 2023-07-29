import Block from '../Block/Block';
import StraightInputTmpl from './StraightInput.tmpl';
import './StraightInput.scss';

export default class StraightInput extends Block {
    constructor(props) {
        super('label', props);
    }

    render() {
        return this.compile(StraightInputTmpl, this.props);
    }
}