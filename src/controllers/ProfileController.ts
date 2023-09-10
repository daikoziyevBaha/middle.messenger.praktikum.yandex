import ProfileAPI, {AvatarData, PasswordData} from "../api/ProfileApi";
import store from "../utils/Store";
import {SignupData} from "../api/AuthApi";
import router from "../utils/Router";

export class ProfileController {
    private readonly api: typeof ProfileAPI;

    constructor() {
        this.api = ProfileAPI;
    }

    async editAvatar(data: FormData) {
        try {
            const user = await this.api.changeAvatar(data);

            store.set("user", user);
        } catch (e: any) {
            throw new Error("");
        }
    }

    async editProfile(data: SignupData) {
        try {
            const user = await this.api.changeProfile(data);

            store.set("user", user);
            router.go('/profile');
        } catch (e: any) {
            throw new Error("");
        }
    }

    async editPassword(data: PasswordData) {
        try {
            await this.api.changePassword(data);

            router.go('/profile');
        } catch (e: any) {
            throw new Error("");
        }
    }
}

export default new ProfileController();
