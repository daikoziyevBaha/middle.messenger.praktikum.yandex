import Handlebars from "handlebars";
import MainLayoutTmpl from './MainLayout.tmpl';
import Block from "../../utils/Block";

export default class MainLayout extends Block {
    static template = Handlebars.compile(MainLayoutTmpl);

    render() {
        return this.compile(MainLayout.template, this.props);
    }
}
