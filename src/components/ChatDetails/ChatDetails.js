import './ChatDetails.scss';
import Handlebars from 'handlebars';
import ChatDetailsTmpl from './ChatDetails.tmpl';
import AddUserForm from '../Forms/AddUserForm/AddUserForm';
import ModalBlock from '../ModalBlock/ModalBlock';
import DeleteUserForm from '../Forms/DeleteUserForm/DeleteUserForm';

export default function ChatDetails() {
    window.chat = {};
    window.chat.handleOpenAttachMenu = () => {
        const attachMenu = document.querySelector('#attach-menu');
        const { display } = attachMenu.style;
        if (display === 'none') {
            attachMenu.style.display = 'flex';
        } else {
            attachMenu.style.display = 'none';
        }
    };
    window.chat.handleOpenChatOptions = () => {
        const attachMenu = document.querySelector('#chat-options-window');
        const { display } = attachMenu.style;
        if (display === 'none') {
            attachMenu.style.display = 'flex';
        } else {
            attachMenu.style.display = 'none';
        }
    };
    window.chat.handleOpenAddUserModal = () => {
        const attachMenu = document.querySelector('#add-user-modal');
        attachMenu.style.display = 'block';
    };
    window.chat.handleOpenDeleteUserModal = () => {
        const attachMenu = document.querySelector('#delete-user-modal');
        attachMenu.style.display = 'block';
    };
    const addUserForm = AddUserForm();
    const addUserModal = ModalBlock({ content: addUserForm });
    const deleteUserForm = DeleteUserForm();
    const deleteUserModal = ModalBlock({ content: deleteUserForm });
    const template = Handlebars.compile(ChatDetailsTmpl);
    return template({ addUserModal, deleteUserModal });
}
