import express from "express";
import dotenv from "dotenv";
import * as utils from "./utils/utils.js";

import * as db from './utils/database.js';
let data = ["Project 1", "Project 2", "Project 3"];
// import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

let projects = [];

const app = express();
app.use(cors());
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static('public'));

app.get('/', async  (req, res) => {
    await db.connect()
    .then(async() => {
      // query the database for project records
      projects = await db.getAllProjects();
      console.log(projects);
      let featuredRand = Math.floor(Math.random() * projects.length);
      res.render("index.ejs", { featuredProject: projects[featuredRand] });
    })
    .catch((err) => {
      console.log(err);
    });
  });

  app.get("/projects", (req, res) => {
    res.render("projects.ejs", { projectArray: projects});
  });

  app.get("/project/:id", (req, res) => {
    let id = req.params.id;
    if (id > data.length) {
    throw new Error("No project with that ID");
    }
    res.render("project.ejs", {project: projects[id-1], which: id});
  });
  // app.get("/project", (req, res) => {
  //   res.render("project.ejs");
  // });
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