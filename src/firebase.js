// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI67rLEMXTc1iQf4U2ex1zjQDizQdxFvM",
  authDomain: "files-storage-qpsgj21.firebaseapp.com",
  projectId: "files-storage-qpsgj21",
  storageBucket: "files-storage-qpsgj21.appspot.com",
  messagingSenderId: "1054300838278",
  appId: "1:1054300838278:web:d25799f8bb60b946927407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
