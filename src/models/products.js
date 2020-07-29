const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSChema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: Date.now
    }
});

ProductSChema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSChema);