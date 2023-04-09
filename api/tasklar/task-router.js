const router = require('express').Router;
const taskModel = require('./task-model');
const taskMiddleware = require('./task-middleware');

router.get('/',(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.get('/:id',taskMiddleware.taskIdKontrol,(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.post('/',(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.put('/:id',taskMiddleware.taskIdKontrol,(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',taskMiddleware.taskIdKontrol,(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;