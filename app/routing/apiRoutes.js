var dogData = require("../data/friends");

//routing
module.exports = function(app) {
    app.get("/api/friends", function(res, res) {
        res.json(dogData);
    });

    app.post("/api/friends", function(req, res) {
       console.log(req.body); 
    })
}