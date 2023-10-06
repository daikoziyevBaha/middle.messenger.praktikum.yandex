import { expect } from "chai";
import store, { Store } from "./index.ts";

describe('App Store', () => {
    it('Should exist instance', () => {
        expect(store).to.be.an.instanceof(Store);
    });

    it('Should set user', () => {
        store.set('user', 'test-user');

        const state = store.getState();

        expect(state?.user).equal('test-user');
    });
});
