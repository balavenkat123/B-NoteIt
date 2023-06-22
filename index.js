
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"






  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD2tYMtIyxpJscCItQodl4j1jrM1eUdM20",
    authDomain: "bnotes-2f0fd.firebaseapp.com",
    projectId: "bnotes-2f0fd",
    storageBucket: "bnotes-2f0fd.appspot.com",
    messagingSenderId: "312073280041",
    appId: "1:312073280041:web:975251d33a5ecebea59a38"
  };

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
  const shoppingListInDB = ref(database, "shoppingList")
  
  const inputFieldEl = document.getElementById("input-field")
  const addButtonEl = document.getElementById("add-button")
  
  addButtonEl.addEventListener("click", function() {
      let inputValue = inputFieldEl.value
      
      push(shoppingListInDB, inputValue)
      
      console.log(inputValue)
  })