// import LinkTmpl from './Link.tmpl';
// import './Link.scss';
// import OldBlock from '../Block/OldBlock';
//
// export default class Link extends OldBlock {
//     constructor(props) {
//         super('p', props);
//     }
//
//     render() {
//         return this.compile(LinkTmpl, this.props);
//     }
// }
import Handlebars from "handlebars";
import Block from "../../utils/Block";
import LinkTmpl from "./Link.tmpl";

export default class Link extends Block {
    static template = Handlebars.compile(LinkTmpl);

    render() {
        return this.compile(Link.template, this.props);
    }
}
