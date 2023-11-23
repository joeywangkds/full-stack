import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

const yourUsername = "joeywang";
const yourPassword = "thisispassword";

//TODO 1: Add your own bearer token from the previous lesson.
// const yourBearerToken = "08f3026d-9c6c-4d88-a3b2-c579dc106247";
const yourBearerToken = "8d5321c5-4a20-49ff-851e-6e05f0769cd9";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

const basicConfig = {
  auth: {
    username: 'joeywang',
    password: 'thisispassword',
  },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(
      API_URL + "/secrets/" + searchId,
      config
    );

    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  let inputSecret = req.body.secret;
  let inputScore = req.body.score;
  try {
    const result = await axios.post(API_URL + "/secrets", /*{
      secret: inputSecret,
      score: inputScore,
    }*/ req.body, config, );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  try {
    const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
    // const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
    console.log(API_URL + "/secrets/" + searchId);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.patch(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch(error){
    res.render('index.ejs',{content: JSON.stringify(error.response.data)});
  }
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render('index.ejs', { content: JSON.stringify(result.data) });

  }catch(error){
    res.render("index.ejs", {content: JSON.stringify(error.response.data)});
  }
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
