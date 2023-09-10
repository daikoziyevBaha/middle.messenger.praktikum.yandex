import Handlebars from "handlebars";
import { v4 as makeUUID } from 'uuid';
import Block from "../../utils/Block";
import InputTmpl from "./Input.tmpl";

export default class Input extends Block {
    static template = Handlebars.compile(InputTmpl);

    constructor(props) {
        super({
            ...props,
            id: props.id || makeUUID(),
            events: {
                blur: props.onBlur,
            },
        });
    }

    render() {
        return this.compile(Input.template, this.props);
    }
}
