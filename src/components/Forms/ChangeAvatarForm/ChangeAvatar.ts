import Handlebars from "handlebars";
import './ChangeAvatar.scss';
import ChangeAvatarTmpl from './ChangeAvatar.tmpl';
import Block from "../../../utils/Block";
import ProfileController from "../../../controllers/ProfileController";

export default class ChangeAvatarForm extends Block {
    static template = Handlebars.compile(ChangeAvatarTmpl);

    init() {
        this.props = {
            events: {
                submit: this.onSubmit.bind(this),
            },
        };
        this.props.error = "";
        this.props.requestError = "";
    }

    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData(e.target);
        const avatar = formData.get("avatar");
        if (avatar instanceof File) {
            if (!avatar.name) {
                this.setProps({
                    error: "Нужно выбрать файл",
                });
            } else {
                ProfileController
                    .editAvatar(formData)
                    .catch(() => this.setProps({ requestError: true }));
            }
        }
    }

    render() {
        return this.compile(ChangeAvatarForm.template, this.props);
    }
}
