import OldBlock from '../Block/OldBlock';
import StraightInputTmpl from './StraightInput.tmpl';
import './StraightInput.scss';

export default class StraightInput extends OldBlock {
    constructor(props) {
        super('label', props);
    }

    render() {
        return this.compile(StraightInputTmpl, this.props);
    }
}