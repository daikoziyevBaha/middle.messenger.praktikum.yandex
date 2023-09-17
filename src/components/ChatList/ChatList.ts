import Handlebars from "handlebars";
import ChatListTmpl from './ChatList.tmpl';
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";

class ChatList extends Block {
    static template = Handlebars.compile(ChatListTmpl);

    render() {
        let loading = false;
        if (this.props.chats.length === 0) {
            loading = true;
        }
        return this.compile(ChatList.template, {
            ...this.props,
            loading,
        });
    }
}

const withChats = withStore(state => ({ chats: [...(state.chats || [])] }));

export default withChats(ChatList);
