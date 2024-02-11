const db = require('../database/connection')

const getFormations = async (req, res) => {
    try{
        db.query("select * from formation" , (error ,results) => {
            if (error) throw error;
            if (results.length === 0){
                return res.status(404).json({ message: "No Formation found" });
            }
            res.status(200).json(results);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const getFormationById = async (req, res) => {

    const id = req.query.id;

    try{
        db.query("SELECT * from formation where id = ?",[id],(error, result) => {
            if (error) throw error;
            if (result[0].length === 0){
                res.status(404).json({ message: "No Formation found" });
            }
            res.status(200).json(result[0]);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getFormations,
    getFormationById
}