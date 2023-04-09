const taskModel = require('./task-model');

async function taskIdKontrol(req,res,next){
    try {
        const task = await taskModel.getById(req.params.id);
        if(task.TaskID) {
            next()
        } else {
            res.status(404).json({message: 'Task ID bulunamadi'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    taskIdKontrol
}