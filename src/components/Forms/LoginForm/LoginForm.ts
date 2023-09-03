import LoginFormTmpl from './LoginForm.tmpl';
import './LoginForm.scss';
import OldBlock from '../../Block/OldBlock';

export default class LoginForm extends OldBlock {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(LoginFormTmpl, this.props);
    }
}
