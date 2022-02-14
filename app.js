// Imports
const express = require('express');
const app = express();
//const port = 5000;


// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

// Set Routes
app.get('', (req, res) => {
  res.render('index', {text: ' This is EJS'})
});

app.get('/about', (req, res) => {
  res.render('about', {text: ' This is about'})
});

app.get('/index', (req, res) => {
  res.render('index', {text: ' This is index'})
});

let listener = app.listen();
console.log(`Listening to port number ${listener.address().port}`);

//app.listen(port, () => console.info('App listen on port ${port}'));