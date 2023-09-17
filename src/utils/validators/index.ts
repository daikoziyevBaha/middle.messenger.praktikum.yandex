import validateEmail from './validateEmail';
import validateLogin from './validateLogin';
import validateName from './validateName';
import validatePhoneNumber from './validatePhone';
import validatePassword from './validatePassword';

const getValidator = {
    email: validateEmail,
    login: validateLogin,
    first_name: validateName,
    second_name: validateName,
    phone: validatePhoneNumber,
    password: validatePassword,
};

export default function isValid(name: string, value: File | string): boolean {
    if (getValidator[name](value)) {
        return true;
    }
    return false;
}
