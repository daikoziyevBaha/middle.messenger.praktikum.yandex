import Handlebars from "handlebars";
import RegisterFormTmpl from './RegisterForm.tmpl';
import './RegisterForm.scss';
import Block from "../../../utils/Block";
import isValid, { validationErrors } from "../../../utils/validators";
import UserAPI from "./api/register-api";

export default class RegisterForm extends Block {
    static template = Handlebars.compile(RegisterFormTmpl);

    userController = new UserAPI();

    init() {
        this.props.fields = [
            {
                name: 'email',
                label: "Почта",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'login',
                label: "Логин",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'first_name',
                label: "Имя",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'second_name',
                label: "Фамилия",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'phone',
                label: "Номер телефона",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'password',
                label: "Пароль",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'passwordConfirmation',
                label: "Повторите пароль",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
        ];
        this.props.onSubmit = this.onSubmit.bind(this);
        this.props.events = {
            submit: this.onSubmit.bind(this),
        };
    }

    onBlur(e: FocusEvent | any) {
        const { name, value } = e.target;
        const valid = name === "passwordConfirmation"
            ? isValid(name, value, this.props.fields.find(field => field.name === 'password').value)
            : isValid(name, value);
        if (!valid) {
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
            const valid = name === "passwordConfirmation"
                ? isValid(name, value, this.props.fields.find(item => item.name === 'password').value)
                : isValid(name, value);
            if (!valid) {
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
            delete data.passwordConfirmation;
            this.userController
                .create(data);
        } else {
            this.setProps({
                fields: newFields,
            });
        }
    }

    render() {
        return this.compile(RegisterForm.template, this.props);
    }
}
