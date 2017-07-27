var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProfileSchema = new Schema({
   name: String,
	github_link: String,
	current_city: String,
});

var About = mongoose.model('About', ProfileSchema);

module.exports= About;
