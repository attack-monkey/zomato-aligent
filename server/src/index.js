const express = require('express')
const app = express();
const port = 3000;
const apiKey = require('../zomato-api-key.const');

app.use(express.json());
app.get('/restaurants', (req, res) => {
    res.send({ message: 'yo' });
})

app.listen(port, () => {
    console.log(`Server-side app listening on port ${port}!`);
})