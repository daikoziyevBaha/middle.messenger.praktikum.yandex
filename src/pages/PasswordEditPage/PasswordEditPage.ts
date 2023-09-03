import './PasswordEditPage.scss';
import GoBack from '../../components/GoBackBlock/GoBack';
import OldBlock from '../../components/Block/OldBlock';
import ProfileEditPageTmpl from '../ProfileEditPage/ProfileEditPage.tmpl';
import Avatar from '../../components/Avatar/Avatar';
import StraightInput from '../../components/StraightInput/StraightInput';
import Input from '../../ui/Input/Input';
import validateEmail from '../../utils/validators/validateEmail';
import PasswordEditForm from '../../components/Forms/PasswordEditForm/PasswordEditForm';
import Button from '../../components/Button/Button';
import validatePassword from '../../utils/validators/validatePassword';
import isValid from '../../utils/validators';

class PasswordEditPage extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ProfileEditPageTmpl, this.props);
    }
}
export default function getPasswordEditPage() {
    const oldPasswordInput = new StraightInput({
        label: 'Старый пароль',
        attr: {
            value: '',
            class: 'straight-label',
        },
        input: new Input({
            attr: {
                class: 'straight-label__value',
                name: 'oldPassword',
                value: '',
                placeholder: '*******',
                type: 'password',
            },
            events: {
                blur: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!validateEmail(event.target.value)) {
                        oldPasswordInput.setProps({ error: 'Неверный пароль' });
                    } else {
                        oldPasswordInput.setProps({ error: '' });
                    }
                },
            },
        }),
    });
    const newPasswordInput = new StraightInput({
        label: 'Новый пароль',
        error: '',
        attr: {
            class: 'straight-label',
        },
        input: new Input({
            attr: {
                class: 'straight-label__value',
                name: 'newPassword',
                value: '',
                placeholder: '*******',
                type: 'password',
            },
            events: {
                blur: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    let error = '';
                    if (!validatePassword(event.target.value)) {
                        error = 'Неверный пароль';
                    }
                    newPasswordInput.setProps({
                        error,
                        attr: {
                            // @ts-ignore
                            ...newPasswordInput.props.attr,
                            value: event.target.value,
                        },
                    });
                },
            },
        }),
    });
    const confirmNewPasswordInput = new StraightInput({
        label: 'Повторите новый пароль',
        error: '',
        attr: {
            class: 'straight-label',
        },
        input: new Input({
            attr: {
                class: 'straight-label__value',
                name: 'confirmPassword',
                value: '',
                placeholder: '*******',
                type: 'password',
            },
            events: {
                blur: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    // @ts-ignore
                    if (newPasswordInput.props.attr.value !== event.target.value) {
                        confirmNewPasswordInput.setProps({ error: 'Пароли не совпадают' });
                    } else {
                        confirmNewPasswordInput.setProps({ error: '' });
                    }
                },
            },
        }),
    });
    const fields = [oldPasswordInput, newPasswordInput, confirmNewPasswordInput];
    const submitButton = new Button({
        attr: {
            class: 'button',
        },
        text: 'Сохранить',
    });
    const form = new PasswordEditForm({
        attr: {
            class: 'user-data__list',
        },
        fields,
        submitButton,
        events: {
            submit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);
                let valid = true;
                if (!isValid('password', data.oldPassword)) {
                    valid = false;
                    oldPasswordInput.setProps({
                        error: 'Неверный пароль',
                    });
                }
                if (data.newPassword !== data.confirmPassword) {
                    valid = false;
                    confirmNewPasswordInput.setProps({
                        error: 'Пароли не совпадают',
                    });
                }
                if (valid) {
                    delete data.confirmPassword;
                    // eslint-disable-next-line no-console
                    console.log('Password edit form', data);
                }
            },
        },
    });
    const avatar = new Avatar({
        attr: {
            class: 'avatar',
        },
        events: {
            click: (e) => {
                e.preventDefault();
                e.stopPropagation();
                const modal = document.querySelector('#change-avatar-modal');
                modal.style.display = 'block';
            },
        },
    });
    const GoBackBlock = new GoBack({
        href: '/',
        attr: {
            class: 'go-back',
        },
    });
    return new PasswordEditPage({
        attr: {
            class: 'profile-container',
        },
        avatar,
        form,
        GoBackBlock,
    });
}
