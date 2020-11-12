const express = require('express');
const app = express()
const port = 8002

const database = require("./services/database");


const BookRouter = require("./routes/bookRoutes");

app.use(express.json());

app.use("/api/bookstore", BookRouter);

database.connect();


app.listen(port, () => {
    console.log(`Server listening to port ${port}!`);
});