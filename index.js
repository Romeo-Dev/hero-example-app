const express = require('express');
const app = express();
// Library for sending post request
//     row and form
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes import
const heroRoutes = require('./routes/hero');
const skillRoutes = require('./routes/skill');
app.get('/', (req, res) => {
    res.status(200).send('Welcome to dos2 app');
});

app.use('/heros', heroRoutes);
app.use('/skills', skillRoutes);

// Listen to server
app.listen(4000, () => console.log('Listen on port 4000'));