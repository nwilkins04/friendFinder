var dogData = require("../data/friends");

//routing
module.exports = function(app) {
    app.get("/api/friends", function(res, res) {
        res.json(dogData);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = null;
        var bestMatchNumber = null;
      for(var i = 0; i < dogData.length; i++) {
        var currentDifference = 0;
        //inner loop through scores array
      for(var j = 0; j < dogData[i].scores.length; j++) {
        var currentScore = dogData[i].scores[j];
        var userCurrentScore = req.body.answers[j];
        var comparedValue = Math.abs(currentScore - userCurrentScore);
        currentDifference += comparedValue;
      }
      if(i === 0 || bestMatchNumber > currentDifference) {
          bestMatch = dogData[i];
          bestMatchNumber = currentDifference;
      }
      
      }
       
        res.json({match:bestMatch});
    })
}