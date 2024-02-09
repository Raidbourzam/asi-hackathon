// userControllers.js
const db = require('../config/database');

// Define controller methods
const userController = {
  getAllUsers: (req, res) => {
    // Logic to fetch all users from the database
    db.query('SELECT * FROM users', (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  },
  createUser : (req, res) => {
    const {email, password} = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        if (results.length > 0) {
          return res.status(404).json({ error: 'User already exist' + results[0] });
        }
        
        db.query('Insert into users (email, password) values (?, ?)', [email, password], (err , rslt) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ err: 'Internal server error' });
            }
            console.log('rslt is : '+JSON.stringify(rslt));
            return res.status(201).json({ message: 'User created successfully '+rslt });
        });

        
      });
  }
  // Implement other CRUD operations as per your requirement
};

module.exports = userController;
