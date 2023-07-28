export {};

declare global {
    interface Window {
        profile: {
            openChangeAvatarModal?: () => void;
        };
    }
    interface Element {
        style: CSSStyleDeclaration
    }
}

