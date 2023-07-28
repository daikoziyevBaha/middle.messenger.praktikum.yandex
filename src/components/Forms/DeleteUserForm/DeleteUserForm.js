import Handlebars from 'handlebars';
import OutlinedInput from '../../OutlinedInput/OutlinedInput';
import Button from '../../Button/Button';
import LoginFormTmpl from './DeleteUserForm.tmpl';
import './DeleteUserForm.scss';

export default function DeleteUserForm() {
    const loginInput = OutlinedInput({
        label: 'Логин',
        value: '',
    });
    const authButton = Button({ text: 'Удалить' });
    const template = Handlebars.compile(LoginFormTmpl);
    return template({
        loginInput,
        authButton,
    });
}
