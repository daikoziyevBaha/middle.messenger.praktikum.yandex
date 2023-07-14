import ChatItem from "../ChatItem/ChatItem.js";

export default function ChatList({data=[]}) {
    const chatList = data.map(chat => {
        return ChatItem({chat})
    }).join('');
    return chatList;
}
