const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isEmpty = (value) => {
    return value == null || value.trim() === '';
};

const isPositiveInteger = (number) => {
    return Number.isInteger(number) && number > 0;
};

module.exports = {
    isValidEmail,
    isEmpty,
    isPositiveInteger
};