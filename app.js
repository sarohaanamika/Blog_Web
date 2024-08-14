import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public/styles'));
app.use(bodyParser.urlencoded({extended: true}));

let posts = [];

app.get('/', (req, res) => {
  res.render('home.ejs', { posts: posts });
});

app.get('/compose', (req, res) => {
  res.render('compose.ejs');
});

app.post('/compose', (req, res) => {
  const post = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.redirect('/');
});

app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.render('post', { post: post });
});

app.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.render('edit', { post: post });
});

app.post('/edit/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  posts[index] = {
    id: parseInt(req.params.id),
    title: req.body.title,
    content: req.body.content
  };
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});