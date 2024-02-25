const db = require('../database/connection');

const getFormateurs = async (req, res) => {
    try {
        db.query("SELECT nom, prenom, sexe, adresse, mail, tel, diplome, specialite FROM formateur", (error, results) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ message: "No formateur found" });
            }
            res.status(200).json(results);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getFormateurById = async (req, res) => {
    const _id = req.params.formateurId;
    try {
        db.query("SELECT nom, prenom, sexe, adresse, mail, tel, diplome, specialite FROM formateur WHERE id = ?", [_id], (error, result) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            if (result.length === 0) {
                return res.status(404).json({ message: "No formateur by id found" });
            }
            res.status(200).json(result);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getFormateurs,
    getFormateurById
};
