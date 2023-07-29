import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";
import Link from "../../Link/Link.js";
import Handlebars from "handlebars";
import LoginFormTmpl from "./LoginForm.tmpl.js";
import './LoginForm.scss';

export default function LoginForm() {
    const loginInput = Input({
        label: 'Логин',
        value: '',
        name: 'login',
    });
    const passwordInput = Input({
        label: 'Пароль',
        value: '',
        name: 'password'
    });
    const authButton = Button({text: 'Авторизоваться'});
    const registerLink = Link({href: '/register', text: 'Нет аккаунта?'});
    const template = Handlebars.compile(LoginFormTmpl);
    const authForm = template({
        loginInput: loginInput,
        passwordInput: passwordInput,
        authButton: authButton,
        registerLink: registerLink
    });
    return authForm;
}
