export default function validateLogin(login) {
    const loginRegex = /^[a-zA-Z0-9_-]{3,20}$/;

    return loginRegex.test(login);
}
