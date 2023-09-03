import './ChatListPage.scss';
import ChatListPageTmpl from './ChatListPage.tmpl';
import OldBlock from '../../components/Block/OldBlock';
import ChatItem from '../../components/ChatItem/ChatItem';
import ChatList from '../../components/ChatList/ChatList';
import AvatarShort from '../../components/AvatarShort/AvatarShort';
import { data } from '../../constants/MockData';

class ChatListPage extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ChatListPageTmpl, this.props);
    }
}
export default function getChatListPage() {
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
    return new ChatListPage({
        attr: {
            class: 'container',
        },
        chatList,
    });
}
