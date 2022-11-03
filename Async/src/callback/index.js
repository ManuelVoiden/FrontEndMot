// Primer ejemplo de callback
function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(6, 2, sum));


// Segundo ejemplo de callback, ahora con setTimeout
const mensaje = function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
};
setTimeout(mensaje, 3000);

setTimeout(function() {  
    console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);

setTimeout(() => { 
    console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);


// Tercer ejemplo de callback, ahora con una funcion que ya incluye un callback
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 3000, 'Juan');

