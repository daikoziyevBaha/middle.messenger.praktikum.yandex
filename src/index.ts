import './index.scss';
import routes from './router/routes';
import render from './utils/RenderDom';
import MainLayout from './layouts/MainLayout/MainLayout';

document.addEventListener('DOMContentLoaded', () => {
    const getPage = routes[window.location.pathname];
    const app = new MainLayout({
        page: getPage(),
    });
    render('#app', app);
});
