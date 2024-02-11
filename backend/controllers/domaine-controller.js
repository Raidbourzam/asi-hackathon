const db = require('../database/connection')

const getDomaines = async (req, res) => {
    try{
        // get domaine from SQL
        db.query("select designation from domaine" , (error ,results) => {
            if (error) throw error;
            if (results.length === 0){
                return res.status(404).json({ message: "No domaine found" });
            }
            res.status(200).json(results);
        })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getDomaines
}