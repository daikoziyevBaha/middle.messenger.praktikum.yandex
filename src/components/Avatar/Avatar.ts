import Handlebars from "handlebars";
import './Avatar.scss';
import AvatarTmpl from './Avatar.tmpl';
import Block from "../../utils/Block";

export default class Avatar extends Block {
    static template = Handlebars.compile(AvatarTmpl);

    init() {
        this.props.events = {
            click: e => {
                this.setProps({
                    open: true,
                });
            },
        };
        this.props.onClose = () => {
            this.setProps({
                open: false,
            });
        };
    }

    render() {
        return this.compile(Avatar.template, this.props);
    }
}
