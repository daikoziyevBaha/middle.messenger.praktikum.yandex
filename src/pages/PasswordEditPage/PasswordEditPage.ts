import Handlebars from "handlebars";
import './PasswordEditPage.scss';
import { withStore } from "../../utils/Store";
import Block from "../../utils/Block";
import PasswordEditPageTmpl from "./PasswordEditPage.tmpl";

class PasswordEditPage extends Block {
    static template = Handlebars.compile(PasswordEditPageTmpl);

    render() {
        return this.compile(PasswordEditPage.template, this.props);
    }
}

const withUser = withStore(state => ({ avatar: state.user.avatar }));

export default withUser(PasswordEditPage);
