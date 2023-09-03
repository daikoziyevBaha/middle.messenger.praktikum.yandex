import './500.scss';
import ServerErrorTmpl from './500.tmpl';
import OldBlock from '../../components/Block/OldBlock';

export default class ServerError extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(ServerErrorTmpl, this.props);
    }
}
