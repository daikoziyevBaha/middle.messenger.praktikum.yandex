import API, { AuthAPI, SigninData, SignupData } from "../api/AuthApi";
import store from '../utils/Store';
import router from '../utils/Router';
import MessagesController from "./MessagesController";

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SigninData) {
        try {
            await this.api.signin(data);

            await this.fetchUser();

            router.go('/messenger');
        } catch (e: any) {
            if (e.reason === "User already in system") {
                router.go('/messenger');
            }
            throw new Error(e.message);
        }
    }

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);

            await this.fetchUser();

            router.go('/messenger');
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    async fetchUser() {
        const user = await this.api.read();
        store.set('user', user);
    }

    async logout() {
        try {
            MessagesController.closeAll();

            await this.api.logout();

            router.go('/');
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}

export default new AuthController();
