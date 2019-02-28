const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
const fetch = require('./fetch/fetch');
const config = require('./config/config');
const parseRestaurants = require('./functions/parse-restaurants-into-digest.fn');

app.use(express.json());
app.use(cors());

const restaurantsCache = {
    value: undefined,
    expiry: undefined
};

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
        if (restaurantsCache.value) {
            console.log('- Returning restaurants from cache');
            res.send(restaurantsCache.value);
            return;
        }
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
        if (results.error) throw results.error;
        const parsedResults = parseRestaurants(results.restaurants);
        console.log('- Caching restaurants');
        restaurantsCache.value = { message: parsedResults };
        console.log('- Returning fresh restaurants');
        res.send({ message: parsedResults });
    } catch (e) {
        console.error(e);
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
        console.log('- Caching categories');
        categoriesCache.value = { message: results };
        console.log('- Returning fresh categories');
        res.send({ message: results });
    } catch (e) {
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
        console.log('- Caching cuisines');
        cuisinesCache.value = { message: results };
        console.log('- Returning fresh cuisines');
        res.send({ message: results });
    } catch (e) {
        res.sendStatus('500');
    } 
})

app.listen(port, () => {
    console.log(`Server-side app listening on port ${port}!`);
})
