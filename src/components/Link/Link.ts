import LinkTmpl from './Link.tmpl';
import './Link.scss';
import Block from '../Block/Block';

export default class Link extends Block {
    constructor(props) {
        super('p', props);
    }

    render() {
        return this.compile(LinkTmpl, this.props);
    }
}
