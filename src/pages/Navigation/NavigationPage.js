import './Navigation.scss';
import Handlebars from "handlebars";
import NavigationPageTmpl from "./NavigationPage.tmpl.js";
export default function NavigationPage() {
    const template = Handlebars.compile(NavigationPageTmpl);
    return template({});
}