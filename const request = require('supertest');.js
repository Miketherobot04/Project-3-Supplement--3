const request = require('supertest');
const app = require('../app'); // Assuming the main application file is named `app.js`

describe('GET /', () => {
  it('should respond with "hello world"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello world');
  });
});
Commit your test:

bash
Copy code
git add .
git commit -m "Add unit test for root GET endpoint"
