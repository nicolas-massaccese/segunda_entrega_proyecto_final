import { firebaseConfig } from '../config/config.js';

import { initializeApp } from "firebase/app";

import admin from 'firebase-admin';

const app = initializeApp(firebaseConfig);

class FirebaseContainer {

    constructor(route){
        this.route = route;

    }

    read = async () => {
        const db = admin.firestore();
        const query = db.collection(this.route);
    
        const querySnapshot = await query.get();
    
        if (querySnapshot.empty) {
            console.log('coleccion vacia');
        } else {
            querySnapshot.forEach(doc => {
                console.log(JSON.stringify(doc.data()), null, 2);
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

export default FirebaseContainer;
