const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await userService.registerUser(username, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token, user } = await userService.loginUser(username, password);
        res.json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const changeRole = async (req, res) => {
    try {
        const { role } = req.body;
        const userId = req.params.id;
        const updatedUser = await userService.updateUserRole(userId, role);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const removeUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser(userId);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
    getUsers,
    changeRole,
    removeUser,
};