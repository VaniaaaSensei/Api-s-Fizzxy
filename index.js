__path = process.cwd()

const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');

const PORT = process.env.PORT || 3000;

//library
const routerapi = require('./routes/api.js');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//anunya
app.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
app.get('/dashboard', (req, res) => {
    res.sendFile(__path + '/views/dashboard.html')
})

//url
app.use('/api', routerapi)

//run
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
