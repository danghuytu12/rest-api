import express from 'express';
import { v4 as uuidv4 } from "uuid";

uuidv4();
const router = express.Router();
let users = [];
router.get('/', (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send('User  added to the database.');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`user with id ${id} has been deleted`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (username) {
        user.username = username;
    }
    if (email) {
        user.email = email;
    }
    if (age) {
        user.age = age;
    }
    res.send(`username has been updated `)
});
export default router;