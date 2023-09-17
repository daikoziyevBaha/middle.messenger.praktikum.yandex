import Handlebars from "handlebars";
import Block from '../../utils/Block';
import ChatListPageTmpl from "./ChatListPage.tmpl";
import "./ChatListPage.scss";
import ChatsController from "../../controllers/ChatsController";

export default class MessengerPage extends Block {
    static template = Handlebars.compile(ChatListPageTmpl);

    protected init() {
        this.props.onOpenCreateChat = e => {
            e.preventDefault();
            this.setProps({
                isOpenCreateChat: true,
            });
        };
        this.props.onCloseCreateChat = () => {
            this.setProps({
                isOpenCreateChat: false,
            });
        };
        this.props.chatTitle = '';
        this.props.onTitleBlur = this.onTitleBlur.bind(this);
        this.props.onSubmitNewChat = this.onSubmitNewChat.bind(this);
        ChatsController.fetchChats();
    }

    onTitleBlur(e) {
        this.setProps({
            chatTitle: e.target.value,
        });
    }

    onSubmitNewChat(e) {
        e.preventDefault();
        ChatsController
            .create(this.props.chatTitle as string)
            .then(() => {
                this.setProps({
                    isOpenCreateChat: false,
                });
            });
    }

    render() {
        return this.compile(MessengerPage.template, this.props);
    }
}
