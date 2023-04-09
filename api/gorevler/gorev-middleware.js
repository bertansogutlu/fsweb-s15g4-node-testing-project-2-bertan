const gorevModel = require('./gorev-model');

async function idKontrol(req,res,next){
    try {
        const gorev = await gorevModel.getById(req.params.id);
        if(gorev.GorevID) {
            next()
        } else {
            res.status(404).json({message: 'ID bulunamadi'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    idKontrol
}