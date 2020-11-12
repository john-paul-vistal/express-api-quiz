const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect("mongodb://127.0.0.1/express-api-quiz", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => console.log(error));
};

module.exports = {
    connect: connectToDatabase,
};