import Block from '../../components/Block/Block';
import MainLayoutTmpl from './MainLayout.tmpl';

export default class MainLayout extends Block {
    constructor(props) {
        super('main', props);
    }

    render() {
        return this.compile(MainLayoutTmpl, this.props);
    }
}
