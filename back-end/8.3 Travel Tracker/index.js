import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Spide123r",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let country_list = [];
  console.log(result.rows);
  result.rows.forEach((element) => {
    country_list.push(element.country_code);
  });
  return country_list;
}

app.get("/", async (req, res) => {
  let conuntry = await checkVisisted();

  res.render("index.ejs", {
    countries: conuntry,
    total: conuntry.length,
  });
  // db.end();
  //Write your code here.
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(input);
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
  // console.log(result.rows[0].country_code);

  if (result.rows.length !== 0) {
    await db.query("INSERT INTO visited_countries(country_code) VALUES ($1)", [
      result.rows[0].country_code,
    ]);
    res.redirect("/");
  }else{
    console.log("This is no this country!");
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
