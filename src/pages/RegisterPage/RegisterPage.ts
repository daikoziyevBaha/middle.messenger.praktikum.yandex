import Handlebars from "handlebars";
import Block from "../../utils/Block";
import RegisterPageTmpl from "./RegisterPage.tmpl";
import './RegisterPage.scss';

export default class RegisterPage extends Block {
    static template = Handlebars.compile(RegisterPageTmpl);

    render() {
        return this.compile(RegisterPage.template, this.props);
    }
}
