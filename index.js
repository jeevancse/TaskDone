require('@babel/register');
const express = require('express')
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const port = process.env.APP_PORT || 4001
require('./src/config/sequelize')
const apiRouter = require('./src/routes/public')

app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

app.use('/pub',apiRouter)
app.listen( port ,  () => {
    console.log(`App is listening At ${port}`)
})


module.exports = app