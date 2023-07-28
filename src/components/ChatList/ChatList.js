import ChatItem from '../ChatItem/ChatItem';

export default function ChatList({ data = [] }) {
    const chatList = data.map((chat) => ChatItem({ chat })).join('');
    return chatList;
}
