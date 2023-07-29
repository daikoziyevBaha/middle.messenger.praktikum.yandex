import './ProfileEditPage.scss';
import ProfilePageTmpl from "./ProfileEditPage.tmpl.js";
import Handlebars from "handlebars";
import GoBack from "../../components/GoBackBlock/GoBack.js";
import ChangeAvatarForm from "../../components/Forms/ChangeAvatarForm/ChangeAvatar.js";
import ModalBlock from "../../components/ModalBlock/ModalBlock.js";
import Button from "../../components/Button/Button.js";
export default function ProfileEditPage() {
    const template = Handlebars.compile(ProfilePageTmpl)
    const GoBackBlock = GoBack({href: '/'})
    const changeAvatarForm = ChangeAvatarForm();
    const submitButton = Button({text: "Сохранить"})
    const ChangeAvatarModal = ModalBlock({content: changeAvatarForm})
    return template({GoBackBlock, ChangeAvatarModal, submitButton})
}
