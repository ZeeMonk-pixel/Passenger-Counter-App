// let welcomeEl = document.getElementById("welcome-el")

// let name = "Asha Gabriel"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " .O"

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.innerText = count
}

let saveBtn = document.getElementById("save-btn")

function save() {
    let previousEntries = count + " - "
    saveEl.textContent += previousEntries 
    countEl.textContent = 0
    count = 0
}

