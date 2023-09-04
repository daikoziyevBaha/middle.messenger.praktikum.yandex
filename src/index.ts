import './index.scss';
import routes from './router/routes';
import render from './utils/RenderDom';
import MainLayout from './layouts/MainLayout/MainLayout';
import registerComponent from "./utils/registerComponent";
import Link from "./components/Link/Link";
import Modal from "./components/Modal/Modal";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import Button from "./components/Button/Button";
import Input from "./ui/Input/Input";
import OutlinedInput from "./components/OutlinedInput/OutlinedInput";
import LoginForm from "./components/Forms/LoginForm/LoginForm";

registerComponent('Main', MainLayout);
registerComponent('Link', Link);
registerComponent('Modal', Modal);
registerComponent('RegisterForm', RegisterForm);
registerComponent('Button', Button);
registerComponent('Input', Input);
registerComponent('OutlinedInput', OutlinedInput);
registerComponent('LoginForm', LoginForm);

document.addEventListener('DOMContentLoaded', () => {
    const Page = routes[window.location.pathname];
    render('#app', new Page());
});
