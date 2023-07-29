import './ChatListPage.scss';
import ChatListPageTmpl from "./ChatListPage.tmpl.js";
import Handlebars from "handlebars";
import ChatList from "../../components/ChatList/ChatList.js";
const data = [
    {
        avatar: "",
        name: "Test name",
        lastMessageDate: "10:50",
        message: "123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we123we",
        uncheckedMessagesCount: 4
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 0
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 0
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 0
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 0
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 0
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
    {
        avatar: "",
        name: "Test name 2",
        lastMessageDate: "Пт",
        message: "скучное сообщение",
        uncheckedMessagesCount: 5
    },
]
export default function ChatListPage() {

    const template = Handlebars.compile(ChatListPageTmpl);
    const chatList = ChatList({data: data});
    return template({chatList})
}
