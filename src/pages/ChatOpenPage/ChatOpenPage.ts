import './ChatOpenPage.scss';
import Handlebars from "handlebars";
import ChatList from "../../components/ChatList/ChatList";
import ChatOpenPageTmpl from "./ChatOpenPage.tmpl";
import ChatDetails from "../../components/ChatDetails/ChatDetails";
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
export default function ChatOpenPage() {
    const template = Handlebars.compile(ChatOpenPageTmpl);
    const chatDetails = ChatDetails();
    const chatList = ChatList({data: data});
    return template({chatList, chatDetails})
}
