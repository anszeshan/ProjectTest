const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://strevio-recruiter:StrevioRecruiter1234@cluster0.fkxfvpe.mongodb.net/Test-Demo')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.get('/', (req, res) => res.send('Hello'));
app.listen(5000, () => console.log('Test Server running'));
