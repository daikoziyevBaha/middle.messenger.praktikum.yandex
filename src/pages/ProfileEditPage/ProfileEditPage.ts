import Handlebars from "handlebars";
import './ProfileEditPage.scss';
import ProfileEditPageTmpl from './ProfileEditPage.tmpl';
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";

class ProfileEditPage extends Block {
    static template = Handlebars.compile(ProfileEditPageTmpl);

    render() {
        return this.compile(ProfileEditPage.template, this.props);
    }
}

const withUser = withStore(state => ({ avatar: state.user.avatar }));

export default withUser(ProfileEditPage);

// export default function getProfileEditPage() {
//     const emailInput = new StraightInput({
//         label: 'Почта',
//         error: '',
//         attr: {
//             value: '',
//             class: 'straight-label',
//         },
//         input: new Input({
//             attr: {
//                 class: 'straight-label__value',
//                 name: 'email',
//                 value: '',
//                 placeholder: 'pochta@yandex.ru',
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
//     const loginInput = new StraightInput({
//         label: 'Логин',
//         error: '',
//         attr: {
//             class: 'straight-label',
//         },
//         input: new Input({
//             attr: {
//                 class: 'straight-label__value',
//                 name: 'login',
//                 value: '',
//                 placeholder: 'noob228',
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
//     const nameInput = new StraightInput({
//         label: 'Имя',
//         error: '',
//         attr: {
//             value: '',
//             class: 'straight-label',
//         },
//         input: new Input({
//             attr: {
//                 class: 'straight-label__value',
//                 name: 'first_name',
//                 value: '',
//                 placeholder: 'Hayam',
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
//     const surnameInput = new StraightInput({
//         label: 'Фамилия',
//         error: '',
//         attr: {
//             value: '',
//             class: 'straight-label',
//         },
//         input: new Input({
//             attr: {
//                 class: 'straight-label__value',
//                 name: 'second_name',
//                 value: '',
//                 placeholder: 'Hayam',
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
//     const phoneInput = new StraightInput({
//         label: 'Номер телефона',
//         error: '',
//         attr: {
//             value: '',
//             class: 'straight-label',
//         },
//         input: new Input({
//             attr: {
//                 class: 'straight-label__value',
//                 name: 'phone',
//                 value: '',
//                 placeholder: '8747777222',
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
//     const fields = [emailInput, loginInput, nameInput, surnameInput, phoneInput];
//     const submitButton = new Button({
//         attr: {
//             class: 'button',
//         },
//         text: 'Сохранить',
//     });
//     const form = new ProfileEditForm({
//         attr: {
//             class: 'user-data__list',
//         },
//         fields,
//         submitButton,
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
//                 if (valid) {
//                     // eslint-disable-next-line no-console
//                     console.log('Profile edit form', data);
//                 }
//             },
//         },
//     });
//     const avatar = new Avatar({
//         attr: {
//             class: 'avatar',
//         },
//         events: {
//             click: (e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 const modal = document.querySelector('#change-avatar-modal');
//                 modal.style.display = 'block';
//             },
//         },
//     });
//     const GoBackBlock = new GoBack({
//         href: '/',
//         attr: {
//             class: 'go-back',
//         },
//     });
//     return new ProfileEditPage({
//         attr: {
//             class: 'profile-container',
//         },
//         avatar,
//         form,
//         GoBackBlock,
//     });
// }
