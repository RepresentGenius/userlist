//const express = require('express');
import express from "express";
//const pool = require('./db');
import { pool } from "../db/pool.js"

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try{
        const query = 'SELECT * FROM users';

        const result = await pool.query(query);
        
        console.log('ユーザーリストを表示しました');

        res.render('list', {users: result.rows});
    } catch (err) {
        console.error('ユーザーリストの表示に失敗しました', err);
    }
});

app.post('/insert', async (req, res) => {
    try{
        const query = 'INSERT INTO users (id,password) VALUES ($1, $2)';
        const values = [req.body.id, req.body.password];
        await pool.query(query, values);
        console.log('ユーザーの追加に成功しました');
        res.redirect('/');
    } catch (err) {
        console.error('ユーザーの追加に失敗しました', err);
        res.status(500).send('ユーザーの追加に失敗しました');
    }
})

app.listen(3000);