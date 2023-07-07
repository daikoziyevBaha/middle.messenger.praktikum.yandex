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
    });
    const loginInput = Input({
        label: 'Логин',
        value: '',
    });
    const nameInput = Input({
        label: 'Имя',
        value: '',
    });const femaleInput = Input({
        label: 'Фамилия',
        value: '',
    });
    const phoneInput = Input({
        label: 'Номер',
        value: '',
    });
    const passwordInput = Input({
        label: 'Пароль',
        value: '',
    });
    const passwordConfirmationInput = Input({
        label: 'Пароль (еще раз)',
        value: '',
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