import './LoginPage.scss';
import loginPageTmpl from './LoginPage.tmpl';
import OldBlock from '../../components/Block/OldBlock';
import Modal from '../../components/Modal/Modal';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import OutlinedInput from '../../components/OutlinedInput/OutlinedInput';
import Input from '../../ui/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import validateLogin from '../../utils/validators/validateLogin';
import validatePassword from '../../utils/validators/validatePassword';

class LoginPage extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(loginPageTmpl, this.props);
    }
}

export default function getLoginPage() {
    const loginInput = new OutlinedInput({
        label: 'Логин',
        error: '',
        attr: {
            class: 'text-field',
        },
        input: new Input({
            attr: {
                class: 'text-field__input',
                name: 'login',
                value: '',
                placeholder: ' ',
            },
            events: {
                blur: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!validateLogin(event.target.value)) {
                        loginInput.setProps({ error: 'Неверный логин' });
                    } else {
                        loginInput.setProps({ error: '' });
                    }
                },
            },
        }),
    });
    const passwordInput = new OutlinedInput({
        label: 'Пароль',
        attr: {
            class: 'text-field',
        },
        input: new Input({
            attr: {
                class: 'text-field__input',
                name: 'password',
                value: '',
                placeholder: ' ',
            },
            events: {
                blur: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!validatePassword(event.target.value)) {
                        passwordInput.setProps({ error: 'Неверный пароль' });
                    } else {
                        passwordInput.setProps({ error: '' });
                    }
                },
            },
        }),
    });
    const authButton = new Button({
        text: 'Авторизоваться',
        attr: {
            class: 'button',
            type: 'submit',
        },
    });
    const registerLink = new Link({
        href: '/register',
        text: 'Нет аккаунта?',
        attr: {
            class: 'link',
        },
    });
    const loginForm = new LoginForm({
        attr: {
            class: 'auth-form',
        },
        events: {
            submit: (event) => {
                event.preventDefault();
                event.stopPropagation();
                const form = new FormData(event.target);
                const login = form.get('login');
                const password = form.get('password');
                let isValid = true;
                if (!validateLogin(login)) {
                    isValid = false;
                    loginInput.setProps({ error: 'Неверный логин' });
                }
                if (!validatePassword(password)) {
                    isValid = false;
                    passwordInput.setProps({ error: 'Неверный логин' });
                }
                if (isValid) {
                    // eslint-disable-next-line no-console
                    console.log('Success', {
                        loginInput,
                        passwordInput,
                    });
                }
            },
        },
        loginInput,
        passwordInput,
        authButton,
        registerLink,
    });
    const loginModal = new Modal({
        attr: {
            class: 'modal-container',
        },
        content: loginForm,
    });
    return new LoginPage({
        attr: {
            class: 'login',
        },
        loginModal,
    });
}
