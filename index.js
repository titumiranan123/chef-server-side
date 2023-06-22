const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const chefdata = require('./data/data.json')
app.get('/data', (req, res) => {
    res.send(chefdata)
})
app.get(`/recipe/:name`, (req, res) => {
    const name = req.params.name;
    const findChef = chefdata.find(p => p.name === name)
    console.log(findChef)
    res.send(findChef)
})
app.listen(4000)