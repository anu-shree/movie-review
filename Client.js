var Request = require("request");

Request.get("http://localhost:5000/", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:5000/movie",
    "body": JSON.stringify({
        "firstname": "Nic",
        "lastname": "Raboy"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});