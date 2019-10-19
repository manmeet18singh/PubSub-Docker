// Express setup
var express = require('express'),
    app = express();

// FS module for file system stuff
var fs = require('fs');

var port = 8079;

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/writeFile", (req, res) => {
    var message = req.body.message;
    fs.writeFile('buff.txt', message, function (err) {
    });
})


app.listen(port, () => {
    console.log("Server listening on port " + port);
});


// /Users/manmeetsingh/Desktop/486-project2/phase3/src