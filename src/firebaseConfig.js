/* fire base V9*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQpYqHJn58wqNA2nxjB4Vj1qqBpy6ZNsg",
  authDomain: "exhibit-layout.firebaseapp.com",
  databaseURL:
    "https://exhibit-layout-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "exhibit-layout",
  storageBucket: "exhibit-layout.appspot.com",
  messagingSenderId: "760475685686",
  appId: "1:760475685686:web:eedf2fa8ef38a05deb9997",
  measurementId: "G-LR4BHPGE1H",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp); //for first parameter in other firebase methods
