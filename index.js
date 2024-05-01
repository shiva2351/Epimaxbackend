const express = require("express");
const app = express();
app.use(express.json());
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const dbpath = path.join(__dirname, "todoApp.db");

let db = null;
const initilizeDBandServer = async () => {
  try {
    db = await open({ filename: dbpath, driver: sqlite3.Database });
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error : ${e.message}`);
    process.exit(1);
  }
};
initilizeDBandServer();

app.get('/tasks', async(req, res) => {
    console.log("get1")
    const getQuery = `SELECT id,username,password_hash as password,title FROM Users JOIN Tasks on Users.id==Tasks.assignee_id;`;

  const Res = await db.all(getQuery);
  console.log(getQuery);
  response.send(Res);
    res.json(tasks);
});







