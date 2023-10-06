// eslint-disable-next-line no-shadow
import { BASE_URL } from "../../services/constants.ts";

// eslint-disable-next-line no-shadow
export enum Method {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete'
}

type HTTPMethod = <R=unknown>(url: string, options?: any) => Promise<R>

export type Options = {
    method: Method;
    data?: unknown;
};

export default class HTTPTransport {
    static API_URL = BASE_URL;

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    get: HTTPMethod = (path = '/') => this.request(this.endpoint + path);

    post: HTTPMethod = (path, data) => {
        return this.request(this.endpoint + path, {
            method: Method.Post,
            data,
        });
    };

    put: HTTPMethod = (path, data) => {
        return this.request(this.endpoint + path, {
            method: Method.Put,
            data,
        });
    };

    patch: HTTPMethod = (path, data) => {
        return this.request(this.endpoint + path, {
            method: Method.Patch,
            data,
        });
    };

    delete: HTTPMethod = (path, data) => {
        return this.request(this.endpoint + path, {
            method: Method.Delete,
            data,
        });
    };

    request: HTTPMethod = (url, options = { method: Method.Get }) => {
        const { method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({ reason: 'abort' });
            xhr.onerror = () => reject({ reason: 'network error' });
            xhr.ontimeout = () => reject({ reason: 'timeout' });

            if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (data instanceof FormData) {
                xhr.send(data);
            } else if (method === Method.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
