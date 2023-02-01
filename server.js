// import { firebaseContainer } from './containers/firebaseContainer.js';
import { FirebaseDaoCarts } from './daos/carts/firebaseDaoCarts.js';
import { FirebaseDaoProducts } from './daos/products/firebaseDaoProducts.js';

const productFireB = new FirebaseDaoProducts('product');
const cartFireB = new FirebaseDaoCarts('carts');

const firebaseServer = async  () => {
    await productFireB.read();
    await productFireB.create();
    await productFireB.read();
    await productFireB.update();
    await productFireB.read();
    await productFireB.deleteProduct();
    await productFireB.read();

    await cartFireB.read();
    await cartFireB.create();
    await cartFireB.read();
    await cartFireB.update();
    await cartFireB.read();
    await cartFireB.deleteProduct();
    await cartFireB.read();    
};


import { MongoDbDaoCarts } from './daos/carts/mongoDbDaoCarts.js';
import { MongoDbDaoProducts } from './daos/products/mongoDbDaoProducts.js';

const productMongo = new MongoDbDaoProducts('product');
const cartMongo = new MongoDbDaoCarts('carts');

const mongoDbServer = async  () => {
    await productMongo.read();
    await productMongo.create();
    await productMongo.read();
    await productMongo.update();
    await productMongo.read();
    await productMongo.deleteProduct();
    await productMongo.read();

    await cartMongo.read();
    await cartMongo.create();
    await cartMongo.read();
    await cartMongo.update();
    await cartMongo.read();
    await cartMongo.deleteProduct();
    await cartMongo.read();    
};

firebaseServer().finally(() => console.log('DONE'));
mongoDbServer().finally(() => console.log('DONE'));
