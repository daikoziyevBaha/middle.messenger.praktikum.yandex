import Block from '../components/Block/Block';
import render from '../utils/RenderDom';

export default class Route {
    private _pathname: string;

    private _blockClass;

    private _block: Block | null;

    private _props: { rootQuery: string };

    constructor(pathname: string, view: Block, props: { rootQuery: string }) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return pathname === this._pathname;
    }

    render(): void {
        if (!this._block) {
            this._block = new this._blockClass();
            // Replace 'render' with the actual rendering logic
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
