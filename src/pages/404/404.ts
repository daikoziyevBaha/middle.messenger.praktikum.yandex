import './404.scss';
import NotFoundTmpl from './404.tmpl';
import OldBlock from '../../components/Block/OldBlock';

export default class NotFound extends OldBlock {
    constructor(props) {
        super('div', props);
    }

    render() {
        return this.compile(NotFoundTmpl, this.props);
    }
}
