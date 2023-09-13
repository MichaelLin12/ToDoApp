import {Pool} from 'pg'

const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: dbPort,
    database: process.env.DATABASE
});

export default pool