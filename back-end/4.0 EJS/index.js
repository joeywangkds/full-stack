import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const date = new Date(); // 创建一个表示当前日期的Date对象
const dayOfWeek = date.getDay();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, (req, res) => {
  console.log(`Listening on the port ${port}`);
});

// app.get("/",(req,res)=>{
//     res.send("<h1>The server is running now.</h1>")
// })

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/views/index.html");
  console.log(dayOfWeek);
  if(dayOfWeek>=1&&dayOfWeek<=5){
    res.render("index.ejs", {
        content: ["Today is weekday, it's time to work hard!"],
      });
  }else{
    res.render("index.ejs", {
        content: ["Today is weekend, it's time to have fun!"],
      });
  }
  
});
