import Handlebars from "handlebars";
import './DeleteUserForm.scss';
import DeleteUserFormTmpl from './DeleteUserForm.tmpl';
import Block from "../../../utils/Block";
import ChatsController from "../../../controllers/ChatsController";
import { withStore } from "../../../utils/Store";

class DeleteUserForm extends Block {
    static template = Handlebars.compile(DeleteUserFormTmpl);

    init() {
        this.props.events = {
            submit: this.onSubmit.bind(this),
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const id = form.get("id");
        ChatsController
            .deleteUserFromChat(this.props.selectedChat, +id as number);
    }

    render() {
        return this.compile(DeleteUserForm.template, this.props);
    }
}

const withSelectedChat = withStore(state => ({ selectedChat: state.selectedChat }));

export default withSelectedChat(DeleteUserForm);
