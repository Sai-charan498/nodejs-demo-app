const request = require('supertest');
const server = require('../src/index');

describe('Node.js Demo App', () => {
  afterAll(() => {
    server.close();
  });

  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(server)
        .get('/')
        .expect(200);
        
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Welcome to Node.js Demo App!');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(server)
        .get('/health')
        .expect(200);
        
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const response = await request(server)
        .get('/api/users')
        .expect(200);
        
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('email');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com'
      };
      
      const response = await request(server)
        .post('/api/users')
        .send(newUser)
        .expect(201);
        
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newUser.name);
      expect(response.body.email).toBe(newUser.email);
      expect(response.body).toHaveProperty('createdAt');
    });

    it('should return 400 for missing required fields', async () => {
      const response = await request(server)
        .post('/api/users')
        .send({ name: 'Test User' })
        .expect(400);
        
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(server)
        .get('/nonexistent')
        .expect(404);
        
      expect(response.body).toHaveProperty('error', 'Route not found');
    });
  });
});