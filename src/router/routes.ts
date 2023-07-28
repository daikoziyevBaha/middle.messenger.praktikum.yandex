import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ChatListPage from '../pages/ChatListPage/ChatListPage';
import ChatOpenPage from '../pages/ChatOpenPage/ChatOpenPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileEditPage from '../pages/ProfileEditPage/ProfileEditPage';
import PasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
import NotFound from '../pages/404/404';
import ServerError from '../pages/500/500';
import NavigationPage from '../pages/Navigation/NavigationPage';
import Block from '../components/Block/Block';
import OutlinedInput from '../components/OutlinedInput/OutlinedInput';
import Input from '../ui/Input/Input';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import Button from '../components/Button/Button';
import getLoginPage from "../pages/LoginPage/LoginPage";
import getRegisterPage from "../pages/RegisterPage/RegisterPage";
import getProfilePage from "../pages/ProfilePage/ProfilePage";

type Routes = {
    [key: string]: Block | Function
}
const routes: Routes = {
    '/': new NavigationPage(),
    '/chats': ChatListPage,
    '/chats/1': ChatOpenPage,
    '/login': getLoginPage(),
    '/register': getRegisterPage(),
    '/profile': getProfilePage(),
    '/profile/edit': ProfileEditPage,
    '/profile/change-password': PasswordEditPage,
    '/404': NotFound,
    '/500': ServerError,
    '/test': getLoginPage(),
};

export default routes;
