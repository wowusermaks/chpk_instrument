
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

document.getElementById('add-product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const description = document.getElementById('product-description').value;

    try {
        await addDoc(collection(db, "products"), { name, price, description });
        alert('Товар додано успішно!');
        e.target.reset();
    } catch (error) {
        console.error("Помилка при додаванні товару: ", error);
        alert('Не вдалося додати товар');
    }
});
