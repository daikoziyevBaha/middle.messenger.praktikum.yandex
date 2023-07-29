import './index.scss';
import routes from './router/routes';
import render from './utils/RenderDom';

document.addEventListener('DOMContentLoaded', () => {
    const component = routes[window.location.pathname];
    render('#app', component());
});
