import { read, create, update, deleteProduct } from './containers/firebaseContainer.js';


const server = async  () => {
    await read();
    await create();
    await read();
    await update();
    await read();
    await deleteProduct();
    await read();
    
};

server().finally(() => console.log('DONE'));
