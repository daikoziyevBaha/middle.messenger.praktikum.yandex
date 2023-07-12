import LoginPage from "../pages/LoginPage/LoginPage.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import ChatListPage from "../pages/ChatListPage/ChatListPage.js";
import ChatOpenPage from "../pages/ChatOpenPage/ChatOpenPage.js";
import ProfilePage from "../pages/ProfilePage/ProfilePage.js";

export const routes = {
    '/': ChatListPage,
    '/1': ChatOpenPage,
    '/login': LoginPage,
    '/register': RegisterPage,
    '/profile': ProfilePage
}

