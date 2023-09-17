import Handlebars from "handlebars";
import './ProfileEditPage.scss';
import ProfileEditPageTmpl from './ProfileEditPage.tmpl';
import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";

class ProfileEditPage extends Block {
    static template = Handlebars.compile(ProfileEditPageTmpl);

    render() {
        return this.compile(ProfileEditPage.template, this.props);
    }
}

const withUser = withStore(state => ({ avatar: state.user.avatar }));

export default withUser(ProfileEditPage);
