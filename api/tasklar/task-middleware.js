const taskModel = require('./task-model');

async function taskIdKontrol(req,res,next){
    try {
        const task = await taskModel.getById(req.params.id);
        if(task) {
            next()
        } else {
            res.status(404).json({message: 'Task ID bulunamadi'})
        }
    } catch (error) {
        next(error)
    }
}

async function taskPayloadKontrol(req,res,next){
    try {
        const {Adi,Aciklama,GorevID} = req.body
        if(Adi && Aciklama && GorevID) {
            next()
        } else {
            res.status(400).json({message: 'Eksik yukleme'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    taskIdKontrol,
    taskPayloadKontrol
}