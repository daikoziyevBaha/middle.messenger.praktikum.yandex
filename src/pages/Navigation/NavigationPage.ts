import './Navigation.scss';
import NavigationPageTmpl from './NavigationPage.tmpl';
import Block from '../../components/Block/Block';

class NavigationPage extends Block {
    constructor(props) {
        super('nav', props);
    }

    render() {
        return this.compile(NavigationPageTmpl, this.props);
    }
}

export default function getNavigationPage() {
    return new NavigationPage({
        attr: {
            class: 'navigation',
        },
    });
}
