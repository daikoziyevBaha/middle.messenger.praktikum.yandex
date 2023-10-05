import Handlebars from "handlebars";
import ButtonTmpl from './Button.tmpl';
import './Button.scss';
import Block from "../../utils/Block";

export default class Button extends Block {
    static template = Handlebars.compile(ButtonTmpl);

    constructor(props) {
        super({
            ...props,
            events: {
                click: props.onClick,
            },
        });
    }

    render() {
        return this.compile(Button.template, this.props);
    }
}
