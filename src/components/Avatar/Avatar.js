import './Avatar.scss';
import AvatarTmpl from "./Avatar.tmpl.js";
import Handlebars from "handlebars";
export default function Avatar({image}) {
    const template = Handlebars.compile(AvatarTmpl);
    return template({avatar: image})
}