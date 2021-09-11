const express = require('express');
const app = express();
app.listen(4000);
const path = require('path');
console.log(__dirname);
// __dirname used to take absolute path of the current directory

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "jade");


app.get('/', (req, res) => {


    res.status(200).cookie('toke', 'test', {
        expire:new Date(Date.now()+8*3600000)
    })
    .cookie('hello','hello').redirect(301,'/admin')
    // for rendering Dynamic html to frontend
    // res.render('layout', { title: "Express" })

    // for any static file to be render on frontend
  // res.sendFile(path.join(__dirname, "public/hello_json.json"), "test.txt");
  //    res.download(path.join(__dirname,"public/hello_json.json"),"test.txt");
//   res.sendFile(path.join(__dirname, "public/tota.jpeg"), "img.jpeg");
    // res.download(path.join(__dirname, 'public/tota.jpeg'), 'img.jpeg');
})
