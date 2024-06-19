const mysql = require('mysql');

const connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


connection.connect((error)=>{
    if(erro) throw erro;
    console.log('conectdo com o banco de dados: ${process.env.DB_NAME}')
});

module.exports = connection;