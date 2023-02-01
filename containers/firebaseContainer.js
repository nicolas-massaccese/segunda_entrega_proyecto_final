import { firebaseConfig } from '../config/config.js';

import { initializeApp } from "firebase/app";

import admin from 'firebase-admin';

const app = initializeApp(firebaseConfig);

// class FileContainer {

//     constructor(route){
//         this.route = route;

//     }

//     read = async () => {
//         const db = admin.firestore();
//         const query = db.collection('products');
    
//         const querySnapshot = await query.get();
    
//         if (querySnapshot.empty) {
//             console.log('coleccion vacia');
//         } else {
//             querySnapshot.forEach(doc => {
//                 console.log(JSON.stringify(doc.data()), null, 2);
//             });
//         }
//     };
    
//     create = async () => {
//         const db = admin.firestore();
//         const query = db.collection('products');
    
//         await Promise.all([
//             query.doc('bolso').set({ name:'bolso'})
//         ]);
//         console.log('create done');
//     };
    
    
//     update = async () => {
//         const db = admin.firestore();
//         const query = db.collection('products');
    
//         await query.doc('bolso').set({ newName: 'bolso de vuelo'}, {merge: true});
    
//     };
    
//     deleteProduct = async () => {
//         const db = admin.firestore();
//         const query = db.collection('products');
    
//         await query.doc('bolso').delete();
    
//     };
// }


const read = async () => {
    const db = admin.firestore();
    const query = db.collection('products');

    const querySnapshot = await query.get();

    if (querySnapshot.empty) {
        console.log('coleccion vacia');
    } else {
        querySnapshot.forEach(doc => {
            console.log(JSON.stringify(doc.data()), null, 2);
        });
    }
};

const create = async () => {
    const db = admin.firestore();
    const query = db.collection('products');

    await Promise.all([
        query.doc('bolso').set({ name:'bolso'})
    ]);
    console.log('create done');
};


const update = async () => {
    const db = admin.firestore();
    const query = db.collection('products');

    await query.doc('bolso').set({ newName: 'bolso de vuelo'}, {merge: true});

};

const deleteProduct = async () => {
    const db = admin.firestore();
    const query = db.collection('products');

    await query.doc('bolso').delete();

};


export {read, create, update, deleteProduct};

// export default FileContainer;