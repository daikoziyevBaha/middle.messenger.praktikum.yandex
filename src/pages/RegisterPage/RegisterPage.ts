import Handlebars from "handlebars";
import Block from "../../utils/Block";
import RegisterPageTmpl from "./RegisterPage.tmpl";
import './RegisterPage.scss';
import router from "../../utils/Router";
import { withStore } from "../../utils/Store";

class RegisterPage extends Block {
    static template = Handlebars.compile(RegisterPageTmpl);

    init() {
        if (this.props.user) {
            router.go('/messenger');
        }
    }

    render() {
        return this.compile(RegisterPage.template, this.props);
    }
}

const withUser = withStore(state => ({ user: state.user }));

export default withUser(RegisterPage);
