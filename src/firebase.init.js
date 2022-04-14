// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4AIqXV4osh0H0eX8kczTLG1UhMcDqJKU",
    authDomain: "my-new-projects-41e7f.firebaseapp.com",
    projectId: "my-new-projects-41e7f",
    storageBucket: "my-new-projects-41e7f.appspot.com",
    messagingSenderId: "1065403179140",
    appId: "1:1065403179140:web:2b5582c4971972f0f1a2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;