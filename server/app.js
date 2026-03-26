//create express server to node.js where there is a route / that returns "Hello World"
const express = require("express");
const app = express();
const port = 3000;

//add cors to allow all origins
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-Token"
  );
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader("Access-Control-Allow-Credentials", true); //salli evästeet

  res.setHeader("Content-Type", "application/json"); //vastataan jsonina

  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//end of code
// To run this code, save it in a file named app.js and run `node app.js` in your terminal. Then, open your browser and go to http://localhost:3000 to see the result.
//create  post route /data that returns the json object { "name": "John", "age": 30 }
app.use(express.json());

//change data to list of objects
let data = [
  { id: 1, nimi: "Matti", puhelin: "050-1234323" },
  { id: 2, nimi: "Liisa", puhelin: "040-5432343" },
  { id: 3, nimi: "Osmo", puhelin: "044-2354334" },
];

//change post route to add new object to data list
app.post("/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json(newData);
});
//end of code
//change get route to return list of objects
app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/data/:nimi", (req, res) => {
  nimi = req.params.nimi;
  console.log(nimi);
  let fdata = data.find((item) => item.nimi === nimi);
  res.json(fdata);
});
