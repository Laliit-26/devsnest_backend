const express = require('express');
const app = express();
const bodyparser = require('body-parser');


//  how to use middleware 

// app.get('/', (req, res, next) => {
//     console.log("middleware");
//     next();
// }, (req, res) => {
//     // res.Status(200);
//     res.send("hello bro");
// }
// );

// this will run before every api call



// const check= (req, res, next) => {
//      console.log("middleware");
//     if (req.query.admin === 'true') {
//         next();
//     }
//         else {
//          res.status(400).send("must be admin");
//      }
// }
// app.use(bodyparser.json());   <-- if using raw json data
// app.use(bodyparser.urlencoded({extended:true})) <-- if using form data
// app.use(check);
    const nxt= (req, res) => {
    // res.Status(200);
        console.log("req.body->", req.body);
        // res.send("hello bro");
        res.send({
            text:req.body
        })
}
    // app.get('/', check, nxt);
app.post('/', nxt);

app.listen(4000);