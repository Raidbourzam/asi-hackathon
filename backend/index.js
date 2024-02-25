const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');


app.use(express.json());

const corsOptions ={
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credetials: true,
  optionSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', require('./routers/formation-router'));
app.use('/api/auth', require('./routers/auth-router'));
app.use('/api', require('./routers/domaine-router'));
app.use('/api', require('./routers/partenaireFormations-router'));
app.use('/api', require('./routers/formateurs-router'));

  
const PORT =  8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

