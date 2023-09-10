import './ChatOpenPage.scss';
import ChatList from '../../components/ChatList/ChatList';
import ChatOpenPageTmpl from './ChatOpenPage.tmpl';
import OldBlock from '../../components/Block/OldBlock';
import { data } from '../../constants/MockData';
import ChatItem from '../../components/ChatItem/ChatItem';
import AvatarShort from '../../components/AvatarShort/AvatarShort';
import SendMessageForm from '../../components/Forms/SendMessageForm/SendMessageForm';
import Input from '../../ui/Input/Input';
import Button from '../../components/Button/Button';
import ChatDetails from '../../components/ChatDetails/ChatDetails';
import OutlinedInput from '../../components/OutlinedInput/OutlinedInput';
import validateLogin from '../../utils/validators/validateLogin';
import AddUserForm from '../../components/Forms/AddUserForm/AddUserForm';
import ModalBlock from '../../components/ModalBlock/ModalBlock';
import DeleteUserForm from '../../components/Forms/DeleteUserForm/DeleteUserForm';

class ChatOpenPage extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatOpenPageTmpl, this.props);
    }
}

export default function getChatOpenPage() {
    const chats = data.map((chat) => new ChatItem({
        attr: {
            class: 'chat',
        },
        ...chat,
        avatar: new AvatarShort({
            attr: {
                class: 'avatar-block',
            },
        }),
    }));
    const chatList = new ChatList({
        attr: {
            class: 'chat-list',
        },
        chatList: chats,
    });
    const messageInput = new Input({
        attr: {
            name: 'message',
            type: 'text',
            class: 'message-input',
            placeholder: 'Сообщение',
        },
    });
    const submitButton = new Button({
        attr: {
            class: 'send-message-btn',
        },
        text: `
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#3369F3"/>
                <rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
                <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
            </svg>
        `,
    });
    const sendMessageForm = new SendMessageForm({
        attr: {
            class: 'send-message-form',
        },
        input: messageInput,
        submitButton,
        events: {
            submit: e => {
                e.preventDefault();
                e.stopPropagation();
                const formData = new FormData(e.target);
                const message = formData.get('message');
                if (message) {
                    // eslint-disable-next-line no-console
                    console.log('Message', { message });
                }
            },
        },
    });
    const userAvatar = new AvatarShort({
        attr: {
            class: 'avatar-block',
        },
    });
    const loginInput = new OutlinedInput({
        label: 'Логин',
        attr: {
            class: 'text-field',
        },
        error: '',
        input: new Input({
            attr: {
                name: 'login',
                class: 'text-field__input',
                placeholder: ' ',
            },
            events: {
                blur: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (validateLogin(e.target.value)) {
                        loginInput.setProps({
                            error: '',
                        });
                    } else {
                        loginInput.setProps({
                            error: 'Неверный логин',
                        });
                    }
                },
            },
        }),
    });
    const addUserButton = new Button({
        text: 'Добавить',
        attr: {
            class: 'button',
        },
    });
    const addUserForm = new AddUserForm({
        attr: {
            class: 'add-user-form',
        },
        loginInput,
        authButton: addUserButton,
        events: {
            submit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                const formData = new FormData(e.target);
                // eslint-disable-next-line no-console
                console.log('Add user', { login: formData.get('login') });
            },
        },
    });
    const addUserModal = new ModalBlock({
        attr: {
            class: 'modal',
        },
        content: addUserForm,
    });
    addUserModal.hide();

    const loginInputForDelete = new OutlinedInput({
        label: 'Логин',
        attr: {
            class: 'text-field',
        },
        error: '',
        input: new Input({
            attr: {
                name: 'login',
                class: 'text-field__input',
                placeholder: ' ',
            },
            events: {
                blur: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (validateLogin(e.target.value)) {
                        loginInput.setProps({
                            error: '',
                        });
                    } else {
                        loginInput.setProps({
                            error: 'Неверный логин',
                        });
                    }
                },
            },
        }),
    });
    const deleteUserButton = new Button({
        text: 'Удалить',
        attr: {
            class: 'button',
        },
    });
    const deleteUserForm = new DeleteUserForm({
        attr: {
            class: 'delete-user-form',
        },
        loginInput: loginInputForDelete,
        authButton: deleteUserButton,
        events: {
            submit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                const formData = new FormData(e.target);
                // eslint-disable-next-line no-console
                console.log('Delete user', { login: formData.get('login') });
            },
        },
    });
    const deleteUserModal = new ModalBlock({
        attr: {
            class: 'modal',
        },
        content: deleteUserForm,
    });
    deleteUserModal.hide();
    const chatDetails = new ChatDetails({
        attr: {
            class: 'chat-details',
        },
        avatar: userAvatar,
        username: 'Test username',
        sendMessageForm,
        addUserModal,
        deleteUserModal,
    });
    return new ChatOpenPage({
        attr: {
            class: 'container',
        },
        chatList,
        chatDetails,
    });
}
