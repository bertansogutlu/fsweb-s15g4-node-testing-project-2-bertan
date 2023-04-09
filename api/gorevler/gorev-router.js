const router = require('express').Router;
const gorevModel = require('./gorev-model');
const gorevMiddleware = require('./gorev-middleware');

router.get('/',(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.get('/:id',gorevMiddleware.gorevIdKontrol,(req,res,next)=>{
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

router.put('/:id',gorevMiddleware.gorevIdKontrol,(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

router.delete('/:id',gorevMiddleware.gorevIdKontrol,(req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;


