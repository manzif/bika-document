import app from '../../app.js'
import request from 'supertest';

describe("Test the root path", () => {
    jest.setTimeout(10000);
    test("It should return that the endpoint is not found", done => {
      request(app)
        .get('/hisdhdddd')
        .then(response => {
          expect(response.statusCode).toBe(404);
          done();
        });
    });
});
