const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/ourchores", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });

app.get('/', function (req, res) {
    res.send('Hello World!')
});

if (process.env.PRODUCTION_URL) {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
};

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});