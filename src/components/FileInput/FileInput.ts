import './FileInput.scss';
import FileInputTmpl from './FileInput.tmpl';
import OldBlock from '../Block/OldBlock';

export default class FileInput extends OldBlock {
    constructor(props) {
        super('label', props);
    }

    render() {
        return this.compile(FileInputTmpl, this.props);
    }
}
