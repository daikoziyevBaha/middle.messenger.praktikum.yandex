import Handlebars from 'handlebars';
import OutlinedInput from '../../OutlinedInput/OutlinedInput';
import Button from '../../Button/Button';
import LoginFormTmpl from './AddUserForm.tmpl';
import './AddUserForm.scss';

export default function AddUserForm() {
    const loginInput = OutlinedInput({
        label: 'Логин',
        value: '',
    });
    const authButton = Button({ text: 'Добавить' });
    const template = Handlebars.compile(LoginFormTmpl);
    return template({
        loginInput,
        authButton,
    });
}
