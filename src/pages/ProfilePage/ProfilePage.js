import './ProfilePage.scss';
import ProfilePageTmpl from "./ProfilePage.tmpl.js";
import Handlebars from "handlebars";
import GoBack from "../../components/GoBackBlock/GoBack.js";
import ChangeAvatarForm from "../../components/Forms/ChangeAvatarForm/ChangeAvatar.js";
import ModalBlock from "../../components/ModalBlock/ModalBlock.js";
export default function ProfilePage() {
    window.profile = {}
    window.profile.openChangeAvatarModal = () => {
        const modal = document.querySelector("#change-avatar-modal");
        modal.style.display = "block"
    }
    const template = Handlebars.compile(ProfilePageTmpl)
    const GoBackBlock = GoBack({href: '/'})
    const changeAvatarForm = ChangeAvatarForm();
    const ChangeAvatarModal = ModalBlock({content: changeAvatarForm})
    return template({GoBackBlock, ChangeAvatarModal})
}
