import { mongoDb } from '../config/config.js';

import Product from '../models/productSchema.js';
import Cart from '../models/cartSchema.js';
import mongoose from 'mongoose';

const productToAdd = [
    {
        name: "Alpha",
        description: "mochila",
        photo: "https://...",
        price: 12000,
        stock: 5
}];

try{
    mongoose.set("strictQuery", false);

    mongoose.connect(
        mongoDb,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("mongoose connected");

    Product.create(productToAdd);
    
    Cart.create({});

} catch(e){

}

class MongooseContainer {

    constructor(route){
        this.route = route;

    }

    create = async () => {
        this.route.create(productToAdd);
    };


    
};

export default MongooseContainer;
