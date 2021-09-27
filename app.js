const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var cors = require('cors');
const router = require('./routes/timestamp');
app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.static('public'));
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.use('/api', router);
app.listen(port, console.log(`server Started at Port ${port}...`));