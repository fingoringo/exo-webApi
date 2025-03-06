import productModel from "../models/product.model.js";


const productController = {

    getProducts: async function (req, res) {
        try {
            const product = await productModel.find();
            res.json(product)
        }
        catch (error) {
            res.status(500).json('Failed to fetch the products')
        }
    },

    addProduct: async function (req, res) {
        const { name, ean, quantity, category, description } = req.body;
        if (!name || !ean || !quantity || !category ) {
            res.status(400).json('Name and price required');
        };
        try {
            const lastProduct = await productModel.findById().sort({ id: - 1 });
            const newId = lastProduct ? lastProduct.id + 1 : 1;

            const newProduct = new productModel({ ...req.body, id: newId })
            await newProduct.save();

            res.status(201).json(`newProduct, ${newProduct}`)
        } catch (error) {
            res.status(500).json('Failed to add the product')
        }
        }
        

    // updateProduct: function (req, res) {
    //     const { id } = req.params;
    //     const { name, price } = req.body;
    //     const product = product.find(p => p.id === parseInt(id));

    //     if (!product) {
    //         res.status(404).json('Product not found')
    //     };
    //     if (name) product.name = name;
    //     if (price) product.price = price;
    //     res.json('product')
    // },

    // deleteProduct: function (req, res) {
    //     const { id } = req.params;
    //     const productIndex = products.findIndex(p => p.id === parseInt(id));
    //     if (productIndex === -1) {
    //         res.status(404).json('Product not found')
    //     };
    //     products.splice(productIndex, 1);
    //     res.status(204).send();
    // }

};

export default productController;