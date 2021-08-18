require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Meme = require("./models/meme");
app.use(cors());
app.use(express.json());
// app.use(express.static('build'))

app.get("/", (request, response) => {
  return response.send(
    "<h2>The Backend of the X-meme.</h2> <h4>The end points are :</h4><p>/memes<p><p>/memes/id  - make sure that correct id is used :)<p>"
  );
});

app.get("/memes", (request, response) => {
  Meme.find({}).then((item) => {
    response.json(item);
  });
});

app.get("/memes/:id", (request, response, next) => {
  // const id = Number(request.params.id);
  Meme.findById(request.params.id)
    .then((ans) => {
      if (ans) {
        response.json(ans);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => response.json({ reason: "malformatted id" }));
});

app.post("/memes", (request, response) => {
  const body = request.body;

  if (body.url === undefined) {
    return response.status(400).json({ error: "url missing" });
  }

  const p = new Meme({
    name: body.name,
    url: body.url,
    caption: body.caption,
  });
  console.log("This is the one put now ", p);

  //saves the things in the mongo db, using the then it proceeds further.
  p.save().then((savedNote) => {
    response.json(savedNote);
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
