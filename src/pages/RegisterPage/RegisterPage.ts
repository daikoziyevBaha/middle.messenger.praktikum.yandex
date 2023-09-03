// import './RegisterPage.scss';
// import registerPageTmpl from './RegisterPage.tmpl';
// import OldBlock from '../../components/Block/OldBlock';
// import Modal from '../../components/Modal/Modal';
// import OutlinedInput from '../../components/OutlinedInput/OutlinedInput';
// import Input from '../../ui/Input/Input';
// import validateLogin from '../../utils/validators/validateLogin';
// import validateEmail from '../../utils/validators/validateEmail';
// import validateName from '../../utils/validators/validateName';
// import validatePhoneNumber from '../../utils/validators/validatePhone';
// import validatePassword from '../../utils/validators/validatePassword';
// import Button from '../../components/Button/Button';
// import Link from '../../components/Link/Link';
// import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
// import isValid from '../../utils/validators';
//
// class RegisterPage extends OldBlock {
//     constructor(props) {
//         super('div', props);
//     }
//
//     render() {
//         return this.compile(registerPageTmpl, this.props);
//     }
// }
//
// export default function getRegisterPage() {
//     const emailInput = new OutlinedInput({
//         label: 'Почта',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'email',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     if (!validateEmail(event.target.value)) {
//                         emailInput.setProps({ error: 'Неверная почта' });
//                     } else {
//                         emailInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const loginInput = new OutlinedInput({
//         label: 'Login',
//         error: '',
//         attr: {
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'login',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     if (!validateLogin(event.target.value)) {
//                         loginInput.setProps({ error: 'Неверный логин' });
//                     } else {
//                         loginInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const nameInput = new OutlinedInput({
//         label: 'Имя',
//         error: '',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'first_name',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     if (!validateName(event.target.value)) {
//                         nameInput.setProps({ error: 'Неверное имя' });
//                     } else {
//                         nameInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const surnameInput = new OutlinedInput({
//         label: 'Фамилия',
//         error: '',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'second_name',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     if (!validateName(event.target.value)) {
//                         surnameInput.setProps({ error: 'Неверная фамилия' });
//                     } else {
//                         surnameInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const phoneInput = new OutlinedInput({
//         label: 'Номер телефона',
//         error: '',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'phone',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     if (!validatePhoneNumber(event.target.value)) {
//                         phoneInput.setProps({ error: 'Неверный номер' });
//                     } else {
//                         phoneInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const passwordInput = new OutlinedInput({
//         label: 'Пароль',
//         error: '',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'password',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     let error = '';
//                     if (!validatePassword(event.target.value)) {
//                         error = 'Неверный пароль';
//                     }
//                     passwordInput.setProps({
//                         error,
//                         attr: {
//                             // @ts-ignore
//                             ...passwordInput.props.attr,
//                             value: event.target.value,
//                         },
//                     });
//                 },
//             },
//         }),
//     });
//     const passwordConfirmationInput = new OutlinedInput({
//         label: 'Повторите пароль',
//         error: '',
//         attr: {
//             value: '',
//             class: 'text-field',
//         },
//         input: new Input({
//             attr: {
//                 class: 'text-field__input',
//                 name: 'password-confirmation',
//                 value: '',
//                 placeholder: ' ',
//             },
//             events: {
//                 blur: (event) => {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     // @ts-ignore
//                     if (passwordInput.props.attr.value !== event.target.value) {
//                         passwordConfirmationInput.setProps({ error: 'Пароли не совпадают' });
//                     } else {
//                         passwordConfirmationInput.setProps({ error: '' });
//                     }
//                 },
//             },
//         }),
//     });
//     const registerButton = new Button({
//         text: 'Зарегистрироваться',
//         attr: {
//             class: 'button',
//             type: 'submit',
//         },
//     });
//     const registerLink = new Link({
//         href: '/login',
//         text: 'Войти',
//         attr: {
//             class: 'link',
//         },
//     });
//     const fields = [emailInput, loginInput, nameInput, surnameInput, phoneInput, passwordInput, passwordConfirmationInput];
//     const registerForm = new RegisterForm({
//         attr: {
//             class: 'auth-form',
//         },
//         fields,
//         registerButton,
//         registerLink,
//         events: {
//             submit: (e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 const formData = new FormData(e.target);
//                 const data = Object.fromEntries(formData);
//                 let valid = true;
//                 if (!isValid('email', data.email)) {
//                     valid = false;
//                     emailInput.setProps({
//                         error: 'Неверная почта',
//                     });
//                 }
//                 if (!isValid('login', data.login)) {
//                     valid = false;
//                     emailInput.setProps({
//                         error: 'Неверный логин',
//                     });
//                 }
//                 if (!isValid('first_name', data.first_name)) {
//                     valid = false;
//                     nameInput.setProps({
//                         error: 'Неверное имя',
//                     });
//                 }
//                 if (!isValid('second_name', data.second_name)) {
//                     valid = false;
//                     surnameInput.setProps({
//                         error: 'Неверная фамилия',
//                     });
//                 }
//                 if (!isValid('phone', data.phone)) {
//                     valid = false;
//                     phoneInput.setProps({
//                         error: 'Неверный телефон',
//                     });
//                 }
//                 if (!isValid('password', data.password)) {
//                     valid = false;
//                     passwordInput.setProps({
//                         error: 'Неверный пароль',
//                     });
//                 }
//                 if (data.password !== data['password-confirmation']) {
//                     valid = false;
//                     passwordConfirmationInput.setProps({
//                         error: 'Пароли не совпадают',
//                     });
//                 }
//                 if (valid) {
//                     delete data['password-confirmation'];
//                     // eslint-disable-next-line no-console
//                     console.log('Register form', data);
//                 }
//             },
//         },
//     });
//     const registerModal = new Modal({
//         attr: {
//             class: 'modal-container',
//         },
//         content: registerForm,
//     });
//     return new RegisterPage({
//         attr: {
//             class: 'register',
//         },
//         registerModal,
//     });
// }

import Handlebars from "handlebars";
import Block from "../../utils/Block";
import RegisterPageTmpl from "./RegisterPage.tmpl";
import './RegisterPage.scss';

export default class RegisterPage extends Block {
    static template = Handlebars.compile(RegisterPageTmpl);

    render() {
        return this.compile(RegisterPage.template, this.props);
    }
}
