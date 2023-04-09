const gorevModel = require('./gorev-model');

async function gorevIdKontrol(req,res,next){
    try {
        const gorev = await gorevModel.getById(req.params.id);
        if(gorev.GorevID) {
            next()
        } else {
            res.status(404).json({message: 'Gorev ID bulunamadi'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    gorevIdKontrol
}