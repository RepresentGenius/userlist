import pg from "pg";

// データベースへの接続をまとめて持つプール
// アプリ全体で1つを使いまわす
export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL ?? 'postgresql://practice_dev_user:AT1ZgJHdKpI0pCyz8kqWcvUQk1RkhAxW@dpg-dc011bnf3r2c738d3mu0-a.singapore-postgres.render.com/practice_dev',
    ssl: {
        rejectUnauthorized: false
    }
});
