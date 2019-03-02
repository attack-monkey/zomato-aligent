module.exports = (categories) => categories.map(category => ({
    name: category.categories.name,
    id: category.categories.id
}));