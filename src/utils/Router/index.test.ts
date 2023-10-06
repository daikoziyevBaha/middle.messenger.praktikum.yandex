import { expect } from 'chai';
import sinon from 'sinon';
// eslint-disable-next-line import/extensions
// @ts-ignore
// eslint-disable-next-line import/extensions
import Router, { BlockConstructable } from "./index.ts";

describe('Router', () => {
    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };
    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    beforeEach(() => {
        Router.reset();
    });

    const getContentFake = sinon.fake.returns(document.createElement('div'));

    const BlockMock = class {
        getContent = getContentFake;
    } as unknown as BlockConstructable;

    it('use() should return Router instance', () => {
        const result = Router.use('/', BlockMock);

        expect(result).to.eq(Router);
    });

    describe('.back()', () => {
        it('should render a page on history back action', () => {
            Router
                .use('/', BlockMock)
                .start();

            Router.back();

            expect(getContentFake.callCount - 2).to.eq(1);
        });
    });

    describe('.forward()', () => {
        it('should render a page on history forward action', () => {
            Router
                .use('/', BlockMock)
                .use('/settings', BlockMock)
                .start();

            Router.back();
            Router.forward();

            expect(getContentFake.callCount - 4).to.eq(2);
        });
    });

    it('should render a page on start', () => {
        Router
            .use('/', BlockMock)
            .start();

        expect(getContentFake.callCount).to.eq(1);
    });
});
