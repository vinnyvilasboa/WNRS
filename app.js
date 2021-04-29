
let playerA = document.querySelector(".playerA")
let playerB = document.querySelector(".playerB")


let form = document.getElementById("gameForm")
form.addEventListener("submit",(e) => {
    e.preventDefault()
 const data = e.target.elements 
 console.log("data", data);
})

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}