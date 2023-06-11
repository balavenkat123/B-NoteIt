import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings={
    databaseURL:"https://b-noteit-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const listItemsIndb=ref(database,"list items")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
let para=document.getElementById("para")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(listItemsIndb,inputValue)
    console.log(inputValue)
    
    para.textContent=inputValue
})