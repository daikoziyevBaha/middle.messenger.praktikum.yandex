import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";
import Handlebars from "handlebars";
import LoginFormTmpl from "./AddUserForm.tmpl.js";
import './AddUserForm.scss';

export default function AddUserForm() {
    const loginInput = Input({
        label: 'Логин',
        value: '',
    });
    const authButton = Button({text: 'Добавить'});
    const template = Handlebars.compile(LoginFormTmpl);
    return template({
        loginInput: loginInput,
        authButton: authButton,
    });
}
