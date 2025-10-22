const request = require('supertest');
const server = require('../src/index');

afterAll(() => server.close());

test('GET / responds with Hello', async () => {
  const res = await request('http://localhost:3000').get('/');
  expect(res.statusCode).toBe(200);
});
