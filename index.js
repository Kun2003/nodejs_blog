const express = require('express')//thư viện trong node_modules
const app = express()//express là 1 function được xây dựng sẵn
const port = 3000//run port ở cổng nào
 
//route
app.get('/tin-tuc',  (req, res) => {
    var a=1;
    var b=2;
    var c= a+b;
  res.send('Hello Hải')
})

//127.0.0.1 - localhost
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))