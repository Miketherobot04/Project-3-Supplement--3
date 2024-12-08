const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = app;
Add a server file (server.js) to start the application:
javascript
Copy code
const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
Run tests to ensure they pass:
bash
Copy code
npx jest
Commit your implementation:
bash
Copy code
git add .
git commit -m "Implement root GET endpoint with hello world response"
