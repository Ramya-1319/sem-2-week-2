const logInfo = (message) => {
    console.log(INFO);
};

const logWarning = (message) => {
    console.warn(WARNING);
};

const logError = (message) => {
    console.error(ERROR);
};

module.exports = {
    logInfo,
    logWarning,
    logError
};