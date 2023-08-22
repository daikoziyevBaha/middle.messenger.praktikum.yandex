import './Navigation.scss';
import NavigationPageTmpl from './NavigationPage.tmpl';
import Block from '../../components/Block/Block';

type NavigationPageProps = {
    attr: Record<string, any>,
}

export default class NavigationPage extends Block<NavigationPageProps> {
    constructor(props: NavigationPageProps) {
        super('nav', {
            ...props,
            attr: {
                class: 'navigation',
            },
        });
    }

    // @ts-ignore
    render() {
        return this.compile(NavigationPageTmpl, this.props);
    }
}
