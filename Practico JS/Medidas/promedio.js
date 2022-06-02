function calculateAverage(numbers) { //Calcula el promedio de un arreglo de numeros
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let listAverage = sum / numbers.length;

    return listAverage;
}

function round(num, decimales = 2) { //Redondea un numero
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}

let numbersList = [];
console.log("Bienvenido a el calculador de promedios");

let listLength = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));

for(let i = 0; i < listLength; i++) {
    numbersList.push(parseInt(prompt("Ingrese el numero " + (i + 1))));
}

console.log("Calculando el promedio...");
console.log("El promedio de los numeros ingresados es: " + round(calculateAverage(numbersList)));
alert("El promedio de los numeros ingresados es: " + round(calculateAverage(numbersList)));
