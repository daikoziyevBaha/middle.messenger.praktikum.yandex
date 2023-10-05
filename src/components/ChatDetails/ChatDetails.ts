import Handlebars from "handlebars";
import './ChatDetails.scss';
import ChatDetailsTmpl from './ChatDetails.tmpl';
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";

class ChatDetails extends Block {
    static template = Handlebars.compile(ChatDetailsTmpl);

    init() {
        this.props.messages = this.createMessages(this.props);
        this.props.openChatPopup = this.openChatPopup.bind(this);
        window.openChatPopup = this.openChatPopup.bind(this);
    }

    openChatPopup(e) {
        e.preventDefault();
    }

    protected componentDidUpdate(oldProps, newProps): boolean {
        this.children.messages = this.createMessages(newProps);

        return true;
    }

    private createMessages(props) {
        return props.messages && props.messages.map(data => {
            const dateTime = new Date(data.time);
            const hours = dateTime.getHours().toString().padStart(2, '0');
            const minutes = dateTime.getMinutes().toString().padStart(2, '0');
            const hhmmFormat = `${hours}:${minutes}`;
            return {
                ...data,
                isMine: props.userId === data.user_id,
                time: hhmmFormat,
            };
        });
    }

    render() {
        return this.compile(ChatDetails.template, { ...this.props, messages: this.children.messages });
    }
}

const withSelectedChatMessages = withStore(state => {
    const selectedChatId = state.selectedChat;

    if (!selectedChatId) {
        return {
            messages: [],
            selectedChat: undefined,
            userId: state.user.id,
        };
    }

    return {
        messages: (state.messages || {})[selectedChatId] || [],
        selectedChat: state.selectedChat,
        userId: state.user.id,
    };
});

export default withSelectedChatMessages(ChatDetails);
