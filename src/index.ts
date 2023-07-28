import './index.scss';
import routes from './router/routes';
import render from './utils/RenderDom';

document.addEventListener('DOMContentLoaded', () => {
    const component = routes[window.location.pathname];
    render('#app', component);
});

// const button = new Button({
//     className: 'test',
//     child: 'Click me',
//     events: {
//         click: (event) => {
//             // eslint-disable-next-line no-console
//             console.log('click', event);
//         },
//     },
// });
