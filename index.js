import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
