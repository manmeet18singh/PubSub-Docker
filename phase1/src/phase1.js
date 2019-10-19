// Shell for docker
var shell = require('shelljs');

// FS module for file system stuff
var fs = require('fs');

// Express setup
var express = require('express'),
    app = express();

var port = 8080;

// Stop container if its running
shell.exec('docker stop breadgetter');
// Remove container if it exists
shell.exec('docker rm breadgetter');
// Start up container
shell.exec('docker run --name breadgetter -v "${PWD}":/bread -d -i -t ubuntu bash');
// Update packages
shell.exec('docker exec -t breadgetter sh -c "apt-get update"');
// Install python in container
shell.exec('docker exec -t breadgetter sh -c "apt-get install python -y"');
// Install GCC in container
shell.exec('docker exec -t breadgetter sh -c "apt-get install build-essential -y"');

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Post method to grab language and code from
  // 1. Compile code in given language
// 2. Run the code (using shelljs, will run in docker container)
// 3. Send output back to client (shelljs)
app.post("/compAndRun", (req, res) => {
    var language = req.body.language;
    var code = req.body.code;

    if (language == 'Python') {

        // Create file with code
        fs.writeFile('bread.py', code, function (err) {
            var output = shell.exec('docker exec -t breadgetter sh -c "python /bread/bread.py"');
            output = output.stdout;

            var jsonToSend = {"output": output};
            res.send(JSON.stringify(jsonToSend));
        });
    }
    else if (language == 'C++') {
        // Create file with code
        fs.writeFile('bread.cpp', code, function (err) {
            var output = shell.exec('docker exec -t breadgetter sh -c "g++ -fdiagnostics-color=never /bread/bread.cpp"');
            output = output.stdout;
            if (output.includes('/bread/bread.cpp')) {
                var jsonToSend = {"output": output};
                res.send(JSON.stringify(jsonToSend));
            }
            else {
                output = shell.exec('docker exec -t breadgetter sh -c "./a.out"');
                output = output.stdout;

                var jsonToSend = {"output": output};
                res.send(JSON.stringify(jsonToSend));
            }
        });
    }

});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
