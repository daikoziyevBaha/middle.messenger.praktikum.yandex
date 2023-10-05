import Handlebars from "handlebars";
import './404.scss';
import NotFoundTmpl from './404.tmpl';
import Block from "../../utils/Block";

export default class NotFound extends Block {
    static template = Handlebars.compile(NotFoundTmpl);

    render() {
        return this.compile(NotFound.template, this.props);
    }
}
