import { mongoDbConfig } from '../config/config.js';

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
        mongoDbConfig,
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

    read = async () => {
        
    
        const querySnapshot = await Product.read(productToAdd);
    
        if (!querySnapshot) {
            console.log('coleccion vacia');Product
        } else {
            querySnapshot.forEach(element => {
                console.log(JSON.stringify(.read()), null, 2);
            });
        }
    };
    
    create = async () => {
        const db = admin.firestore();
        const query = db.collection(this.route);
    
        await Promise.all([
            query.doc('bolso').set({ name:'bolso'})
        ]);
        console.log('create done');
    };
    
    
    update = async () => {
        const db = admin.firestore();
        const query = db.collection(this.route);
    
        await query.doc('bolso').set({ newName: 'bolso de vuelo'}, {merge: true});
    
    };
    
    deleteProduct = async () => {
        const db = admin.firestore();
        const query = db.collection(this.route);
    
        await query.doc('bolso').delete();
    
    };


    
};

export default MongooseContainer;
