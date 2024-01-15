// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTOIiKIOc2W00nArT5saormlEYcoijz-k",
  authDomain: "mini-blog-47457.firebaseapp.com",
  projectId: "mini-blog-47457",
  storageBucket: "mini-blog-47457.appspot.com",
  messagingSenderId: "659578352332",
  appId: "1:659578352332:web:16a6f85c09db7b140a0869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };