const pool = require('./db');

async function createTable() {
    try{
        await pool.connect();

        const query = `
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(255) PRIMARY KEY,
                password VARCHAR(255) NOT NULL
            );
        `;

        await pool.query(query);
        console.log('テーブルの作成に成功しました');
    } catch (err) {
        console.error('エラーが発生しました', err);
    } finally {
        await pool.end();
    }
}

createTable();