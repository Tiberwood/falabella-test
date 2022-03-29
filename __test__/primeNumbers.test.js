const app = require('../app');
const request = require('supertest');

describe('Prime Numbers', () => {
  test('should return an array of prime numbers', async () => {
    const response = await request(app).post('/prime-numbers').send({
      number: 10,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual([7, 5, 3, 2]);
  });
  test('should return an error if the number is not a number', async () => {
    const response = await request(app).post('/prime-numbers').send({
      number: 'a',
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Number must be a number');
  });
  test('should return an error if the number is not provided', async () => {
    const response = await request(app).post('/prime-numbers').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Missing number');
  });
});