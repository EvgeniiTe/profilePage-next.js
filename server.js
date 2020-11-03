const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const axios = require("axios");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post("/user", async (req, res) => {
    const { name, email, tel } = req.body;
    console.log("work");
    try {
      console.log("work2");
      const response = await axios.post(
        "http://jsonplaceholder.typicode.com/posts",
        {
          name,
          email,
          tel
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-token-access": "random"
          }
        }
      );
      console.log(response.statusText);
      if (response.statusText !== "OK") {
        res.send("sorry...");
        return;
      }
      res.send("it's fine");
    } catch (error) {
      res.send(`Error: ${error}`);
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(8080, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:8080");
  });
});
