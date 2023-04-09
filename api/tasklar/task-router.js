const router = require('express').Router();
const taskModel = require('./task-model');
const taskMiddleware = require('./task-middleware');

router.get('/',async(req,res,next)=>{
    try {
        const butunTasklar = await taskModel.getAll();
        res.status(200).json(butunTasklar);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',taskMiddleware.taskIdKontrol,async(req,res,next)=>{
    try {
        const task = await taskModel.getById(req.params.id)
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
});

router.post('/',taskMiddleware.taskPayloadKontrol,async(req,res,next)=>{
    try {
        const task = await taskModel.create(req.body)
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
});

router.put('/:id',taskMiddleware.taskIdKontrol,taskMiddleware.taskPayloadKontrol,async(req,res,next)=>{
    try {
        const task = await taskModel.update(req.params.id,req.body);
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',taskMiddleware.taskIdKontrol,async(req,res,next)=>{
    try {
        const task = await taskModel.remove(req.params.id)
        res.status(204).json(task);
    } catch (error) {
        next(error);
    }
});

module.exports = router;