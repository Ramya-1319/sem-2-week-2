let users = [];  // A simple in-memory array to store users

class UserModel {
    static addUser(user) {
        users.push(user);
    }

    static getAllUsers() {
        return users;
    }

    static getUserById(id) {
        return users.find(user => user.id === id);
    }

    static deleteUserById(id) {
        users = users.filter(user => user.id !== id);
    }
}

module.exports = UserModel;