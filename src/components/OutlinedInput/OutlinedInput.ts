import Handlebars from "handlebars";
import InputTmpl from './OutlinedInput.tmpl';
import './OutlinedInput.scss';
import Block from "../../utils/Block";

export default class OutlinedInput extends Block {
    static template = Handlebars.compile(InputTmpl);

    render() {
        return this.compile(OutlinedInput.template, this.props);
    }
}
