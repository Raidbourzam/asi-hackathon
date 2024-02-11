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
    const { username, password ,sigle ,categorie,adresse,tel,fax,mail,pays,url,notes } = req.body;
    try {
        // Check if the username already exists
        const existingUser = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM partenaire WHERE username = ?", [username], (error, results) => {
                if (error) {
                    console.error('Error during signup:', error);
                    return reject(error);
                }
                resolve(results);
            });
        });

        if (existingUser.length > 0) {
            return res.status(409).json({ message: 'Partenaire already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new partner's information into the database
        await new Promise((resolve, reject) => {
            db.query("INSERT INTO partenaire (username, password, sigle, categorie, adresse, tel, fax, mail, pays, url, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [username, hashedPassword, sigle, categorie, adresse, tel, fax, mail, pays, url, notes], (error, result) => {
                if (error) {
                    console.error('Error during signup:', error);
                    return reject(error);
                }
                resolve(result);
            });
        });

        res.status(201).json({ message: 'Partenaire created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}




module.exports = {
    signupFormateur,
    loginFormateur,
    loginPartenaire,
    signupPartenaire
}