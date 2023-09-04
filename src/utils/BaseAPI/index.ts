import { Options } from "../HTTPTransport";

export default class BaseAPI {
    create(data): Promise<Response> { throw new Error('Not implemented'); }

    request(data): Promise<Response> { throw new Error('Not implemented'); }

    update(): Promise<Response> { throw new Error('Not implemented'); }

    delete(): Promise<Response> { throw new Error('Not implemented'); }
}
