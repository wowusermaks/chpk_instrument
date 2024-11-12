
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvZLCh9lxq5X0p4cabemdDUgrBUog6Afo",
  authDomain: "my-cnc-sayt.firebaseapp.com",
  projectId: "my-cnc-sayt",
  storageBucket: "my-cnc-sayt.appspot.com",
  messagingSenderId: "884153279044",
  appId: "1:884153279044:web:64ecf3d95b916b17041211",
  measurementId: "G-NL97BJE8NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function addToCart(product) {
    addDoc(collection(db, "cart"), product)
        .then(() => {
            alert('Товар додано в кошик!');
        })
        .catch(error => {
            console.error("Помилка додавання в кошик:", error);
        });
}
