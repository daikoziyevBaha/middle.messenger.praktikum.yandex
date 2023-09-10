import Handlebars from "handlebars";
import Block from "../../utils/Block";
import LinkTmpl from "./Link.tmpl";
import router from "../../utils/Router";

export default class Link extends Block {
    static template = Handlebars.compile(LinkTmpl);

    init() {
        this.props.events = {
            click: (e: MouseEvent) => {
                e.preventDefault();
                if (Object.hasOwn(this.props, "onClick")) {
                    this.props.onClick();
                }
                router.go(this.props.href);
            },
        };
    }

    render() {
        return this.compile(Link.template, this.props);
    }
}
