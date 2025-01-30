import express from "express";
import dotenv from "dotenv";
import * as utils from "./utils/utils.js";
dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));

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