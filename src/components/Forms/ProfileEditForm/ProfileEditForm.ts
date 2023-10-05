import Handlebars from "handlebars";
import ProfileEditTmpl from './ProfileEdit.tmplForm';
import './ProfileEditForm.scss';
import Block from "../../../utils/Block";
import { withStore } from "../../../utils/Store";
import isValid, { validationErrors } from "../../../utils/validators";
import { SignupData } from "../../../api/AuthApi";
import ProfileController from "../../../controllers/ProfileController";
import isEqual from "../../../services/isEqual";

class ProfileEditForm extends Block {
    static template = Handlebars.compile(ProfileEditTmpl);

    init() {
        this.props.fields = [
            {
                name: 'email',
                label: "Почта",
                value: this.props.email || "---",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'login',
                label: "Логин",
                value: this.props.login || "---",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'first_name',
                label: "Имя",
                value: this.props.first_name || "---",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'second_name',
                label: "Фамилия",
                value: this.props.second_name || "---",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'display_name',
                label: "Имя в чате",
                value: this.props.display_name || "---",
                onBlur: this.onBlur.bind(this),
            },
            {
                name: 'phone',
                label: "Номер телефона",
                value: this.props.phone || "---",
                onBlur: this.onBlur.bind(this),
            },
        ];
        this.props.events = {
            submit: this.onSubmit.bind(this),
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
            delete data.passwordConfirmation;
            const prevState = {
                first_name: this.props.first_name,
                second_name: this.props.second_name,
                email: this.props.email,
                phone: this.props.phone,
                login: this.props.login,
                display_name: this.props.display_name,
            };
            if (isEqual(prevState, data)) {
                return;
            }
            ProfileController
                .editProfile(data as unknown as SignupData);
        } else {
            this.setProps({
                fields: newFields,
            });
        }
    }

    render() {
        return this.compile(ProfileEditForm.template, this.props);
    }
}

const withUser = withStore(state => ({ ...state.user }));

export default withUser(ProfileEditForm);
