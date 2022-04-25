//Imports
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');

//Create a promise
mongoose.Promise = global.Promise;

//Open the server in localhost:3000 | database called crudapi | collection called tasks
mongoose.connect('mongodb://localhost/crudapi').then(()=>{console.log('Connection successful?')})

//Port 3000
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//json parser
app.use(bodyParser.json());

routes(app);

//Listen to requests
app.listen(port);

//If the requested url is wrong
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

//Logs if the server starts correctly
console.log(`Server started on port ${port}`);
