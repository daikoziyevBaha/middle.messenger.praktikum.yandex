import './ChangeAvatar.scss';
import ChangeAvatarTmpl from './ChangeAvatar.tmpl';
import Block from '../../Block/Block';

export default class ChangeAvatarForm extends Block {
    constructor(props) {
        super('form', props);
    }

    render() {
        return this.compile(ChangeAvatarTmpl, this.props);
    }
}

// export default function ChangeAvatarForm() {
//     const fileInput = FileInput({ label: 'Выбрать файл на компьютере' });
//     const submitButton = Button({ text: 'Поменять' });
//     const template = Handlebars.compile(ChangeAvatarTmpl);
//     return template({ fileInput, submitButton });
// }
