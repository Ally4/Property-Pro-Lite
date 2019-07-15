/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */

import bcrypt from 'bcrypt';

const users = [];

const password = bcrypt.hashSync('Abaaba1', 10);
const user1 = {
    id: 1,
    email: 'admin@gmail.com',
    firstName: 'Ally',
    lastName: 'NENGO',
    password, 
    address: 'Rwanda',
    isAdmin: 'true',
};
users.push(user1);

const user2 = {
    id: 2,
    email: 'ali@gmail.com',
    firstName: 'Ali',
    lastName: 'Ahmed',
    password,
    address: 'Rwanda',
    isAdmin: 'false',
};
users.push(user2);

const user3 = {
    id: 3,
    email: 'liam@gmail.com',
    firstName: 'Liam',
    lastName: 'Neeson',
    password,
    address: 'Rwanda',
    isAdmin: 'false',
};
users.push(user3);

const user4 = {
    id: 4,
    email: 'rambo@gmail.com',
    firstName: 'John',
    lastName: 'Rambo',
    password,
    address: 'Rwanda',
    isAdmin: 'false',
};
users.push(user4);

export default users;