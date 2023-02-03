import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    name: { type: Date, default: Date.now },
    stock: { type: String, default: [] }
});

const Cart = model('Cart', cartSchema);

export default Cart;