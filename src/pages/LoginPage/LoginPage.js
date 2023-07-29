import './LoginPage.scss';
import Handlebars from "handlebars";
import loginPageTmpl from "./LoginPage.tmpl.js";
import Modal from "../../components/Modal/Modal.js";
import LoginForm from "../../components/Forms/LoginForm/LoginForm.js";

export default function LoginPage() {
    const template = Handlebars.compile(loginPageTmpl);
    const loginForm = LoginForm();
    const loginModal = Modal({content: loginForm});
    return template({loginModal});
}
