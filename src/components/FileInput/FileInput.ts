import Handlebars from "handlebars";
import './FileInput.scss';
import FileInputTmpl from './FileInput.tmpl';
import Block from "../../utils/Block";

export default class FileInput extends Block {
    static template = Handlebars.compile(FileInputTmpl);

    init() {
        this.props.clickHandled = false;
        this.props.events = {
            click: e => {
                if (!this.props.clickHandled) {
                    this.setProps({
                        clickHandled: true,
                    });
                    this.refs.input.setProps({
                        events: {
                            change: this.onChange.bind(this),
                        },
                    });
                    const input = this.getContent().querySelector("#file_input_id") as HTMLElement;
                    input.click();
                }
            },
        };
    }

    onChange(event) {
        const input = event.target;
        const selectedFile = input.files[0].name;
        if (selectedFile) {
            this.setProps({
                label: selectedFile,
            });
        }
    }

    render() {
        return this.compile(FileInput.template, this.props);
    }
}
