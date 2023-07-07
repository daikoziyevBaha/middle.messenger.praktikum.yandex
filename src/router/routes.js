import LoginPage from "../pages/LoginPage/LoginPage.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import ChatListPage from "../pages/ChatListPage/ChatListPage.js";

export const routes = {
    '/': ChatListPage,
    '/login': LoginPage,
    '/register': RegisterPage,
}

