import InputTmpl from './OutlinedInput.tmpl';
import './OutlinedInput.scss';
import Block from '../Block/Block';

export default class OutlinedInput extends Block {

    constructor(props) {
        super('label', props);
        // this.loginInput = new props.input();
    }

    render() {
        return this.compile(InputTmpl, this.props);
    }
}
