let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let elements = [who, action, what, when];

const startExcuse = (elements) => {    
    let excuse = "", rand = 0;

    for (let i = 0; i < elements.length; i++) {
        rand = Math.floor(Math.abs(Math.random() * elements[i].length - 1));
        excuse += elements[i][rand] + " ";
    }
    
    document.querySelector("#excuse").innerHTML = excuse.trim();
}

window.onload = function() {
    startExcuse(elements);
}