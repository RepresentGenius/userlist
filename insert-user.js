const pool = require('./db');

async function insertUser() {
    try{
        await pool.connect();

        const query = 'INSERT INTO users (id,password) VALUES ($1, $2)';
        const values = ['kate', '12345'];
        await pool.query(query, values);
        console.log('ユーザーの追加に成功しました');
    } catch (err) {
        console.error('エラーが発生しました', err);
    } finally {
        await pool.end();
    }
}

insertUser();