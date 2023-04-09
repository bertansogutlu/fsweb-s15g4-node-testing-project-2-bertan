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

describe('Gorev route test',()=>{
    test('[2] Dogru sayida gorev geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/gorev');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(3);
    })
    test('[3] Dogru gorev geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/gorev/1');
        expect(res.status).toBe(200);
        expect(res.body.GorevID).toBe(1);
    })
    test('[3] Yanlis gorevde dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/gorev/99');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Gorev ID bulunamadi");
    })
    test('[4] Gorevi dogru post ediyor mu?',async()=>{
        const res = await supertest(server).post('/api/gorev').send({
            "Adi": "Beslenme",
            "Aciklama": "Diyet"
        });
        expect(res.status).toBe(201);
        expect(res.body).toMatchObject({
            "Adi": "Beslenme",
            "Aciklama": "Diyet"
        });
    })
    test('[5] Yanlis postta dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).post('/api/gorev').send({
            "Adi": "Beslenme"
        });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
            "message": "Eksik yukleme"
        });
    })
    test('[6] Gorevi dogru put ediyor mu?',async()=>{
        const res = await supertest(server).put('/api/gorev/3').send({
            "Adi": "Beslenme tarzi",
            "Aciklama": "Diyet"
        });
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            "Adi": "Beslenme tarzi",
            "Aciklama": "Diyet"
        });
    })
    test('[7] Yanlis putta dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).put('/api/gorev/3').send({
            "Adi": "Beslenme tarzi"
        });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
            "message": "Eksik yukleme"
        });
    })
    test('[8] Silme islemini yapiyor mu?',async()=>{
        const res = await supertest(server).delete('/api/gorev/1');
        expect(res.status).toBe(204);
    })
})

describe('Task route test',()=>{
    test('[2] Dogru sayida task geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/task');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(5);
    })
    test('[3] Dogru task geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/task/1');
        expect(res.status).toBe(200);
        expect(res.body.TaskID).toBe(1);
    })
    test('[3] Yanlis taskda dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).get('/api/task/99');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Task ID bulunamadi");
    })
    test('[4] Taski dogru post ediyor mu?',async()=>{
        const res = await supertest(server).post('/api/task').send({
            "Adi": "Beslenme",
            "Aciklama": "Diyet",
            "GorevID":1
        });
        expect(res.status).toBe(201);
        expect(res.body).toMatchObject({
            "Adi": "Beslenme",
            "Aciklama": "Diyet"
        });
    })
    test('[5] Yanlis postta dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).post('/api/task').send({
            "Adi": "Beslenme"
        });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
            "message": "Eksik yukleme"
        });
    })
    test('[6] Taski dogru put ediyor mu?',async()=>{
        const res = await supertest(server).put('/api/task/3').send({
            "Adi": "Beslenme tarzi",
            "Aciklama": "Diyet",
            "GorevID":1
        });
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            "Adi": "Beslenme tarzi",
            "Aciklama": "Diyet"
        });
    })
    test('[7] Yanlis putta dogru mesaj geliyor mu?',async()=>{
        const res = await supertest(server).put('/api/task/3').send({
            "Adi": "Beslenme tarzi"
        });
        expect(res.status).toBe(400);
        expect(res.body).toMatchObject({
            "message": "Eksik yukleme"
        });
    })
    test('[8] Silme islemini yapiyor mu?',async()=>{
        const res = await supertest(server).delete('/api/task/1');
        expect(res.status).toBe(204);
    })
})