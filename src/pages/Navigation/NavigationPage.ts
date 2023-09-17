import Handlebars from "handlebars";
import './Navigation.scss';
import NavigationPageTmpl from './NavigationPage.tmpl';
import Block from "../../utils/Block";

class NavigationPage extends Block {
    init() {
        this.props.links = [
            {
                href: '/sign-in',
                text: '\'/login\': LoginPage',
            },
            {
                href: '/sign-up',
                text: '\'/sign-up\': RegisterPage',
            },
            {
                href: '/settings',
                text: '\'/settings\': ProfilePage',
            },
            {
                href: '/profile-edit',
                text: '\'/profile-edit\': ProfileEditPage',
            },
            {
                href: '/password-edit',
                text: '\'/profile-edit\': PasswordEditPage',
            },
            {
                href: '/messenger',
                text: '/messenger: Messenger',
            },
        ];
    }

    render() {
        return this.compile(Handlebars.compile(NavigationPageTmpl), this.props);
    }
}

export default NavigationPage;
