import Handlebars from "handlebars";
import Block from "../../utils/Block";
import InputTmpl from "./Input.tmpl";

export default class Input extends Block {
    static template = Handlebars.compile(InputTmpl);

    constructor(props) {
        super({
            ...props,
            events: {
                blur: props.onBlur,
            },
        });
    }

    render() {
        return this.compile(Input.template, this.props);
    }
}
