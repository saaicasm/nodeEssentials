const express = require('express');
const session = require('express-session');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json()); // Add this to fix the undefined req.body issue

// Middleware to set up session management
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// POST endpoint for handling login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated user authentication (replace with actual logic)
  if (username === 'user' && password === 'password') {
    req.session.user = username;  // Store user information in session
    res.send('Logged in successfully');
  } else {
    res.send('Invalid credentials');
  }
});

// GET endpoint for accessing dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}`);  // Display welcome message with user's name
  } else {
    res.send('Please log in first');
  }
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));
