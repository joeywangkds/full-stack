import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log(`The method is: ${req.method}`);
  console.log(`The URL is: ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res, next) => {
  res.send("Hello");
  next();
  // console.log(next);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
