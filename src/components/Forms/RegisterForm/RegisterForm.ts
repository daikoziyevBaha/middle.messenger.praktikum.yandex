import Handlebars from "handlebars";
import RegisterFormTmpl from './RegisterForm.tmpl';
import './RegisterForm.scss';
import Block from "../../../utils/Block";

export default class RegisterForm extends Block {
    static template = Handlebars.compile(RegisterFormTmpl);

    init() {
        this.props.fields = [
            {
                name: 'email',
                // TODO: input objects
            },
        ];
        this.props.onSubmit = (e: MouseEvent) => {
            e.preventDefault();
            console.log("RegisterForm");
        };
    }

    render() {
        return this.compile(RegisterForm.template, this.props);
    }
}
