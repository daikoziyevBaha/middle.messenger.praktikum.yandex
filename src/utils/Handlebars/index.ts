import Handlebars from 'handlebars';

export function compile(template: string, context: object) {
    const data = {
        ...context,
        __children: [] as Array<{ component: any, embed(node: DocumentFragment): void}>,
        __refs: {} as Record<string, unknown>,
    };
    const html = Handlebars.compile(template)(data);
    return { html, children: data.__children, refs: data.__refs };
}

let uniqueId = 0;
export function registerComponent(Component: any) {
    if (Component.componentName in Handlebars.helpers) {
        throw `This ${Component.componentName} component already registered`;
    }

    Handlebars.registerHelper(Component.componentName, ({ hash, data, fn }) => {
        const component = new Component(hash);
        uniqueId += 1;
        const dataAttribute = `data-component-hbs-id="${uniqueId}"`;

        if ('ref' in hash) {
            (data.root__refs = data.root__refs || {})[hash.ref] = component;
        }

        (data.root__children = data.root__children || []).push({
            component,
            embed(node: DocumentFragment) {
                const placeholder = node.querySelector(`[${dataAttribute}]`);
                if (!placeholder) {
                    throw new Error(`Can not find data-id for component ${component.componentName}`);
                }
                const element = component.element();
                element.append(...Array.from(placeholder.childNodes));
                placeholder.replaceWith(element);
            },
        });
        // @ts-ignore
        const contents = fn ? fn(this) : '';
        return `<div ${dataAttribute}>${contents}</div>`;
    });
}
