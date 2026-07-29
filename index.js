const dotenv = require('dotenv');
const express = require('express');
const db = require('./config/db');
const routes = require('./routes/index.js');
const PORT = process.env.PORT || 3000;

const server = express();
dotenv.config();

db();

server.use("/",routes);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});