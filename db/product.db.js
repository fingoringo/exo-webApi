import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        trim: false
    },
    quantity: {
        type: Number,
        required: true,
        unique: false,
        minLength: 1
    },
    ean: {
        type: Number,
        required: true,
        unique: true,
        minLength: 8,
        maxLength: 13
    },
    category: {
        type: String,
        required: true,
        unique: false,
        minLength: 2,
    },
    description: {
        type: String,
        required: false,
        unique: false,
    }

}, {
    collection: 'product'
})

const products = mongoose.model('Product', productSchema)
export default products