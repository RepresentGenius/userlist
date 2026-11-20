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

app.get('/', async (req, res) => {
    try{
        const query = 'SELECT * FROM users';

        const result = await pool.query(query);
        
        console.log('ユーザーリストを表示しました');

        res.render('/', {users: result.rows});
    } catch (err) {
        console.error('エラーが発生しました', err);
    } finally {
        pool.end();
    }
});

app.listen(3000);