import './RegisterPage.scss';
import Handlebars from "handlebars";
import Modal from "../../components/Modal/Modal.js";
import registerPageTmpl from "./RegisterPage.tmpl.js";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm.js";

export default function RegisterPage() {
    const template = Handlebars.compile(registerPageTmpl);
    const registerForm = RegisterForm();
    const registerModal = Modal({content: registerForm});
    return template({registerModal});
}