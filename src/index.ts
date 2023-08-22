import './index.scss';
// import routes from './router/routes';
// import render from './utils/RenderDom';
// import MainLayout from './layouts/MainLayout/MainLayout';
import Router from './router/Router';
import NavigationPage from './pages/Navigation/NavigationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { registerComponent } from './utils/Handlebars';
import Input from './ui/Input/Input';
// import getNavigationPage from './pages/Navigation/NavigationPage';

document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Input);
    const router = new Router('#app');
    router
        .use('/', NavigationPage)
        .use('/sign-in', LoginPage)
        .start();
    // const getPage = routes[window.location.pathname];
    // const app = new MainLayout({
    //     page: getPage(),
    // });
    // render('#app', app);
});
