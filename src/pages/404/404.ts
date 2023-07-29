import './404.scss';
import NotFoundTmpl from './404.tmpl';
import Block from '../../components/Block/Block';

export default class NotFound extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(NotFoundTmpl, this.props);
    }
}
