const fs = require("fs");
const cuid = require("cuid");

const noteData = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  //think this needs some work
  app.post("/api/notes", (req, res) => {
    const id = cuid();
    noteData.push({ ...req.body, id });

    fs.writeFileSync("Develop/db/db.json", JSON.stringify(noteData));

    res.json(noteData);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const newData = noteData.filter((note) => note.id !== id);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(newData));
    res.json(newData);
  });
};
