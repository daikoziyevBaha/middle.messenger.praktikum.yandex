import LinkTmpl from "./Link.tmpl.js";
import Handlebars from "handlebars";
import './Link.scss';

export default function Link({href='#', text=''}) {
    const template = Handlebars.compile(LinkTmpl);
    const link = template({href, text})
    return link;
}
