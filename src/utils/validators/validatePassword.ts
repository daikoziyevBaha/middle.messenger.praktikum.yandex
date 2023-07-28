export default function validatePassword(password) {
    if (password.length < 8 || password.length > 40) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    return /\d/.test(password);
}
