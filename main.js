let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let elements = [who, what, when];

const startExcuse = (elements) => {    
    let excuse = "", rand = 0;
    for (i = 0; i < elements.length; i++) {
        rand = Math.floor(Math.abs(Math.random() * elements[i].length - 1));
        excuse += elements[i][rand] + " ";
    }
    
    let html = document.getElementById("excuse").innerHTML = excuse.trim();   
}

window.onload = function() {
    startExcuse(elements);
}