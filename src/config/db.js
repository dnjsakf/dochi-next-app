import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_MYSQL_HOST || "localhost",
    user: process.env.DB_MYSQL_USER || "root",
    password: process.env.DB_MYSQL_PASSWORD || "password",
    port: process.env.DB_MYSQL_PORT || 3306,
    database: process.env.DB_MYSQL_DATABASE || "mysql",
});

async function getConnection() {
  return await pool.getConnection();
}

export {
  getConnection,
};