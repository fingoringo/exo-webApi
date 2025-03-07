import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)
    .all((_, res) => res.sendStatus(405))


export default productRouter;


