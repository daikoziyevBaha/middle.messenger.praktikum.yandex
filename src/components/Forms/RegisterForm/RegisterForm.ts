import RegisterFormTmpl from './RegisterForm.tmpl';
import './RegisterForm.scss';
import Block from '../../Block/Block';

export default class RegisterForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(RegisterFormTmpl, this.props);
    }
}
