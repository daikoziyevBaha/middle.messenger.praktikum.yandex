import HTTPTransport, { Options } from "../../../../utils/HTTPTransport";
import BaseAPI from "../../../../utils/BaseAPI";

const userAPIInstance = new HTTPTransport('auth');

export default class UserAPI extends BaseAPI {
    request(data: keyof Options | any): Promise<Response> {
        return userAPIInstance.post('/signin', {
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
    }
}
