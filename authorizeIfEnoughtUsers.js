const userModel = require('./schema')


const authorizeIfEnoughtUsers = async (req, res, next) => {
    try {
        const usersCount = await userModel.count().exec();
        if (usersCount < 3) {
            throw new Error('not enough users')
        }
        next();
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = authorizeIfEnoughtUsers;