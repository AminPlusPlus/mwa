const express = require("express");
const logger = require("./middleware/logging");
const morgan = require("morgan");
const debug = require("debug")("app:startup");
const courseRoutes = require("./routes/course-route");
const homeRoutes = require("./routes/home");

const app = express();
app.use(express.json());
app.use(morgan("common"));

app.set("view engine", "pug");
app.set("views", "./views");

//custome midlware
app.use(logger);

//routes
app.use("/courses", courseRoutes);
app.use("/", homeRoutes);

//debug
debug("Debug callled");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening starting at ${port}`);
});
