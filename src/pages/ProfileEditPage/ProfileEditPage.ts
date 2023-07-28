import './ProfileEditPage.scss';
import ProfilePageTmpl from "./ProfileEditPage.tmpl";
import Handlebars from "handlebars";
import GoBack from "../../components/GoBackBlock/GoBack";
import ChangeAvatarForm from "../../components/Forms/ChangeAvatarForm/ChangeAvatar";
import ModalBlock from "../../components/ModalBlock/ModalBlock";
import Button from "../../components/Button/Button";
export default function ProfileEditPage() {
    const template = Handlebars.compile(ProfilePageTmpl)
    const GoBackBlock = GoBack({href: '/'})
    const changeAvatarForm = ChangeAvatarForm();
    const submitButton = Button({text: "Сохранить"})
    const ChangeAvatarModal = ModalBlock({content: changeAvatarForm})
    return template({GoBackBlock, ChangeAvatarModal, submitButton})
}
