import Handlebars from "handlebars";
import './AddUserForm.scss';
import AddUserFormTmpl from './AddUserForm.tmpl';
import Block from "../../../utils/Block";
import ChatsController from "../../../controllers/ChatsController";
import { withStore } from "../../../utils/Store";

class AddUserForm extends Block {
    static template = Handlebars.compile(AddUserFormTmpl);

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
            .addUserToChat(this.props.selectedChat, +id as number);
    }

    render() {
        return this.compile(AddUserForm.template, this.props);
    }
}

const withSelectedChat = withStore(state => ({ selectedChat: state.selectedChat }));

export default withSelectedChat(AddUserForm);
