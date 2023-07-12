import './ProfilePage.scss';
import ProfilePageTmpl from "./ProfilePage.tmpl.js";
import Handlebars from "handlebars";
import GoBack from "../../components/GoBackBlock/GoBack.js";
export default function ProfilePage() {
    const template = Handlebars.compile(ProfilePageTmpl)
    const GoBackBlock = GoBack({href: '/'})
    return template({GoBackBlock})
}