export const reduceString = (string) => {
    const maxCharacters = 100;
    if (string.length > 100) {
        return string.slice(0, maxCharacters) + '...'
    }
    return string;
};
