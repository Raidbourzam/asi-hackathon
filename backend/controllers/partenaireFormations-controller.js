const db = require('../database/connection')

const getpartenaireFormations = async (req, res) => {

    const partenaireId = req.params.partenaireId;

    try{
        db.query(" SELECT f.* FROM formation f JOIN formation_partenaire fp ON f.id = fp.formationid WHERE fp.partenaireid = ? ;" , [partenaireId] ,(error ,results) => {
            if (error) throw error;
            if (results.length === 0){
                return res.status(404).json({ message: "No formation found" });
            }
            res.status(200).json(results);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const getformationsEncours = async (req, res) => {
    try{
        db.query(" SELECT f.* FROM formation f WHERE f.datefin > CURDATE() and f.datedebut < CURDATE();" ,(error ,results) => {
            if (error) throw error;
            if (results.length === 0){
                return res.status(404).json({ message: "No formation en cours found" });
            }
            res.status(200).json(results);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}


const getAllPartenaire = async (req, res) => {
    try{
        db.query(" SELECT sigle, categorie, adresse, tel, fax, mail, pays, url, notes FROM partenaire" ,(error ,results) => {
            if (error) throw error;
            if (results.length === 0){
                return res.status(404).json({ message: "No partenaire Found" });
            }
            res.status(200).json(results);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getpartenaireFormations,
    getformationsEncours,
    getAllPartenaire
}