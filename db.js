const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://practice_dev_user:AT1ZgJHdKpI0pCyz8kqWcvUQk1RkhAxW@dpg-dc011bnf3r2c738d3mu0-a.singapore-postgres.render.com/practice_dev',
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pool;