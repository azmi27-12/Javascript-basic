// variabili counter e il valore del display
let counter=0;
let displayValue = document.getElementById("display");

//Quando si preme "+"
document.getElementById("plus-button").addEventListener("click", 
function(){
    counter++;
    displayValue.innerHTML = counter;
})

//Quando si preme "−"
document.getElementById("minus-button").addEventListener("click", 
function(){
    counter--;
    displayValue.innerHTML = counter;
})


// quando si preme "reset"
document.getElementById("reset").addEventListener("click", 
function(){
    counter = 0;
    displayValue.innerHTML = counter;
})


