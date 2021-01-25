//обязательное поле
export const requaried = value => {
    if (value) {
        return undefined;
    }
    else { return " error message"; }

}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return `Max length is  ${maxLength} simbols`;
    }
    else { return undefined; }

}