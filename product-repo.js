
const connectedKnex = require('./knex-connector');

function getAllproducts() {
    return connectedKnex('products').select('*');
}

function getproductById(id) {
    return connectedKnex('products').select('*').where('id', id).first();
}

function addproduct(product) {
    return connectedKnex("products").insert(product);
}

function updateproduct(product, id) {
    return connectedKnex("products").where('id', id).update(product);
}

function deleteproduct(id) {
    return connectedKnex("products").where('id', id).del()
}

module.exports = {
    getproductById,
    getAllproducts,
    addproduct,
    updateproduct,
    deleteproduct
}