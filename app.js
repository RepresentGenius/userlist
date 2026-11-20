const express = require('express');
const pool = require('./db');

const app = express();

app.use(express.static('public'));

app.get('/db-test',async (req,res) => {
    try{
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0]});
    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, error: err.message});
    }
});

app.get('/', (req, res) => {
    res.render('list.ejs');
});

app.listen(3000);