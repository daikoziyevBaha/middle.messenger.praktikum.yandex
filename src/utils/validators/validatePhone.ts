export default function validatePhoneNumber(phone) {
    const phoneRegex = /^\+?\d{10,15}$/;

    return phoneRegex.test(phone);
}
