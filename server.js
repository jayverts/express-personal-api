// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/jayverts/express-personal-api",
    base_url: "https://peaceful-coast-42442.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/abouts", description: "Data about me"},
      {method: "POST", path: "/api/projects", description: "Upcoming Projects...."} // Have not been able to get this to render yet
    ]
  });
});

app.get('/api/abouts', function (req, res) {
  db.About.find()
    .exec(function(err, abouts) {
      if (err) { return console.log("index error: " + err); }
      res.json(abouts);
  });
});

app.get('/api/projects', function (req, res) {
  db.Project.find()
    .exec(function(err, projects) {
      if (err) { return console.log("index error: " + err); }
      res.json(projects);
  });
});

// get one book
// app.get('/api/books/:id', function (req, res) {
//   db.Book.findOne({_id: req.params.id }, function(err, data) {
//     res.json(data);
//   });
// });

// create new book
// app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  // var newBook = new db.Book({
  //   title: req.body.title,
  //   image: req.body.image,
  //   releaseDate: req.body.releaseDate,
  // });
  // find the author from req.body
  // db.Author.findOne({name: req.body.author}, function(err, author){
  //   if (err) {
  //     return console.log(err);
  //   }
    // add this author to the book
    // newBook.author = author;


//     // save newBook to database
//     newBook.save(function(err, book){
//       if (err) {
//         return console.log("save error: " + err);
//       }
//       console.log("saved ", book.title);
//       // send back the book!
//       res.json(book);
//     });
//   });
// });

// // delete book
// app.delete('/api/books/:id', function (req, res) {
//   // get book id from url params (`req.params`)
//   console.log('books delete', req.params);
//   var bookId = req.params.id;
//   // find the index of the book we want to remove
//   db.Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
//     res.json(deletedBook);
//   });
// });


// app.post('/api/books/:book_id/characters', function (req, res) {
//   // Get book id from url params (`req.params`)
//   var bookId = req.params.book_id;
//   db.Book.findById(bookId)
//     .populate('author') // Reference to author
//     // now we can worry about saving that character
//     .exec(function(err, foundBook) {
//       console.log(foundBook);
//       if (err) {
//         res.status(500).json({error: err.message});
//       } else if (foundBook === null) {
//         // Is this the same as checking if the foundBook is undefined?
//         res.status(404).json({error: "No Book found by this ID"});
//       } else {
//         // push character into characters array
//         foundBook.characters.push(req.body);
//         // save the book with the new character
//         foundBook.save();
//         res.status(201).json(foundBook);
//       }
//     }
//   );
// });
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
