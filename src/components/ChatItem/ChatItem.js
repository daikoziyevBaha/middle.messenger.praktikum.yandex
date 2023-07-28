import Handlebars from 'handlebars';
import ChatItemTmpl from './ChatItem.tmpl';
import './ChatItem.scss';
import Avatar from '../Avatar/Avatar';

export default function ChatItem({ chat = {} }) {
    const template = Handlebars.compile(ChatItemTmpl);
    const avatar = Avatar({ image: chat.avatar });
    return template({ ...chat, avatar });
}
