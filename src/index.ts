import './index.scss';
import Handlebars from "handlebars";
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
import MessengerPage from "./pages/ChatListPage/ChatListPage";
import AvatarShort from "./components/AvatarShort/AvatarShort";
import ChatItem from "./components/ChatItem/ChatItem";
import ChatList from "./components/ChatList/ChatList";
import ChatDetails from "./components/ChatDetails/ChatDetails";
import SendMessageForm from "./components/Forms/SendMessageForm/SendMessageForm";
import AddUserForm from "./components/Forms/AddUserForm/AddUserForm";
import ChatOptions from "./components/ChatOptions/ChatOptions";
import DeleteUserForm from "./components/Forms/DeleteUserForm/DeleteUserForm";
import NotFound from "./pages/404/404";
import ServerError from "./pages/500/500";

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
registerComponent('AvatarShort', AvatarShort);
registerComponent('AvatarForm', ChangeAvatarForm);
registerComponent('FileInput', FileInput);
registerComponent('ProfileEditForm', ProfileEditForm);
registerComponent('PasswordEditForm', PasswordEditForm);
registerComponent('ChatItem', ChatItem);
registerComponent('ChatList', ChatList);
registerComponent('ChatDetails', ChatDetails);
registerComponent('SendMessageForm', SendMessageForm);
registerComponent('ChatOptions', ChatOptions);
registerComponent('AddUserForm', AddUserForm);
registerComponent('DeleteUserForm', DeleteUserForm);
// eslint-disable-next-line eqeqeq
Handlebars.registerHelper('eq', (a: any, b: any) => a == b);

document.addEventListener('DOMContentLoaded', async () => {
    router
        .use('/', NavigationPage)
        .use('/sign-in', LoginPage)
        .use('/sign-up', RegisterPage)
        .use('/settings', ProfilePage)
        .use('/profile-edit', ProfileEditPage)
        .use('/password-edit', PasswordEditPage)
        .use('/messenger', MessengerPage)
        .use('/404', NotFound)
        .use('/500', ServerError);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
        case '/':
        case 'sign-in':
        case 'sign-up':
            isProtectedRoute = false;
            break;
        case 'messenger':
        case 'settings':
        case 'profile-edit':
        case 'password-edit':
            isProtectedRoute = true;
            break;
        default:
            break;
    }

    try {
        await AuthController.fetchUser();
        router.start();
        if (!isProtectedRoute) {
            router.go('/messenger');
        }
    } catch (e) {
        if (isProtectedRoute) {
            router.go('/sign-in');
        }
        router.start();
    }
});
