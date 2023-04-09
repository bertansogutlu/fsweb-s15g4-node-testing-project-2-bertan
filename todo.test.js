const db = require('./data/db-config');
const server = require('./api/server');
const supertest = require('supertest');

beforeAll(async()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
})

beforeEach(async()=>{
    await db.migrate.latest();
    await db.seed.run();
})

afterAll(async()=>{
    await db.destroy();
});

describe('Server test',()=>{
    test('[1] Server calisiyor mu?',async()=>{
        const res = await supertest(server).get('/');
        expect(res.status).toBe(200);
    })
})