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

async function gorevPayloadKontrol(req,res,next){
    try {
        const {Adi,Aciklama} = req.body
        if(Adi && Aciklama) {
            next()
        } else {
            res.status(400).json({message: 'Eksik yukleme'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    gorevIdKontrol,
    gorevPayloadKontrol
}