// import env from './options.env'

// MARIA DB CONFIG
const mariaDb = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mariadb_app',
    },
};

// SQLITE 3 CONFIG
// import path from 'path';

// const DBSOURCE = path.join(__dirname, '../DBlite/mydb.sqlite');

// const sqLite = {
//     client: 'sqlite3',
//     connection: {
//     filname: DBSOURCE,
//     },
//     useNullAsDefault: true,
// };



// MONGO CONFIG

import mongoose from 'mongoose';

const mongoUser= "nicomassa";
const mongoPass = "pd4W7kAWS82D5cxL";

let isConnected;

const mongoDb = async () => {

    if(isConnected){
        await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.q77nmf6.mongodb.net/?retryWrites=true&w=majority`);
        isConnected = true;
        return;
    }
    console.log('Connected');
    return;
};
// const mongoDb = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.q77nmf6.mongodb.net/?retryWrites=true&w=majority`


// FIREBASE CONFIG



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjHtWISXWZ6U5deIbUvOAOxtDrf21lZxA",
    authDomain: "ecommerce1000ft.firebaseapp.com",
    projectId: "ecommerce1000ft",
    storageBucket: "ecommerce1000ft.appspot.com",
    messagingSenderId: "146635967288",
    appId: "1:146635967288:web:3c46eaaa0187a3b7d1cfcd"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

import admin from 'firebase-admin';

import serviceAccount from './credentials.js';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ecommerce1000ft.firebaseio.com',
});

export { mariaDb, mongoDb, firebaseConfig, serviceAccount };



