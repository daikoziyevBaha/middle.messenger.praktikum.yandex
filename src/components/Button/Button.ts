import ButtonTmpl from './Button.tmpl';
import './Button.scss';
import Block from '../Block/Block';

export default class Button extends Block {
    constructor(props) {
        super('button', props);
    }

    render() {
        return this.compile(ButtonTmpl, this.props);
    }
}
