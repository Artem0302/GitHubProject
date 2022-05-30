const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: '12345678',
  host: 'localhost',
  port: 4000,
  database: 'gitHubProject'
})

module.exports = pool;
