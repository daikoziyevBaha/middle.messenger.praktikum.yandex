import './FileInput.scss';
import FileInputTmpl from './FileInput.tmpl';
import Block from '../Block/Block';

export default class FileInput extends Block {
    constructor(props) {
        super('label', props);
    }

    render() {
        return this.compile(FileInputTmpl, this.props);
    }
}

// export default function FileInput({
//     value = '',
//     label = '',
// }) {
//     const template = Handlebars.compile(FileInputTmpl);
//     return template({
//         value, label,
//     });
// }
