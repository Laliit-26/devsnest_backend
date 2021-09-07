const express = require('express');
const app = express();

// crud->post,get,put,delete
const slash = (req, res) => {
    // res.sendStatus(200); status->ok
    // db update;
    res.sendStatus(201); 
    res.send({ a: 2 });
    // res.status(200).send({ 1: 2 }); ->piplining
}

app.get('/', slash);
// app.post('/', slash)
// app.put('/', slash)
// app.delete('/', slash)



app.listen(5000);