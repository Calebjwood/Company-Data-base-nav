const mysql = require('mysql2');

let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: '127.0.0.1',
          user: 'root',
          password: 'Calebw600',
          database: 'company_db'
        },
        console.log(`Connected to the company database.`)
      );
    }

    return db;
  }
};