import express from "express";
import dotenv from "dotenv";
import * as utils from "./utils/utils.js";
dotenv.config();
let data = ["Project 1", "Project 2", "Project 3"];

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
  });

  app.get("/projects", (req, res) => {
    res.render("projects.ejs", {projectArray: data});
  });
  app.get("/project", (req, res) => {
    res.render("project.ejs");
  });
  app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });

app.post("/mail", async (req, res) => {
  await utils
    .sendMessage(req.body.sub, req.body.txt)
    .then(() => {
        res.send({ result: "success" });
    })
    .catch(() => {
        res.send({result: "failure" });
    });
});


app.listen(port, () => {
    console.log(process.env.SENSITIVE_INFO);
    console.log(`Example app listening on port ${port}`);
});



// app.post("/mail", (req, res) => {
//     console.log('mail button clicked')
//   })
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })