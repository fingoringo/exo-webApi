import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connectDB from "./utils/db.utils.js";
import mainRouter from "./routers/index.js";

connectDB();

const { NODE_ENV, PORT } = process.env;
const app = express();


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());


app.use('/api', mainRouter);

app.listen(PORT, () => {
    console.log((`Server is running on port ${PORT} ${NODE_ENV}`));

})