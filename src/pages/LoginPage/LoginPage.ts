import Handlebars from "handlebars";
import Block from "../../utils/Block";
import RegisterPageTmpl from "./LoginPage.tmpl";
import './LoginPage.scss';

export default class LoginPage extends Block {
    static template = Handlebars.compile(RegisterPageTmpl);

    render() {
        return this.compile(LoginPage.template, this.props);
    }
}
