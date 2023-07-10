import ChatItemTmpl from "./ChatItem.tmpl.js";
import Handlebars from "handlebars";
import './ChatItem.scss';

export default function ChatItem({chat= {}}) {
    const template = Handlebars.compile(ChatItemTmpl);
    return template({...chat})
}