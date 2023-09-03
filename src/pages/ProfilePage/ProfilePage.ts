import './ProfilePage.scss';
import ProfilePageTmpl from './ProfilePage.tmpl';
import OldBlock from '../../components/Block/OldBlock';
import ChangeAvatarForm from '../../components/Forms/ChangeAvatarForm/ChangeAvatar';
import FileInput from '../../components/FileInput/FileInput';
import Input from '../../ui/Input/Input';
import Button from '../../components/Button/Button';
import ModalBlock from '../../components/ModalBlock/ModalBlock';
import GoBack from '../../components/GoBackBlock/GoBack';
import Avatar from '../../components/Avatar/Avatar';
import Link from '../../components/Link/Link';

class ProfilePage extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ProfilePageTmpl, this.props);
    }
}

export default function getProfilePage() {
    const input = new Input({
        attr: {
            class: 'file-input__input',
            type: 'file',
            id: 'file_input_id',
        },
    });
    const submitButton = new Button({
        attr: {
            class: 'button',
        },
        text: 'Поменять',
    });
    const fileInput = new FileInput({
        attr: {
            class: 'file-input__label',
            for: 'file_input_id',
            id: 'file_input_label',
        },
        label: 'Выбрать файл на компьютере',
        input,
    });
    const changeAvatarForm = new ChangeAvatarForm({
        attr: {
            class: 'change-avatar-form',
        },
        fileInput,
        submitButton,
    });
    const modalBlock = new ModalBlock({
        attr: {
            class: 'modal',
        },
        content: changeAvatarForm,
    });
    const GoBackBlock = new GoBack({
        href: '/',
        attr: {
            class: 'go-back',
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
    const editLink = new Link({
        attr: {
            class: 'profile__change-data',
        },
        href: '#',
        text: 'Изменить данные',
    });
    const changePasswordLink = new Link({
        attr: {
            class: 'profile__change-data',
        },
        href: '#',
        text: 'Изменить пароль',
    });
    const logoutLink = new Link({
        attr: {
            class: 'link link_red',
        },
        href: '/',
        text: 'Выйти',
    });
    return new ProfilePage({
        name: 'Test name',
        attr: {
            class: 'profile-container',
        },
        avatarBlock: avatar,
        editLink,
        changePasswordLink,
        logoutLink,
        GoBackBlock,
        ChangeAvatarModal: modalBlock,
    });
}
