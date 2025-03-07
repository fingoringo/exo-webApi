import products from "../db/product.db.js";


const productModel = {

    find: async () => {
        // const product = await products.find()
        // console.log(product);
        
        // return product
        
    
    },

    findById: async (id) => {
        const product = await products.findById(id)
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

