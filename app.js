const express = require("express");
const app = express();
const PORT = process.env.PORT || 9988;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
var fs = require('fs');
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// //=======router
// app.use("/auth", require("./routes/auth.routes"));
// app.use("/upload", require("./routes/upload.routes"));
// app.use("/slider", require("./routes/slider.routes"));
app.use("/", express.static(path.join(__dirname, "client", "build")));

app.get('/qwe', function (req, res) {
    try {
        var data = fs.readFileSync('./books/Ighri.txt', 'utf8');
        res.send(data.toString());
    } catch(e) {
        console.log('Error:', e.stack);
    }
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});



try {
    var data = fs.readFileSync('./books/Ighri.txt', 'utf8');
    console.log(data.toString());
} catch(e) {
    console.log('Error:', e.stack);
}

async function start() {
    try {
        //start server
        app.listen(PORT, () => {
            console.log(`Server is started on port №${PORT}`);
        });
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

start();