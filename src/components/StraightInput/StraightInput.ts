import Handlebars from "handlebars";
import StraightInputTmpl from './StraightInput.tmpl';
import './StraightInput.scss';
import Block from "../../utils/Block";

export default class StraightInput extends Block {
    static template = Handlebars.compile(StraightInputTmpl);

    render() {
        return this.compile(StraightInput.template, this.props);
    }
}
