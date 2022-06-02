function calculateMediana(listaNumeros){
    let mediana = 0;
    let listaOrdenada = listaNumeros.sort((a,b) => a-b);
    let longitud = listaOrdenada.length;
    if(longitud % 2 == 0){
        mediana = (listaOrdenada[longitud/2] + listaOrdenada[(longitud/2)-1])/2; //Aquí se resta 1 ya que longitud/2 en una lista de 20 de largo que empieza en 0 seria la 11 y no la 10
    }else{
        mediana = listaOrdenada[Math.floor(longitud/2)];  //Se usa floor ya que las posiciones se cuentan desde 0, la longitud del array si empieza desde 1
    }
    return mediana;
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

let listaNumeros = [];
console.log("Bienvenido a el calculador de mediana");
let cantidadNumeros= parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
console.log("Ingrese los numeros");

for(let i = 0; i < cantidadNumeros; i++) {
    listaNumeros.push(parseInt(prompt("Ingrese el numero " + (i + 1))));
}

console.log("Calculando la mediana...");
console.log("La mediana de los numeros ingresados es: " + round(calculateMediana(listaNumeros)));