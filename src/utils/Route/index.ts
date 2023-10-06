import Block from "../Block/index.ts";
import isEqual from "../../services/isEqual.ts";
import render from "../RenderDom/index.ts";

export default class Route {
    _pathname: string;

    _blockClass: typeof Block;

    _block: Block | null;

    _props: Record<string, any>;

    constructor(pathname: string, view: typeof Block, props: Record<string, any>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }
        this._block.getContent()!.style.display = "block";
        // this._block.show();
    }
}
