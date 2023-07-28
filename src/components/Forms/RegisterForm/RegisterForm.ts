import Handlebars from 'handlebars';
import OutlinedInput from '../../OutlinedInput/OutlinedInput';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import RegisterFormTmpl from './RegisterForm.tmpl';
import './RegisterForm.scss';
import Block from "../../Block/Block";

export default class RegisterForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(RegisterFormTmpl, this.props);
    }
}

// export default function RegisterForm() {
//     const emailInput = OutlinedInput({
//         label: 'Почта',
//         value: '',
//         name: 'email',
//     });
//     const loginInput = OutlinedInput({
//         label: 'Логин',
//         value: '',
//         name: 'login',
//     });
//     const nameInput = OutlinedInput({
//         label: 'Имя',
//         value: '',
//         name: 'first_name',
//     }); const femaleInput = OutlinedInput({
//         label: 'Фамилия',
//         value: '',
//         name: 'second_name',
//     });
//     const phoneInput = OutlinedInput({
//         label: 'Номер',
//         value: '',
//         name: 'phone',
//     });
//     const passwordInput = OutlinedInput({
//         label: 'Пароль',
//         value: '',
//         name: 'password',
//     });
//     const passwordConfirmationInput = OutlinedInput({
//         label: 'Пароль (еще раз)',
//         value: '',
//         name: 'password-confirmation',
//     });
//     const fields = [emailInput, loginInput, nameInput, femaleInput, phoneInput, passwordInput, passwordConfirmationInput];
//     const registerButton = Button({ text: 'Зарегистрироваться' });
//     const registerLink = Link({ href: '/login', text: 'Войти' });
//     const template = Handlebars.compile(RegisterFormTmpl);
//     const registerForm = template({
//         fields,
//         registerButton,
//         registerLink,
//     });
//     return registerForm;
// }
