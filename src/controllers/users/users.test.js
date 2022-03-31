import app from '../../app'
import request from 'supertest';

const requestWithSupertest = request(app);

describe("Test the users endpoint", () => {
    jest.setTimeout(10000);
    const testingUser = {
        name: "manzi",
        email: "manzi@gmail.com",
        password: "123456"
    }
    it('Save a new user', async () => {
        const res = await requestWithSupertest.post('/users/signup', { testingUser });
          expect(res.status).toEqual(201);
          expect(res.type).toEqual(expect.stringContaining('json'));
          expect(res.body).toHaveProperty(token)
    });
});
