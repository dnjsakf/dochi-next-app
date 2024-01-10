import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_MYSQL_HOST || "localhost",
    port: process.env.DB_MYSQL_PORT || 3306,
    user: process.env.DB_MYSQL_USER || "root",
    password: process.env.DB_MYSQL_PASSWORD || "password",
    database: process.env.DB_MYSQL_DATABASE || "mysql",
    connectionLimit: 5,
});

async function getConnection() {
  return await pool.getConnection();
}

export {
  getConnection,
};