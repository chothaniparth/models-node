const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./routers/index');
const dbConnect = require('./dbConnect');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors())

dbConnect()
// console.log(process.env.dbConnectionStr);
app.use('/api', routers);

const PORT = process.env.PORT || 3025
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})