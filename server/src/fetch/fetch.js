const fetch = require('node-fetch');

module.exports = async (url, options) => {
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (e) {
        return { error: e };
    }
}