export default function validateName(name) {
    const nameRegex = /^[A-ZА-Я][A-Za-zА-Яа-я-]+$/;

    return nameRegex.test(name);
}
