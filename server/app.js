const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//-----routes-----
const apiRoute = "/api/v1/";
app.get(apiRoute, (req, res) => {
  res.send("This is todolist api (version 1).");
});
//--> authentications.routes
const authRoutes = require("./src/routes/authentications.routes");
app.use(apiRoute, authRoutes);
//--> users.routes
const userRoutes = require("./src/routes/users.routes");
app.use(apiRoute, userRoutes);
//--> todolists.routes
const todolistRoutes = require("./src/routes/todolists.routes");
app.use(apiRoute, todolistRoutes);

//handle unknown error
const { serverUnknownErrorHandler } = require("./src/middlewares/serverUnknowErrorHandle/serverUnknowErrorHandle");
app.use(serverUnknownErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
