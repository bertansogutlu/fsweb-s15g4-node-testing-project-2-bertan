const db = require('../../data/db-config');

async function getAll () {
    return await db('Gorevler');
}

async function getById (id) {
    return await db('Gorevler').where('GorevID',id).first();
}

async function create (gorev) {
    const [id] = await db('Gorevler').insert(gorev);
    const yeniGorev = await getById(id);
    return yeniGorev;
}

async function update (id,gorev) {
    await db('Gorevler').where('GorevID',id).update(gorev);
    const guncelGorev = await getById(id);
    return guncelGorev;
}

async function remove (id) {
    return db('Gorevler').where('GorevID',id).del();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}