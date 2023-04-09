const router = require('express').Router();
const gorevModel = require('./gorev-model');
const gorevMiddleware = require('./gorev-middleware');

router.get('/',async(req,res,next)=>{
    try {
        const butunGorevler = await gorevModel.getAll();
        res.status(200).json(butunGorevler);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',gorevMiddleware.gorevIdKontrol,async(req,res,next)=>{
    try {
        const gorev = await gorevModel.getById(req.params.id)
        res.status(200).json(gorev);
    } catch (error) {
        next(error);
    }
});

router.post('/',gorevMiddleware.gorevPayloadKontrol,async(req,res,next)=>{
    try {
        const gorev = await gorevModel.create(req.body)
        res.status(201).json(gorev);
    } catch (error) {
        next(error);
    }
});

router.put('/:id',gorevMiddleware.gorevIdKontrol,gorevMiddleware.gorevPayloadKontrol,async(req,res,next)=>{
    try {
        const gorev = await gorevModel.update(req.params.id,req.body);
        res.status(200).json(gorev);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',gorevMiddleware.gorevIdKontrol,async(req,res,next)=>{
    try {
        const gorev = await gorevModel.remove(req.params.id)
        res.status(204).json(gorev);
    } catch (error) {
        next(error);
    }
});

module.exports = router;


