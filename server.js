const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const PORT = process.env.PORT || 3001;

const app = express();
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create();
// const hbs = exphbs.create({
//   // helpers: helpers,
//   extname: ".hbs",
// });

const sess = {
  secret: "SuperDuper Secreter Secret Secret",
  cookie: { maxAge: 1000000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// app.engine("hbs", hbs.engine);
// app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
