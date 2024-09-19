const express = require('express');
const routes = require('./routes');
const app = express();

const port = 3000;

app.use("/user", routes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})