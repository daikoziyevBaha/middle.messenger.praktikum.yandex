import LoginFormTmpl from './LoginForm.tmpl';
import './LoginForm.scss';
import Block from '../../Block/Block';

export default class LoginForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(LoginFormTmpl, this.props);
    }
}
