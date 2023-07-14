import ChatItemTmpl from "./ChatItem.tmpl.js";
import Handlebars from "handlebars";
import './ChatItem.scss';
import Avatar from "../Avatar/Avatar.js";

export default function ChatItem({chat= {}}) {

    const template = Handlebars.compile(ChatItemTmpl);
    const avatar = Avatar({image: chat.avatar});
    return template({...chat, avatar})
}
