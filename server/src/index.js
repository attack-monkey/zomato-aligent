const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
const fetch = require('./fetch/fetch');
const config = require('./config/config');
const parseRestaurants = require('./functions/parse-restaurants-into-digest.fn');
const parseCategories = require('./functions/parse-categories.fn');
const parseCuisines = require('./functions/parse-cuisines.fn');

app.use(express.json());
app.use(cors());

const categoriesCache = {
    value: undefined,
    expiry: undefined
};

const cuisinesCache = {
    value: undefined,
    expiry: undefined
};

app.get('/restaurants', async (req, res) => {
    try {
        const queryString = Object
            .keys(req.query)
            .map(key => key + '=' + req.query[key])
            .join('&');
        console.log(queryString);
        results = await fetch(
            `
                ${config.zomatoUrl}search?entity_id=${config.cityId}&entity_type=city&count=20&${queryString}
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        if (results.error) throw results.error;
        const parsedResults = parseRestaurants(results.restaurants);
        console.log('- Returning fresh restaurants');
        res.send({ message: parsedResults });
    } catch (e) {
        console.log('error - ', e.message);
        res.sendStatus('500');
    }
});

app.get('/restaurants/:id', async (req, res) => {
    try {
        console.log('- Getting restaurant => ' + req.params.id);
        results = await fetch(
            `${config.zomatoUrl}restaurant?res_id=${req.params.id}`,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        if (results.error) throw results.error;
        console.log('- Returning fresh restaurant');
        res.send({ message: results });
    } catch (e) {
        return console.log('error - ', e.message);
        res.sendStatus('500');
    }
});

app.get('/categories', async (req, res) => {
    try {
        if (categoriesCache.value) {
            console.log('- Returning categories from cache');
            res.send(categoriesCache.value);
            return;
        }
        results = await fetch(
            `
                ${config.zomatoUrl}categories
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        if (results.error) throw results.error;
        console.log(results);
        const parsedResults = parseCategories(results.categories);
        console.log('- Caching categories');
        categoriesCache.value = { message: parsedResults };
        console.log('- Returning fresh categories');
        res.send({ message: parsedResults });
    } catch (e) {
        console.log('error - ', e.message);
        res.sendStatus('500');
    } 
});

app.get('/cuisines', async (req, res) => {
    try {
        if (cuisinesCache.value) {
            console.log('- Returning cuisines from cache');
            res.send(cuisinesCache.value);
            return;
        }
        results = await fetch(
            `
                ${config.zomatoUrl}cuisines?city_id=${config.cityId}
            `,
            {
                headers: config.requestHeaders,
                method: 'get'
            }
        );
        if (results.error) throw results.error;
        const parsedResults = parseCuisines(results.cuisines);
        console.log('- Caching cuisines');
        cuisinesCache.value = { message: parsedResults };
        console.log('- Returning fresh cuisines');
        res.send({ message: parsedResults });
    } catch (e) {
        console.log('error - ', e.message);
        res.sendStatus('500');
    } 
})

app.listen(port, () => {
    console.log(`Server-side app listening on port ${port}!`);
})
