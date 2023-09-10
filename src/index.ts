import './index.scss';
import MainLayout from './layouts/MainLayout/MainLayout';
import registerComponent from "./utils/registerComponent";
import Link from "./components/Link/Link";
import Modal from "./components/Modal/Modal";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import Button from "./components/Button/Button";
import Input from "./ui/Input/Input";
import OutlinedInput from "./components/OutlinedInput/OutlinedInput";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import NavigationPage from "./pages/Navigation/NavigationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import router from "./utils/Router";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthController from "./controllers/AuthController";
import GoBack from "./components/GoBackBlock/GoBack";
import Avatar from "./components/Avatar/Avatar";
import ChangeAvatarForm from "./components/Forms/ChangeAvatarForm/ChangeAvatar";
import ModalBlock from "./components/ModalBlock/ModalBlock";
import FileInput from "./components/FileInput/FileInput";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import StraightInput from "./components/StraightInput/StraightInput";
import ProfileEditForm from "./components/Forms/ProfileEditForm/ProfileEditForm";
import PasswordEditForm from "./components/Forms/PasswordEditForm/PasswordEditForm";
import PasswordEditPage from "./pages/PasswordEditPage/PasswordEditPage";

registerComponent('Main', MainLayout);
registerComponent('Link', Link);
registerComponent('Modal', Modal);
registerComponent('ModalWindow', ModalBlock);
registerComponent('RegisterForm', RegisterForm);
registerComponent('Button', Button);
registerComponent('Input', Input);
registerComponent('StraightInput', StraightInput);
registerComponent('OutlinedInput', OutlinedInput);
registerComponent('LoginForm', LoginForm);
registerComponent('GoBack', GoBack);
registerComponent('Avatar', Avatar);
registerComponent('AvatarForm', ChangeAvatarForm);
registerComponent('FileInput', FileInput);
registerComponent('ProfileEditForm', ProfileEditForm);
registerComponent('PasswordEditForm', PasswordEditForm);

document.addEventListener('DOMContentLoaded', async () => {
    router
        .use('/', NavigationPage)
        .use('/sign-in', LoginPage)
        .use('/sign-up', RegisterPage)
        .use('/profile', ProfilePage)
        .use('/profile-edit', ProfileEditPage)
        .use('/password-edit', PasswordEditPage);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case '/':
        case 'sign-up':
            isProtectedRoute = false;
            break;
        default:
            break;
    }

    try {
        await AuthController.fetchUser();
        router.start();
        if (!isProtectedRoute) {
            router.go('/profile');
        }
    } catch (e) {
        router.start();

        if (isProtectedRoute) {
            router.go('/');
        }
    }
});
