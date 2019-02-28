const apiKey = require('../../zomato-api-key.const');
module.exports = {
    cityId: '297',
    zomatoUrl: 'https://developers.zomato.com/api/v2.1/',
    requestHeaders: {
        'Accept': 'application/json',
        'user-key': apiKey
    }
}