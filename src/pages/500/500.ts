import './500.scss';
import ServerErrorTmpl from './500.tmpl';
import Block from '../../components/Block/Block';

export default class ServerError extends Block {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ServerErrorTmpl, this.props);
    }
}
