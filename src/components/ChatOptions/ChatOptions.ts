import Handlebars from "handlebars";
import Block from "../../utils/Block";
import ChatOptionsTmpl from "./ChatOptions.tmpl";

class ChatOptions extends Block {
    static template = Handlebars.compile(ChatOptionsTmpl);

    init() {
        this.props.open = false;
        this.props.events = {
            click: this.onClick.bind(this),
        };
        this.props.onCloseActionModal = this.onCloseActionModal.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        const element = e.target.getAttribute("data-element");
        let actionModal = false;
        let action = null;
        if (element) {
            if (element === "add") {
                action = "add";
            } else {
                action = "delete";
            }
            actionModal = true;
        }
        this.setProps({
            open: !this.props.open,
            action,
            actionModal,
        });
    }

    onCloseActionModal() {
        this.setProps({
            actionModal: false,
        });
    }

    render() {
        return this.compile(ChatOptions.template, {
            ...this.props,
        });
    }
}

export default ChatOptions;
