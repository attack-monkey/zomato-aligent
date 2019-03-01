module.exports = (cuisines) => cuisines.map(cuisine => ({
    name: cuisine.cuisine.cuisine_name,
    id: cuisine.cuisine.cuisine_id
}));