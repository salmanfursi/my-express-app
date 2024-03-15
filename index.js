const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

//hardcoded data for get example
const users = [
  { id: 1, username: 'salman', password: 'ttt444' },  
  { id: 2, username: 'kawser', password: '555yyy' },  
  { id: 3, username: 'hira', password: 'ddd333' },    
];

// api for get all data
app.get('/users', (req, res) => {
  const userList = users.map(user => ({ id: user.id, username: user.username,password:user.password }));
  res.json(userList);
});

// api for get single data
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ id: user.id, username: user.username });
});

//api for post single document
app.post('/users', (req, res) => {
  res.send({ message: 'User created succesfully' });
});

// api for update single document
app.put('/users/:id', (req, res) => {
  res.status(405).json({ message: 'User update succesfully' });
});

// api for delete single document
app.delete('/users/:id', (req, res) => {
  res.status(405).json({ message: 'User deletion succesfully' });
});

// server running confirmation
app.get('/', (req, res) => {
  res.send("welcome to sample server");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
