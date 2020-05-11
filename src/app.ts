import express from "express";
import exhbs from "express-handlebars";
import path from "path";

import {addRouter, coursesRouter, homeRouter} from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exhbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/courses', coursesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}...`);
  debugger
});
