
function render() {
    increament();
    
}
let count = 20;


let counter = document.querySelector("#count");
counter.innerHTML=count;

function increament() {

    count = count + 1;
    console.log(count);
    counter.innerHTML=count;
    
    
}
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);

render();