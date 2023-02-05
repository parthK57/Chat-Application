import mysql from "mysql2";

const connectionPool = mysql.createPool({
    user: "root",
    database: "prattleme",
    host: "localhost",
    password: "2603"
});

export default connectionPool;