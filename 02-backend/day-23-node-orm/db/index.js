// const dotenv = require('dotenv');
require('dotenv/config');

const { drizzle } = require("drizzle-orm/node-postgres");

dotenv.config(); // tries to read .env file and all the variables are loaded into this file 

//  postres://<username>:<password>@<host>:<port>/<db_name>
const db = drizzle(process.env.DATABASE_URL);

module.exports = db;

// this connection is used when we want to send data to the database and receive it.
