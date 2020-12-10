const noteData = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  //think this needs some work
  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    res.join(true);
  });
};
