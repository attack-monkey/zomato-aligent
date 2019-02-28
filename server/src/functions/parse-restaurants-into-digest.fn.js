module.exports = (restaurants) => restaurants.map(restaurant => ({
    name: restaurant.restaurant.name,
    id: restaurant.restaurant.id
}));