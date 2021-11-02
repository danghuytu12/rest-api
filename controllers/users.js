import { v4 as uuid } from 'uuid';

export const createUser = (req, res) => {
    const user = req.body;
    console.log('User  added to the database.');
    users.push({ ...user, id: uuid() });

    
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);

    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};