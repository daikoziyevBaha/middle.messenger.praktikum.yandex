import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from '../../utils/EventBus';

abstract class OldBlock<Props extends Record<string, any> = unknown> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    _element: HTMLElement | null = null;

    _meta: {tagName: string; props: Props } = null;

    eventBus: () => EventBus;

    props: Props;

    _id = null;

    children: Props;

    _setUpdate = false;

    protected constructor(tagName: string = 'div', propsAndChildren: Props = {} as Props) {
        const { children, props = {} as Props } = this._getChildren(propsAndChildren);
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props: props as Props,
        };
        this._id = makeUUID();
        this.children = this._makePropsProxy({ ...children });
        this.props = this._makePropsProxy({ ...props, __id: this._id });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(OldBlock.EVENTS.INIT);
    }

    // eslint-disable-next-line class-methods-use-this
    _getChildren(propsAndChildren: Props) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof OldBlock) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    compile(template, props) {
        const propsAndStubs = { ...props };
        const blockArr = [];

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });
        Object.entries(this.props).forEach(([key, prop]) => {
            if (Array.isArray(prop)) {
                prop.forEach((item, index) => {
                    if (item instanceof OldBlock) {
                        blockArr.push(item);
                        propsAndStubs[key][index] = `<div data-id="${item._id}"></div>`;
                    }
                });
            }
        });
        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
        if (blockArr.length > 0) {
            blockArr.forEach((item) => {
                const stub = fragment.content.querySelector(`[data-id="${item._id}"]`);
                stub.replaceWith(item.getContent());
            });
        }
        Object.values(this.children).forEach((child) => {
            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
            stub.replaceWith(child.getContent());
        });
        return fragment.content;
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(OldBlock.EVENTS.INIT, this.init.bind(this));
        eventBus.on(OldBlock.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(OldBlock.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(OldBlock.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(OldBlock.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach((child) => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(OldBlock.EVENTS.FLOW_CDM);
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
            this.eventBus().emit(OldBlock.EVENTS.FLOW_CDU, oldProps, this.props);
        }
    };

    get element() {
        return this._element;
    }

    _addEvents() {
        const { events = {} } = this.props;

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
        this._element.append(block);
        this._addEvents();
        this.addAttribute();
    }

    addAttribute() {
        const { attr = {} as Props } = this.props;

        Object.entries(attr).forEach(([key, value]) => {
            this._element.setAttribute(key, String(value));
        });
    }

    render() {
        return '';
    }

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

export default OldBlock;
