type Indexed<T = any> = {
    [key in string]: T
}
function isEqual(a: Indexed | any, b: Indexed | any): boolean {
    let res = true;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in a) {
        if (Object.hasOwn(a, key) && Object.hasOwn(b, key)) {
            if (
                typeof a[key] === 'object'
                && typeof b[key] === 'object' && a[key] !== null
                && b[key] !== null
            ) {
                res = isEqual(a[key], b[key]);
            } else if (a[key] !== b[key]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return res;
}

export default isEqual;
