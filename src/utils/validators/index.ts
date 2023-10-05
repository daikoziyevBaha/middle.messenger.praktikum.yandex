import validateEmail from './validateEmail';
import validateLogin from './validateLogin';
import validateName from './validateName';
import validatePhoneNumber from './validatePhone';
import validatePassword from './validatePassword';
import validatePasswordConfirmation from "./validatePasswordConfirmation";

const getValidatorByName = {
    email: validateEmail,
    login: validateLogin,
    first_name: validateName,
    display_name: validateName,
    second_name: validateName,
    phone: validatePhoneNumber,
    password: validatePassword,
    oldPassword: validatePassword,
    newPassword: validatePassword,
    passwordConfirmation: validatePasswordConfirmation,
};

export const validationErrors = {
    email: 'Неверная почта',
    login: 'Неверный логин',
    first_name: 'Неверное имя',
    display_name: 'Неверное имя',
    second_name: 'Неверная фамилия',
    phone: 'Неверный номер',
    password: 'Неверный пароль',
    oldPassword: 'Неверный пароль',
    newPassword: 'Неверный пароль',
    passwordConfirmation: 'Пароли не совпадают',
};

export default function isValid(name: string, value: File | string, value2: string = ''): boolean {
    if (name === 'passwordConfirmation') {
        return !!validatePasswordConfirmation(value, value2);
    }
    return !!getValidatorByName[name](value);
}
