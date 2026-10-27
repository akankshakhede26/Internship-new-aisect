
let users = [
  { id: 1, name: "Aman", age: 22 },
  { id: 2, name: "Sara", age: 25 }
];

// Get all users
exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get one user by ID
exports.getUserById = (req, res) => {
  const user = users.find(
    (u) => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.status(200).json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { name, age } = req.body;

  if (!name || age === undefined || age === null ||
      name.trim() === "" || !Number.isFinite(Number(age)) ||
      Number(age) <= 0) {
    return res.status(400).json({
      error: "Valid name and age required"
    });
  }

  const newUser = {
    id: users.length
      ? Math.max(...users.map((u) => u.id)) + 1
      : 1,
    name: name.trim(),
    age: Number(age)
  };

  users.push(newUser);

  res.status(201).json(newUser);
};
