// import NotFound from '../pages/404/404';
// import ServerError from '../pages/500/500';
// import getLoginPage from '../pages/LoginPage/LoginPage';
// import getRegisterPage from '../pages/RegisterPage/RegisterPage';
// import getProfilePage from '../pages/ProfilePage/ProfilePage';
// import getProfileEditPage from '../pages/ProfileEditPage/ProfileEditPage';
// import getPasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
// import getChatListPage from '../pages/ChatListPage/ChatListPage';
// import getChatOpenPage from '../pages/ChatOpenPage/ChatOpenPage';
import NavigationPage from "../pages/Navigation/NavigationPage";
import Block from "../utils/Block";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

type Routes = {
    [key: string]: typeof Block
}
const routes: Routes = {
    '/': NavigationPage,
    '/sign-up': RegisterPage,
    '/sign-in': LoginPage,
};

export default routes;
