import Handlebars from "handlebars";
import './ProfilePage.scss';
import ProfilePageTmpl from './ProfilePage.tmpl';
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import router from "../../utils/Router";

// eslint-disable-next-line no-shadow
enum ProfileLabels {
    first_name="Имя",
    second_name="Фамилия",
    login="Логин",
    email="Почта",
    phone="Телефон"
}

class ProfilePage extends Block {
    static template = Handlebars.compile(ProfilePageTmpl);

    init() {
        const user = { ...this.props };
        delete user.id;
        delete user.avatar;
        delete user.display_name;
        this.props.fields = Object.entries(user).map(field => ({
            key: ProfileLabels[field[0]],
            value: field[1],
        }));
        this.props.onClick = this.onLogout.bind(this);
    }

    onLogout() {
        AuthController
            .logout();
        router.go('/login');
    }

    render() {
        return this.compile(ProfilePage.template, this.props);
    }
}

const withUser = withStore(state => ({ ...state.user }));

export default withUser(ProfilePage);
