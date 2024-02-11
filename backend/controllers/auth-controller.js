const db = require('../database/connection')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret_key = 'b6aq46D4f4f46464f165F4FZ8RZF';


const loginFormateur = async (req, res) => {
    const {username, password} = req.body;
    try{
        db.query("SELECT * from formateur where username = ?",[username],(error, results) => {
            if (error) throw error;
            if (results.length === 0){
                res.status(404).json({ message: "No Formateur found" });
            }
            const user = results[0]; 

            bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error during password comparison:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
    
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
    

            const token = jwt.sign({ userId: user.id }, secret_key, { expiresIn: '1h' });
            return res.json({ token });
            });
            })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const signupFormateur = async (req, res) => {
    const { username, password } = req.body;
    try {

        db.query("SELECT * FROM formateur WHERE username = ?", [username], async (error, results) => {
            if (error) {
                console.error('Error during signup:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }


            if (results.length > 0) {
                return res.status(409).json({ message: 'Formateur already exists' });
            }


            const hashedPassword = await bcrypt.hash(password, 10);


            db.query("INSERT INTO formateur (username, password) VALUES (?, ?)", [username, hashedPassword], (error, result) => {
                if (error) {
                    console.error('Error during signup:', error);
                    return res.status(500).json({ message: 'Internal server error' });
                }


                res.status(201).json({ message: 'Formateur created successfully' });
            });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const loginPartenaire = async (req, res) => {
    const {username, password} = req.body;
    try{
        db.query("SELECT * from partenaire where username = ?",[username],(error, results) => {
            if (error) throw error;
            if (results.length === 0){
                res.status(404).json({ message: "No partenaire found" });
            }
            const user = results[0]; 
  

            bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error during password comparison:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
    
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
    

            const token = jwt.sign({ userId: user.id }, secret_key, { expiresIn: '1h' });
            return res.json({ token });
            });
            })
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const signupPartenaire = async (req, res) => {
    const { username, password } = req.body;
    try {
        db.query("SELECT * FROM partenaire WHERE username = ?", [username], async (error, results) => {
            if (error) {
                console.error('Error during signup:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }


            if (results.length > 0) {
                return res.status(409).json({ message: 'partenaire already exists' });
            }


            const hashedPassword = await bcrypt.hash(password, 10);


            db.query("INSERT INTO partenaire (username, password) VALUES (?, ?)", [username, hashedPassword], (error, result) => {
                if (error) {
                    console.error('Error during signup:', error);
                    return res.status(500).json({ message: 'Internal server error' });
                }


                res.status(201).json({ message: 'partenaire created successfully' });
            });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



module.exports = {
    signupFormateur,
    loginFormateur,
    loginPartenaire,
    signupPartenaire
}