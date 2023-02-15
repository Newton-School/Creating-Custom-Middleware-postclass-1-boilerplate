const express = require('express');
const app = express();

app.use(express.json());


//middleWare Function to Add2 to a number

function add2(req, res, next) {

    //Write Your Code here
    
}

//sample Route for Test
// localhost:3000/?num=10 --> The router should return { num = 12 }

app.get('/', add2, (req, res) => {
    
    //num should be replaced by num+2 from the get request route
    const data = {
        "num" : 5 
    };
    
    res.send(JSON.stringify(data));
});



module.exports = app;
