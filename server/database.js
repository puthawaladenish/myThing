//init code
const mongoose = require('mongoose');
const db_url = process.env.DB_URL;

//Database Connnection Code
 mongoose.connect('db_url',{useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => console.log('Database Connection is OK'));