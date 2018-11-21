var dogData = require("../data/friends");

//routing
module.exports = function(app) {
    app.get("/api/friends", function(res, res) {
        res.json(dogData);
    });

    app.post("/api/friends", sum, function(req, res) {
       //puggle is 17, so matches would be equal or less then 17
       if(sum <= 17) {
           display dogArray[2]
       }
       //mastiff is 22, so matches would be equal or grater then 22
       else if(sum >= 22) {
           display dogArray[3]
       }
       //french bulldog is 19, so matches are 18 through 21
       else {
           display dogArray[1]
       }
       
        console.log(req.body); 
    })
}