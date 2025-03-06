import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)


export default productRouter;


