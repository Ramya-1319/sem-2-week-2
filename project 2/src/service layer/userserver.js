const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return newUser;
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        return { token, user };
    }
    throw new Error('Invalid credentials');
};

const getAllUsers = async () => {
    return await User.find();
};

const updateUserRole = async (userId, role) => {
    return await User.findByIdAndUpdate(userId, { role }, { new: true });
};

const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    updateUserRole,
    deleteUser,
};