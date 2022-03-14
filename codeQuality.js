// level {3}

const getUsers = async (users) => {
    const new_users = [];
    users.map((element, index) => {
        const newUser = element;
        newUser.id = index;
        new_users.push(newUser);
    });
    return new_users;
};
