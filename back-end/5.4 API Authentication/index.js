import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "joeywang";
const yourPassword = "thisispassword";
const yourAPIKey = "0f9a1715-68a2-4ced-9901-c73cae1ef700";
const yourBearerToken = "08f3026d-9c6c-4d88-a3b2-c579dc106247";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
  // console.log(`${API_URL}/random`);
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    // console.log(`${API_URL}/random`);
    const result = response.data;
    let jsonString = JSON.stringify(result);
    res.render("index.ejs", { content: jsonString });
  } catch (err) {
    console.log("Failed to load:", err.message);
    res.render("index.ejs", { content: err.message });
  }

  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(`${API_URL}all`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    let jsonString = JSON.stringify(response.data);
    res.render("index.ejs", { content: jsonString });
  } catch (err) {
    console.log("Failed to load:", err.message);
    res.render("index.ejs", { content: err.message });
  }
});

app.get("/apiKey", async(req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    let jsonString = JSON.stringify(response.data);
    res.render("index.ejs", { content: jsonString });
  } catch (err) {
    console.log("Failed to load:", err.message);
    res.render("index.ejs", { content: err.message });
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  try {
    const response = await axios.get(`${API_URL}secrets/2`, {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    let jsonString = JSON.stringify(response.data);
    res.render("index.ejs", { content: jsonString });
  } catch (err) {
    console.log("Failed to load:", err.message);
    res.render("index.ejs", { content: err.message });
  }

  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
