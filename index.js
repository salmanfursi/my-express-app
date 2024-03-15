const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Hardcoded data of user 
const users = [
  { id: 1, username: 'salman', password: 'ttt444' },  
  { id: 2, username: 'kawser', password: '555yyy' },  
  { id: 3, username: 'hira', password: 'ddd333' },    
];

// Get all users
app.get('/users', (req, res) => {
  // maping them to show all of the user document in preview
  const userList = users.map(user => ({ id: user.id, username: user.username }));
  res.json(userList);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // return the desired field
  res.json({ id: user.id, username: user.username });
});

// for creatin a new user 
app.post('/users', (req, res) => {
  // hare need to validate the data after making the user
  res.status(201).json({ message: 'user created successfully' });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  res.status(405).json({ message: 'update operation not allowed' });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  res.status(405).json({ message: 'dletion operation not allowed' });
});

// default home route
app.get('/', (req, res) => {
  res.send("Welcome to the sample server");
});

// server listening msg
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
