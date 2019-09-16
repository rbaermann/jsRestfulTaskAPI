const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

require("./routes")(app);

app.listen(port, (err) => {
    console.log(`Listening to port ${port}.`);
})