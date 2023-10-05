import Handlebars from "handlebars";
import Block from "../../utils/Block";
import RegisterPageTmpl from "./LoginPage.tmpl";
import './LoginPage.scss';
import { withStore } from "../../utils/Store";
import router from "../../utils/Router";

class LoginPage extends Block {
    static template = Handlebars.compile(RegisterPageTmpl);

    init() {
        if (this.props.user) {
            router.go('/messenger');
        }
    }

    render() {
        return this.compile(LoginPage.template, this.props);
    }
}

const withUser = withStore(state => ({ user: state.user }));

export default withUser(LoginPage);
