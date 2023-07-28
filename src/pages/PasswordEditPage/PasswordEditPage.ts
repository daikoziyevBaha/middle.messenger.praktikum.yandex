import './PasswordEditPage.scss';
import ProfilePageTmpl from "./PasswordEditPage.tmpl";
import Handlebars from "handlebars";
import GoBack from "../../components/GoBackBlock/GoBack";
import ChangeAvatarForm from "../../components/Forms/ChangeAvatarForm/ChangeAvatar";
import ModalBlock from "../../components/ModalBlock/ModalBlock";
import Button from "../../components/Button/Button";
export default function PasswordEditPage() {
    const template = Handlebars.compile(ProfilePageTmpl)
    const GoBackBlock = GoBack({href: '/'})
    const changeAvatarForm = ChangeAvatarForm();
    const submitButton = Button({text: "Сохранить"})
    const ChangeAvatarModal = ModalBlock({content: changeAvatarForm})
    return template({GoBackBlock, ChangeAvatarModal, submitButton})
}
