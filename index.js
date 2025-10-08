let container = document.getElementById("container");
let count = 0;

let btn = document.querySelector("button");
let h2 = document.createElement("h2");
btn.onclick = function(){
    count++;
    h2.innerHTML = count;
    container.appendChild(h2);
};