const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
let color = document.querySelector(".color");



btn.addEventListener("click", function() {
    let value = "#"

    for(let i = 0; i < 6; i++) {
    value += hex[getRandomNumber()];
    }
    
    color.textContent = value;
    document.body.style.backgroundColor = value;
})

function getRandomNumber () {
    return Math.floor(Math.random()*hex.length);
};