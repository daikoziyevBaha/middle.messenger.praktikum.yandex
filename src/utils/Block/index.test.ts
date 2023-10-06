import esmock from 'esmock';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './index.ts';
import Block from "./index.ts";

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
};

describe('Block', async () => {
    // eslint-disable-next-line no-shadow
    const { default: Block } = await esmock('./index.ts', {
        '../EventBus/index.ts': {
            EventBus: class {
                emit = eventBusMock.emit;

                on = eventBusMock.on;
            },
        },
    }) as { default: typeof BlockType };

    class ComponentMock extends Block {

    }

    it('should fire init event on initialization', () => {
        // eslint-disable-next-line no-new
        new ComponentMock({
            test: '',
        });

        expect(eventBusMock.emit.calledWith('init')).to.eq(false);
    });

    it('should fire CDU event on props update', () => {
        const components = new ComponentMock({
            test: '',
        });

        components.setProps({ test: 'test' });

        expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(false);
    });
});
