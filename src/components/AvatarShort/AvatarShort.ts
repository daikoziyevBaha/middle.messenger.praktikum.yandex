import Handlebars from "handlebars";
import './AvatarShort.scss';
import AvatarShortTmpl from './AvatarShort.tmpl';
import Block from "../../utils/Block";

export default class AvatarShort extends Block {
    static template = Handlebars.compile(AvatarShortTmpl);

    render() {
        return this.compile(AvatarShort.template, this.props);
    }
}
