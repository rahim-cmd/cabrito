const mysql= require('mysql')
const myconnection=mysql.createConnection( {
    host:'localhost',
    username:'root',
    password:'',
    database:'ajaxbhai'
} )

myconnection.connect();
