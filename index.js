const express = require('express');
// const routes = require('./routes');
const app = express();

const port = 3000;

app.use(express.json());
// app.use("/user", routes);
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// })

let months = ["January","February","March","April","May","June","July","August","September","October","November","December" ]



let loginDetails = [];

app.get('/', (req, res) => {
    res.send("Hall");
});

app.get('/loginDetails', (req, res) => {
    res.send(loginDetails);
});

app.post('/login/:name', (req, res) => {
    let name = req.params.name;
    loginDetails.push({"name":name, "loginTime":new Date() })
    res.send(`User ${name} Logged in at ${Date.now()}`);
});

app.get('/:name', (req, res) => {
    res.send(`Hey ${req.params.name}`);
});

app.get('/fetchMonth/:num', (req,res) => {
    let num = req.params.num;
    if(num < 0 && num > 12) {
        res.send("Invalid");
    }else{
        res.send(months[num-1]);
    }
})

app.listen(port, () => {
    console.log('listening on port ' + port);
    
})