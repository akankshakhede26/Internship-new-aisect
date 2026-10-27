// Dummy Data
let users = [
{ id: 1, name: "Aman", age: 22 },
{ id: 2, name: "Sara", age: 25 }
];

// GET all users
exports.getUsers = (req, res) => {
res.status(200).json(users);
};

// GET one user
exports.getUserById = (req, res) => {
const user = users.find(u => u.id == req.params.id);

if (!user) {
return res.status(404).json({ error: "User not found" });
}

res.status(200).json(user);
};

// POST create user

exports.createUser = (req, res) => {
const { name, age } = req.body;

if (!name || !age) {
return res.status(400).json({ error: "Name and age are required" });
}

const newUser = {
id: users.length + 1,
name,
age
};

users.push(newUser);
res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
const user = users.find(u => u.id == req.params.id);

if (!user) {
return res.status(404).json({ error: "User not found" });
}

user.name = req.body.name || user.name;

user.age = req.body.age || user.age;

res.status(200).json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
users = users.filter(u => u.id != req.params.id);
res.status(200).json({ message: "User deleted" });
};