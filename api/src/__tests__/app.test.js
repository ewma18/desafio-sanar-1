import chai from 'chai';
const expect = chai.expect;

import supertest from 'supertest';
import app from '../app.js';

const request = supertest(app);

describe('Integration tests', () => {
    describe('GET /welcome', () => {
        it('should return challenge number', async () => {
            const result = await request.get('/welcome');
            const { status, body } = result;

            expect(status).to.equal(200);
            expect(body).to.deep.equal( {challengeNumber: 1});
        });
    });
});