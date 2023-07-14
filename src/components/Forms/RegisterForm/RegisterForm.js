import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";
import Link from "../../Link/Link.js";
import Handlebars from "handlebars";
import RegisterFormTmpl from "./RegisterForm.tmpl.js";
import './RegisterForm.scss';

export default function RegisterForm() {
    const emailInput = Input({
        label: 'Почта',
        value: '',
        name: 'email'
    });
    const loginInput = Input({
        label: 'Логин',
        value: '',
        name: 'login'
    });
    const nameInput = Input({
        label: 'Имя',
        value: '',
        name: 'first_name'
    });const femaleInput = Input({
        label: 'Фамилия',
        value: '',
        name: 'second_name'
    });
    const phoneInput = Input({
        label: 'Номер',
        value: '',
        name: 'phone'
    });
    const passwordInput = Input({
        label: 'Пароль',
        value: '',
        name: 'password'
    });
    const passwordConfirmationInput = Input({
        label: 'Пароль (еще раз)',
        value: '',
        name: 'password-confirmation'
    });
    const fields = [emailInput, loginInput, nameInput, femaleInput, phoneInput, passwordInput, passwordConfirmationInput]
    const registerButton = Button({text: 'Зарегистрироваться'});
    const registerLink = Link({href: "/login", text: "Войти"});
    const template = Handlebars.compile(RegisterFormTmpl);
    const registerForm = template({
        fields,
        registerButton: registerButton,
        registerLink: registerLink,
    });
    return registerForm;
}
