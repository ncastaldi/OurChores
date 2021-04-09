const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});