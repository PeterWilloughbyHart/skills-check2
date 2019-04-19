require('dotenv').config();
const massive = require('massive');
const express = require('express');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log(err))

app.use(express.json())

app.listen(SERVER_PORT, () => console.log('mic check one two'));