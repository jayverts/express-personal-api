var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
	name: String,
	type: String,
	scared_level: String
});

var Project = mongoose.model('Project', ProjectsSchema);

module.exports= Project;
