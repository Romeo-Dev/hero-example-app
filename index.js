const express = require('express');
const app = express();
// Library for sending post request
//     row and form
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes import
const heroRoutes = require('./routes/hero');

app.use('/heros', heroRoutes);

// Listen to server
app.listen(4000, () => console.log('Listen on port 4000'));