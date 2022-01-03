let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let elements = [who, action, what, when];

const startExcuse = (elements) => {    
    let excuses = elements.map(value => {
        return value[Math.floor(Math.abs(Math.random() * value.length - 1))];
    });

    document.querySelector("#excuse").innerHTML = excuses.join(" ");
}

window.onload = function() {
    startExcuse(elements);
}