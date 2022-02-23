const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.listen(port,(err)=>{
    if(err){
        console.log(`Error found in running server : ${err}`);
    }
    console.log("Server is running on port 4000");
});










