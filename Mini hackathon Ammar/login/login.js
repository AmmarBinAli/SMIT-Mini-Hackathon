import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBFrzvYWCTf1cKyIzmT4J0bBUR_lPDpC1w",
  authDomain: "blogging-app-ec709.firebaseapp.com",
  projectId: "blogging-app-ec709",
  storageBucket: "blogging-app-ec709.appspot.com",
  messagingSenderId: "429371653305",
  appId: "1:429371653305:web:d4bafa2150a29c0eb22f68",
  measurementId: "G-ZM7GDR86K5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logBtn = document.getElementById("logbtn");

logBtn.addEventListener('click' , () => {

    let email = document.getElementById("logemail").value;
    let password = document.getElementById("logpass").value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("User Login Seccesfully");
    window.location.href = ("../withLogin/with.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorCode , errorMessage)

  });
});
const backToSign = document.getElementById("backToSign");


