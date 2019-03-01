module.exports = (restaurants) => restaurants.map(restaurant => ({
    name: restaurant.restaurant.name,
    id: restaurant.restaurant.id,
    price: restaurant.restaurant.price_range,
    rating: restaurant.restaurant.user_rating.aggregate_rating
}));