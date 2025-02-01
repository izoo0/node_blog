const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const postsRoute = require('./Routes/posts_route')
app.use(bodyParser.json());
app.use("/posts",postsRoute)

module.exports = app