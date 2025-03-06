import products from "../db/product.db.js";


const productModel = {

    find: async ({ offset = 0, limit = 10 }) => {
        const product = await products.find().skip(offset).limit(limit).lean();
        return product
    },

    findById: async (id) => {
        const product = await products.findById(id).lean();
        return product
    },

    add: async ({ name, ean, category, quantity, description }) => {
        if (!name || !ean || !category || !quantity) {
            throw new Error('Please fill in all the required fields.')
        }

        const productAdded = new products({ name, ean, category, quantity, description });

        await productAdded.save();
        console.log('Product added');

        return productAdded;

    }
}
export default productModel

