import Handlebars from "handlebars";
import LoginFormTmpl from './LoginForm.tmpl';
import './LoginForm.scss';
import Block from "../../../utils/Block";
import isValid, { validationErrors } from "../../../utils/validators";
import UserAPI from "./api/login-api";

export default class LoginForm extends Block {
    static template = Handlebars.compile(LoginFormTmpl);

    userController = new UserAPI();

    init() {
        this.props.fields = [
            {
                name: 'login',
                label: 'Логин',
                type: 'text',
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'password',
                label: 'Пароль',
                type: 'password',
                onBlur: this.onBlur.bind(this),
            },
        ];
        this.props.events = {
            submit: this.onSubmit.bind(this)
        };
    }

    onBlur(e: FocusEvent | any) {
        const { name, value } = e.target;
        if (!isValid(name, value)) {
            const newFields = this.props.fields.map(field => {
                if (field.name === name) {
                    return {
                        ...field,
                        value,
                        error: validationErrors[name],
                    };
                }
                return field;
            });
            this.setProps({
                fields: newFields,
            });
        } else {
            const newFields = this.props.fields.map(field => {
                if (field.name === name) {
                    return {
                        ...field,
                        value,
                        error: '',
                    };
                }
                return field;
            });
            this.setProps({
                fields: newFields,
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let isFormValid = true;
        const newFields = this.props.fields.map(field => {
            const { name, value } = field;
            if (!isValid(name, value)) {
                isFormValid = false;
                if (field.name === name) {
                    return {
                        ...field,
                        value,
                        error: validationErrors[name],
                    };
                }
            }
            return field;
        });
        if (isFormValid) {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            this.userController
                .request(data);
        } else {
            this.setProps({
                fields: newFields,
            });
        }
    }

    render() {
        return this.compile(LoginForm.template, this.props);
    }
}
