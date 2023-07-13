import './ChangeAvatar.scss';
import Handlebars from "handlebars";
import ChangeAvatarTmpl from "./ChangeAvatar.tmpl.js";
import FileInput from "../../FileInput/FileInput.js";
import Button from "../../Button/Button.js";
export default function ChangeAvatarForm() {
    const fileInput = FileInput({label: "Выбрать файл на компьютере"});
    const submitButton = Button({text: "Поменять"})
    const template = Handlebars.compile(ChangeAvatarTmpl);
    return template({fileInput, submitButton})
}