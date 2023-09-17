import Handlebars from "handlebars";
import GoBackTmpl from './GoBack.tmpl';
import './GoBack.scss';
import Block from "../../utils/Block";

export default class GoBack extends Block {
    static template = Handlebars.compile(GoBackTmpl);

    render() {
        return this.compile(GoBack.template, {
            ...this.props,
            href: this.props.href || '/messenger',
        });
    }
}
