let count = 0;

const btns = document.querySelectorAll (".btn");
let counter = document.getElementById ("value");


btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        
        const eBtn = e.currentTarget.classList;

        if (eBtn.contains("increase")) {
            count++;
        } else if ( eBtn.contains("decrease")) {
            count--;
        } else if (eBtn.contains("reset")) {
            count = 0;
        }

        counter.textContent = count;
        
        if (count > 0) {
            counter.style.color="green"
        } else if (count < 0 ) { 
            counter.style.color="red"
        } else {
            counter.style.color="black"
        }
       
    })
})