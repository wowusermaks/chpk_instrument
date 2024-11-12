
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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

const auth = getAuth(app);

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Реєстрація пройшла успішно! Тепер ви можете увійти.');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(`Помилка реєстрації: ${error.message}`);
        });
});
