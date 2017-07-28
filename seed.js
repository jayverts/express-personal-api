// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var aboutMe =  {
	name: "Jeremy Verdolino",
	github_link: "https://github.com/jayverts",  
	current_city: "Denver",
};

var upcomingProjects = [
{
  name: "Project 2",
  type: "Full Stack App",
  scared_level: "terrified"
},
{
  name: "Project 3",
  type: "Group Project",
  scared_level: "hopeless"
},
{
  name: "Project 4",
  type: "Everything",
  scared_level: "shitless"
}
];

db.About.remove({}, function(err, abouts) {
  console.log('removed all authors');
db.About.create(aboutMe, function(err, abouts) {
  if (err){
    return console.log("Error: ", err);
  }
  console.log("Created new entry");
});

db.Project.remove({}, function(err, projects){
  console.log('removed all projects');
db.Project.create(upcomingProjects, function(err,projects) {
  if (err) {
    return console.log("error: ", err);
  }
  console.log("Created New Project");
 }) ;
  upcomingProjects.forEach(function (projectData) {
    var project = new db.Project({
      name: projectData.name,
      type: projectData.image,
      scared_level: projectData.scared_level
      });
    });
  });
});

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
