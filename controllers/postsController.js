const posts = require("../data/posts");
const { post } = require("../routers/posts");

// - index
function index(req, res) {
  res.json({ text: "Lista dei post", posts });
}
// - show
function show(req, res) {
  res.json({
    text: "Dettagli del post " + req.params.id,
    post: posts[req.params.id],
  });
}
// - create
function create(req, res) {
  res.send("Creazione nuovo post");
}
// - update
function update(req, res) {
  res.send("Modifica integrale del post " + req.params.id);
}
// - destroy
const destroy = (req, res) => {
  const postToDelete = posts.find((e) => e.id == req.params.id);
  if (!postToDelete) {
    res.send("Post non trovato");
  }
  const postToDeleteIndex = posts.indexOf(postToDelete);
  posts.splice(postToDeleteIndex, 1);
  res.json(posts);
};

module.exports = { index, show, create, update, destroy };
