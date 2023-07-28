import './Navigation.scss';
import NavigationPageTmpl from './NavigationPage.tmpl';
import Block from '../../components/Block/Block';

export default class NavigationPage extends Block {
    render() {
        return this.compile(NavigationPageTmpl, this.props);
    }
}
