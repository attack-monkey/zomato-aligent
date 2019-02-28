const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
const fetch = require('./fetch/fetch');
const config = require('./config/config');
const parseRestaurants = require('./functions/parse-restaurants-into-digest.fn');

app.use(express.json());
app.use(cors());

app.get('/restaurants', async (req, res) => {
    try {
        results = await fetch(
            `
                ${config.zomatoUrl}search?
                entity_id=${config.cityId}&
                entity_type=city&count=2&
                cuisines=25
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        console.log(results);
        if (results.error) throw results.error;
        const parsedResults = parseRestaurants(results.restaurants);
        console.log(parsedResults);
        res.send({ message: parsedResults });
    } catch (e) {
        console.error(e);
        res.sendStatus('500');
    }
});
app.get('/categories', async (req, res) => {
    try {
        results = await fetch(
            `
                ${config.zomatoUrl}categories
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        console.log(results);
        if (results.error) throw results.error;
        res.send({ message: results });
    } catch (e) {
        res.sendStatus('500');
    } 
});
app.get('/cuisines', async (req, res) => {
    try {
        results = await fetch(
            `
                ${config.zomatoUrl}cuisines?city_id=${config.cityId}
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        console.log(results);
        if (results.error) throw results.error;
        res.send({ message: results });
    } catch (e) {
        res.sendStatus('500');
    } 
})

app.listen(port, () => {
    console.log(`Server-side app listening on port ${port}!`);
})
