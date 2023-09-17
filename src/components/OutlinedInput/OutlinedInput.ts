import InputTmpl from './OutlinedInput.tmpl';
import './OutlinedInput.scss';
import Block from '../Block/Block';

export default class OutlinedInput extends Block {

    constructor(props) {
        super('label', props);
    }

    render() {
        return this.compile(InputTmpl, this.props);
    }
}
