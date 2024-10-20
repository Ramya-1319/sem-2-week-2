let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
};

const createUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        ...userData
    };
    users.push(newUser);
    return newUser;
};

const updateUser = (id, userData) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
        users[userIndex] = { id: parseInt(id), ...userData };
        return users[userIndex];
    }
    return null;
};

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        return deletedUser[0];
    }
    return null;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};