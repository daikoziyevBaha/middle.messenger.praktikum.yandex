import Handlebars from "handlebars";
import ChatItemTmpl from './ChatItem.tmpl';
import './ChatItem.scss';
import Block from "../../utils/Block";
import ChatsController from "../../controllers/ChatsController";
import { withStore } from "../../utils/Store";

class ChatItem extends Block {
    static template = Handlebars.compile(ChatItemTmpl);

    init() {
        this.props.events = {
            click: () => {
                if (this.props.id !== this.props.selectedChat) {
                    ChatsController.selectChat(this.props.id);
                }
            },
        };
    }

    render() {
        return this.compile(ChatItem.template, this.props);
    }
}

const withSelectedChat = withStore(state => ({ selectedChat: state.selectedChat }));

export default withSelectedChat(ChatItem);
