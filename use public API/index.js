import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { clearCache } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const baseURL = "https://v2.jokeapi.dev";
const categories = ["Any", "Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = ["blacklistFlags=nsfw,religious,racist", "idRange=0-100"];

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Click the button to get a joke." });
});

app.post("/result", async (req, res) => {
  try {
    const result = await axios.get(
      `${baseURL}/joke/${categories.join(",")}?${params.join("&")}`
    );

    console.log(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`);
    console.log(result.data.type);
    if (result.data.type == "single") {
      // If type == "single", the joke only has the "joke" property
      res.render("index.ejs", { content: result.data.joke });
    } else {
      // If type == "twopart", the joke has the "setup" and "delivery" properties
      res.render("index.ejs", {
        content: `${result.data.setup} -- ${result.data.delivery}`,

        // contentNew: result.data.delivery,
      });

      // return setTimeout(() => {
      //   res.render("index.ejs", { content: result.data.delivery });
      // }, 3000);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.post("/result-new", async (req, res) => {
  try {
    const response = req.body.yourword;
    const result = await axios.get(`${baseURL}/joke/Any?contains=${response}`);
    console.log(result.data.error);
    if (result.data.error == true) {
      res.render("index.ejs", { contentWithword: result.data.additionalInfo });
    } else {
      if (result.data.type == "single") {
        res.render("index.ejs", { contentWithword: result.data.joke });
      } else {
        res.render("index.ejs", {
          contentWithword: `${result.data.setup} -- ${result.data.delivery}`,
        });
      }
    }

    // console.log(result);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
