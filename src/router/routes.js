import LoginPage from "../pages/LoginPage/LoginPage.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import ChatListPage from "../pages/ChatListPage/ChatListPage.js";
import ChatOpenPage from "../pages/ChatOpenPage/ChatOpenPage.js";
import ProfilePage from "../pages/ProfilePage/ProfilePage.js";
import ProfileEditPage from "../pages/ProfileEditPage/ProfileEditPage.js";
import PasswordEditPage from "../pages/PasswordEditPage/PasswordEditPage.js";
import NotFound from "../pages/404/404.js";
import ServerError from "../pages/500/500.js";
import NavigationPage from "../pages/Navigation/NavigationPage.js";

export const routes = {
    '/': NavigationPage,
    '/chats': ChatListPage,
    '/chats/1': ChatOpenPage,
    '/login': LoginPage,
    '/register': RegisterPage,
    '/profile': ProfilePage,
    '/profile/edit': ProfileEditPage,
    '/profile/change-password': PasswordEditPage,
    '/404': NotFound,
    '/500': ServerError
}

