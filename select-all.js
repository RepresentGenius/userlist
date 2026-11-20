const pool = require('./db');

async function selectAll() {
    try{
        await pool.connect();

        const query = 'SELECT * FROM users';

        const results = await pool.query(query);
        console.log(results.rows);
    } catch (err) {
        console.error('エラーが発生しました', err);
    } finally {
        await pool.end();
    }
}

selectAll();