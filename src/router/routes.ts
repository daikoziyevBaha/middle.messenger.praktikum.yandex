import NotFound from '../pages/404/404';
import ServerError from '../pages/500/500';
import getLoginPage from '../pages/LoginPage/LoginPage';
import getRegisterPage from '../pages/RegisterPage/RegisterPage';
import getProfilePage from '../pages/ProfilePage/ProfilePage';
import getProfileEditPage from '../pages/ProfileEditPage/ProfileEditPage';
import getPasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
import getChatListPage from '../pages/ChatListPage/ChatListPage';
import getChatOpenPage from '../pages/ChatOpenPage/ChatOpenPage';
import getNavigationPage from '../pages/Navigation/NavigationPage';

type Routes = {
    [key: string]: Function
}
const routes: Routes = {
    '/': getNavigationPage,
    '/chats': getChatListPage,
    '/chats/1': getChatOpenPage,
    '/login': getLoginPage,
    '/register': getRegisterPage,
    '/profile': getProfilePage,
    '/profile/edit': getProfileEditPage,
    '/profile/change-password': getPasswordEditPage,
    '/404': () => new NotFound({
        attr: {
            class: 'error-container',
        },
    }),
    '/500': () => new ServerError({
        attr: {
            class: 'error-container',
        },
    }),
};

export default routes;
