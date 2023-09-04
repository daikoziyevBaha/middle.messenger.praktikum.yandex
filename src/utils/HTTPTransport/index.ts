import METHODS from '../../constants/variables';

function queryStringify(data) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

export type Options = {
    timeout?: number;
    method?: string;
    headers?: {
        [key: string]: string;
    };
    data?: any;
}

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}/${endpoint}`;
    }

    get = (url, options: Options = { timeout: 0 }): Promise<Response> => this.request(`${this.endpoint}${url}`, { ...options, method: METHODS.GET }, options?.timeout);

    post = (url, options: Options = { timeout: 0 }): Promise<Response> => this.request(`${this.endpoint}${url}`, { ...options, method: METHODS.POST }, options.timeout);

    put = (url, options: Options = { timeout: 0 }): Promise<Response> => this.request(`${this.endpoint}${url}`, { ...options, method: METHODS.PUT }, options.timeout);

    delete = (url, options: Options = { timeout: 0 }): Promise<Response> => this.request(`${this.endpoint}${url}`, { ...options, method: METHODS.DELETE }, options.timeout);

    request = (url, options: Options, timeout = 5000): Promise<Response> => {
        const { headers = {}, method, data } = options;
        return new Promise((resolve, reject) => {
            if (!method) {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            // eslint-disable-next-line func-names
            xhr.onload = function () {
                resolve(xhr.response);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
