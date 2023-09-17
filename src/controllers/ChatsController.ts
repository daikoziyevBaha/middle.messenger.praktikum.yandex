import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import router from "../utils/Router";

class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async create(title: string) {
        try {
            await this.api.create(title);
            await this.fetchChats();
        } catch (e) {
            router.go('/500');
        }
    }

    async fetchChats() {
        const chats = await this.api.read();

        chats.map(async chat => {
            const token = await this.getToken(chat.id);
            try {
                await MessagesController.connect(chat.id, token);
            } catch (e) {
                router.go('/500');
            }
        });

        store.set('chats', chats);
    }

    async addUserToChat(id: number, userId: number) {
        try {
            await this.api.addUsers(id, [userId]);
        } catch (e) {
            router.go('/500');
        }
    }

    async deleteUserFromChat(id: number, userId: number) {
        try {
            await this.api.deleteUsers(id, [userId]);
        } catch (e) {
            router.go('/500');
        }
    }

    async delete(id: number) {
        try {
            await this.api.delete(id);
            await this.fetchChats();
        } catch (e) {
            router.go('/500');
        }
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

    selectChat(id: number) {
        store.set('selectedChat', id);
    }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
