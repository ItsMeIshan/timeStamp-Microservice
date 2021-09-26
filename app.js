const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var cors = require('cors');
const router = require('./routes/timestamp');
app.use(cors({optionsSuccessStatus: 200})); 

app.use('/api', router);
app.get('/', (req, res)=>{
    res.send('timeStamp microservice');
})
app.listen(port, console.log(`server Started at Port ${port}...`));