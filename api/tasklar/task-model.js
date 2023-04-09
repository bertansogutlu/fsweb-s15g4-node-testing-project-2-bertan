const db = require('../../data/db-config');

async function getAll () {
    return await db('Tasklar');
}

async function getById (id) {
    return await db('Tasklar').where('TaskID',id).first();
}

async function create (task) {
    const [id] = await db('Tasklar').insert(task);
    const yeniTask = await getById(id);
    return yeniTask;
}

async function update (id,task) {
    await db('Tasklar').where('TaskID',id).update(task);
    const guncelTask = await getById(id);
    return guncelTask;
}

async function remove (id) {
    const silinenTask = await getById(id);
    await db('Tasklar').where('TaskID',id).del();
    return silinenTask;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}