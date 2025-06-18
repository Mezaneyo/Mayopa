// server.js
const express = require('express');
const app = express();
app.use(express.json());

// Mock database for loans
let loans = [];

app.post('/api/apply-loan', (req, res) => {
  const { name, amount, term } = req.body;
  loans.push({ name, amount, term });
  res.status(201).json({ message: 'Loan application received!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));