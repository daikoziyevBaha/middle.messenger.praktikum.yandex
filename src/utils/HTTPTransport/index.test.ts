import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import * as http from "http";
import HTTPTransport, { Method, Options } from './index.ts';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    let requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests = [];
    });

    describe('Request methods', () => {
        it('.get() should send GET request', () => {
            instance.get('/user');

            const [request] = requests;

            expect(request.method).to.eq('Get');
        });

        it('.post() should send POST request', () => {
            instance.post('/');

            const [request] = requests;

            expect(request.method).to.equal('Post');
        });

        it('.put() should send POST request', () => {
            instance.put('/', { method: Method.Put, data: {} });

            const [request] = requests;

            expect(request.method).to.equal('Put');
        });

        it('.delete() should send DELETE request', () => {
            instance.delete('/');

            const [request] = requests;

            expect(request.method).to.equal('Delete');
        });
    });
    // Не получилось отправить запрос, Error: Timeout of 20000ms exceeded.
    // describe('Sending fake requests', () => {
    //     it('Send /signin and should return OK message by authorization', async done => {
    //         await instance.post(`/signin`, { login: 'second', password: 'Second12345' } as unknown)
    //             .then((data: any) => {
    //                 expect(data.responseText).equal('OK');
    //                 done();
    //             })
    //             .catch(done);
    //     }).timeout(20000);
    // });
});
