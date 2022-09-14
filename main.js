let name = " Gabriel"
let greeting = "Hi, my name is"

let myGreeting = greeting + name 
console.log(myGreeting)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 

let count = 0

let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

let saveBtn = document.getElementById("save-btn")

function save() {
    
}
