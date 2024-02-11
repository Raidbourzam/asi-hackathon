const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(express.json());


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/formations', require('./routers/formation-router'));
app.use('/api/auth', require('./routers/auth-router'));
app.use('/api', require('./routers/domaine-router'));
app.use('/api', require('./routers/partenaireFormations-router'));

  
const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
