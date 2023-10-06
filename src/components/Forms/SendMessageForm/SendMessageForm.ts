import Handlebars from "handlebars";
import SendMessageFormTmpl from './SendMessageForm.tmpl';
import './SendMessageForm.scss';
import Block from "../../../utils/Block";
import MessagesController from "../../../controllers/MessagesController";

export default class SendMessageForm extends Block {
    static template = Handlebars.compile(SendMessageFormTmpl);

    init() {
        this.props.events = {
            submit: this.onSubmit.bind(this),
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const message = formData.get('message');
        if (message) {
            MessagesController
                .sendMessage(this.props.chatId, message as string);
        }
    }

    render() {
        return this.compile(SendMessageForm.template, this.props);
    }
}
