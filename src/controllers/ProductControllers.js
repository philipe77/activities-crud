const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, resp) {
        const { page } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return resp.json(products);
    },

    async store(req, resp) {
        const products = await Product.create(req.body);
        return resp.json(products);
    },

    async show(req, resp) {
        const products = await Product.findById(req.params.id);
        return resp.json(products);
    },

    async update(req, resp) {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return resp.json(products);
    },

    async destroy(req, resp) {
        const products = await Product.findOneAndRemove(req.params.id);
        return resp.send();
    }
}