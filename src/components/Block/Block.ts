import { v4 as makeUUID } from 'uuid';
import EventBus from '../../utils/EventBus';
import { compile } from '../../utils/Handlebars';

abstract class Block<Props extends Record<string, any> = unknown> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    componentName: string;

    _element: HTMLElement | null = null;

    _meta: {tagName: string; props: Props } = null;

    eventBus: () => EventBus;

    props: Props;

    _id = null;

    children: Record<string, any>;

    _setUpdate = false;

    refs: {[key: string]: HTMLElement} = {};

    protected constructor(tagName: string = 'div', propsAndChildren: Props = {} as Props) {
        // const { children, props = {} as Props } = this._getChildren(propsAndChildren);
        this._meta = {
            tagName,
            props: propsAndChildren as Props,
        };
        this._id = makeUUID();
        this.children = [];
        // this.children = this._makePropsProxy({ ...children });
        this.props = this._makePropsProxy({ ...propsAndChildren, __id: this._id });
        const eventBus = new EventBus();
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    // eslint-disable-next-line class-methods-use-this
    _getChildren(propsAndChildren: Props) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    compile(template, props) {
        // eslint-disable-next-line no-unused-vars
        const { html, children, refs } = compile(template, props);
        this.children = children.map((child) => child.component as Block<object>);
        console.log('params', this.children, this.refs);
        const templateElement = document.createElement('template');
        templateElement.innerHTML = html;
        const fragment = templateElement.content;

        this.refs = Array.from(fragment.querySelectorAll('[ref]')).reduce((list, element) => {
            const key = element.getAttribute('ref');
            list[key] = element;
            element.removeAttribute('ref');
            return list;
        }, refs) as {[key: string]: HTMLElement};

        children.forEach((child) => child.embed(fragment));

        if (!fragment.firstElementChild || fragment.firstElementChild?.nextElementSibling) {
            throw new Error('Only one root supported');
        }
        return fragment.firstElementChild;
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.children.forEach((child) => {
            child.dispatchComponentDidMount();
        });
        // OLD VERSION
        // Object.values(this.children).forEach((child) => {
        //     child.dispatchComponentDidMount();
        // });
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: Props, newProps: Props) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._render();
        }
    }

    componentDidUpdate(oldProps: Props, newProps: Props) {
        return oldProps !== newProps;
    }

    setProps = (nextProps) => {
        const oldProps = { ...this.props };
        if (!nextProps) {
            return;
        }
        const { children, props } = this._getChildren(nextProps);

        this._setUpdate = false;
        if (Object.values(children).length) {
            Object.assign(this.children, children);
        }
        if (Object.values(props).length) {
            Object.assign(this.props, props);
        }
        if (this._setUpdate) {
            this._setUpdate = false;
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
        }
    };

    get element() {
        if (!this._element) {
            this.render();
        }
        return this._element;
    }

    _addEvents() {
        const { events = {} } = this.props;
        console.log("refs", this.refs);
        Object.keys(events).forEach((eventName) => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    _render() {
        const block = this.render();
        this._removeEvents();
        this._element.innerHTML = '';
        if (this._element) {
            this._element!.replaceWith(block);
        }
        if (typeof block === 'object') {
            this._element = block;
        }
        this.mountComponent();
        this.addAttribute();
        console.log(this.refs, this.children);
    }

    mountComponent() {
        this._addEvents();
        this.componentDidMount();
    }

    addAttribute() {
        // const { attr = {} as Props } = this.props;
        Object.entries(this.props).forEach(([key, value]) => {
            this._element.setAttribute(key, String(value));
        });
        // OLD version
        // Object.entries(attr).forEach(([key, value]) => {
        //     this._element.setAttribute(key, String(value));
        // });
    }

    render() { return ''; }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return (typeof value === 'function') ? value.bind(target) : value;
            },
            set(target, prop, val) {
                if (target[prop] !== val) {
                    self._setUpdate = true;
                }
                target[prop] = val;
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    // eslint-disable-next-line class-methods-use-this
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = 'none';
    }
}

export default Block;
