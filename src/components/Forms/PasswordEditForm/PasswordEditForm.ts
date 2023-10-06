import Handlebars from "handlebars";
import './PasswordEditForm.scss';
import PasswordEditFormTmpl from './PasswordEditForm.tmpl';
import Block from "../../../utils/Block";
import { withStore } from "../../../utils/Store";
import isValid, { validationErrors } from "../../../utils/validators";
import ProfileController from "../../../controllers/ProfileController";
import { PasswordData } from "../../../api/ProfileApi";

class PasswordEditForm extends Block {
    static template = Handlebars.compile(PasswordEditFormTmpl);

    init() {
        this.props.fields = [
            {
                name: 'oldPassword',
                label: "Старый пароль",
                value: "",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'newPassword',
                label: "Новый пароль",
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
        this.props.events = {
            submit: this.onSubmit.bind(this),
        };
    }

    onBlur(e: FocusEvent | any) {
        const { name, value } = e.target;
        const valid = name === "passwordConfirmation"
            ? isValid(name, value, this.props.fields.find(field => field.name === 'newPassword').value)
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
                ? isValid(name, value, this.props.fields.find(item => item.name === 'newPassword').value)
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
            ProfileController
                .editPassword(data as unknown as PasswordData);
        } else {
            this.setProps({
                fields: newFields,
            });
        }
    }

    render() {
        return this.compile(PasswordEditForm.template, this.props);
    }
}

const withUser = withStore(state => ({ ...state.user }));

export default withUser(PasswordEditForm);
