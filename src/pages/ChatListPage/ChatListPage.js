import './ChatListPage.scss';
import ChatListPageTmpl from "./ChatListPage.tmpl.js";
import Handlebars from "handlebars";
import ChatList from "../../components/ChatList/ChatList.js";
export default function ChatListPage() {
    const template = Handlebars.compile(ChatListPageTmpl);
    const chatList = ChatList();
    return template({chatList})
}