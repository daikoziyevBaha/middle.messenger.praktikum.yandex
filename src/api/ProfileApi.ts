import BaseAPI from "../utils/BaseAPI";
import { SignupData } from "./AuthApi";

export type AvatarData = {
    avatar: File;
}

export type PasswordData = {
    oldPassword: string;
    newPassword: string;
}

export class ProfileAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    changeAvatar(data: FormData) {
        return this.http.put('/profile/avatar', data);
    }

    changeProfile(data: SignupData) {
        return this.http.put('/profile', data);
    }

    changePassword(data: PasswordData) {
        return this.http.put('/password', data);
    }

    read = undefined;

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new ProfileAPI();
