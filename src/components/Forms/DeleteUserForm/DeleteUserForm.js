import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";
import Handlebars from "handlebars";
import LoginFormTmpl from "./DeleteUserForm.tmpl.js";
import './DeleteUserForm.scss';

export default function DeleteUserForm() {
    const loginInput = Input({
        label: 'Логин',
        value: '',
    });
    const authButton = Button({text: 'Удалить'});
    const template = Handlebars.compile(LoginFormTmpl);
    return template({
        loginInput: loginInput,
        authButton: authButton,
    });
}
