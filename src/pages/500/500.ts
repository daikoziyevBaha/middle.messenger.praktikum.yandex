import Handlebars from "handlebars";
import './500.scss';
import ServerErrorTmpl from './500.tmpl';
import Block from "../../utils/Block";

export default class ServerError extends Block {
    static template = Handlebars.compile(ServerErrorTmpl);

    render() {
        return this.compile(ServerError.template, this.props);
    }
}
