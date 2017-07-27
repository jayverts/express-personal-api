var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");


module.exports.About = require("./AboutMe.js");
module.exports.Project = require("./Projects.js");
// module.exports.Campsite = require("./campsite.js.example");