function calculateWeightedAverage(notas) { //Calcula el promedio ponderado
    let totalNotas = 0;
    let totalCredits = 0;

    for (let i = 0; i < notas.length; i++) {
        totalNotas += notas[i].grade * notas[i].credits;
        totalCredits += notas[i].credits;
    }
    let weightedAverage = totalNotas / totalCredits;

    return weightedAverage;
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

let notas = [];
console.log("Bienvenido a el calculador de promedios ponderados");
let numeroMaterias =parseInt(prompt("Ingrese la cantidad de notas de materias que desea calcular: "));
console.log("Ingrese las notas de las " + numeroMaterias, "materias")

for(let i = 0; i < numeroMaterias; i++) { //Recorre las materias
    let materia = {
        nameMateria: prompt("Ingrese el nombre de la materia " + (i + 1)),
        grade: parseInt(prompt("Ingrese la nota de la materia " + (i + 1))),
        credits: parseInt(prompt("Ingrese la cantidad de creditos de la materia " + (i + 1)))
    }
    notas.push(materia);
}

console.log("Calculando el promedio ponderado...");
console.log("El promedio ponderado de las materias ingresadas es: " + round(calculateWeightedAverage(notas)));
alert("El promedio ponderado de las materias ingresadas es: " + round(calculateWeightedAverage(notas)));

