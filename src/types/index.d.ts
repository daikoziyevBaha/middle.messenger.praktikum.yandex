export {};

declare global {
    interface Window {
        openChatPopup: (e: any) => void;
        profile: {
            openChangeAvatarModal?: () => void;
        };
    }
    interface Element {
        style: CSSStyleDeclaration
    }
}
