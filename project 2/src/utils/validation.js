const isEmpty = (value) => {
    return value == null || value.trim() === '';
};

module.exports = {
    isEmpty,
};