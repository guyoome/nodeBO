
const secureInput = function (req, res, next) {
    console.log('Secure Input');
    next();
};

module.exports = secureInput;