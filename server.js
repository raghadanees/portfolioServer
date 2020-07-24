'use strict'

//1- declare a var to use express library
const express = require('express');
const { request } = require('http');
const { response } = require('express');
const { json } = require('body-parser');

// requir is like calling the library

// 2- initialize the server
const server = express();

// 3- declare a port>>>>> 
const PORT = process.env.PORT || 3000; // any number no only 3000
 
server.listen(PORT,()=>{
    console.log('I am listening to PORT', PORT) // listen func. will console on ubunto 
});

// http:/localhost:3000/
server.use(express.static('./public')); /// to access public folder from express

// http:/localhost:3000/test


server.get('/test',(request,response) => {
    response.send('you are awesome');
});

// http:localhost:3000/data
server.get('/data',(request,response)=>{
    let cars = [
        {
            name : 'Ferrari'
        },
        {
            name : 'Ford'  
        }
    ];
    response.json(cars);
});




///npm init -y >>> on ubuntu to initialize package.json ضفناها بعد ما ضفنا ملف الجافاسيرفر الاتشتيامل
// npm install express >>>. will ad package-lock.json and node-modules folder 
// after listen fun add on ubuntu npm start >> if Error >>killall -s KILL node>> npm install dotenv >>then npm start
//  after npm start the console will be on ubuntu to stop it ctrl z OR ctrl x
// on browser localhost:3000 >>>
// each time we add something we should stop the server and start again
// then ACP to github then on heroku Create New App>> 