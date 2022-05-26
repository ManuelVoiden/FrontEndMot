let pi = 3.141592653589793; //Valor de pi

let valoresTriangulo=[], // Arreglo que almacena los valores de area y perimetro del triangulo
    valoresCuadrado=[], // Arreglo que almacena los valores de area y perimetro del cuadrado
    valoresCirculo=[], // Arreglo que almacena los valores de area y perimetro del circulo
    valoresRectangulo=[]; // Arreglo que almacena los valores de area y perimetro del rectangulo


function calcularTriangulo(){ //Calcula la area y perimetro de un triangulo
    let baseTriangulo = parseInt(prompt("Ingrese la base del triangulo: "));
    let alturaTriangulo = parseInt(prompt("Ingrese la altura del triangulo: "));
    let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    let ladoATriangulo = parseInt(prompt("Ingrese el lado A del triangulo: "));
    let ladoBTriangulo = parseInt(prompt("Ingrese el lado B del triangulo: "));
    let perimetroTriangulo = ladoATriangulo + ladoBTriangulo + baseTriangulo;
    return [areaTriangulo, perimetroTriangulo];
}

function calcularCuadrado(){ //Calcula la area y perimetro de un cuadrado
    let ladoCuadrado = parseInt(prompt("Ingrese el lado del cuadrado: "));
    let areaCuadrado = (ladoCuadrado * ladoCuadrado);
    let perimetroCuadrado = (ladoCuadrado * 4);
    return [areaCuadrado, perimetroCuadrado];
}

function calcularRectangulo(){ //Calcula el area y perimetro de un rectangulo
    let baseRectangulo = parseInt(prompt("Ingrese la base del rectangulo: "));
    let alturaRectangulo = parseInt(prompt("Ingrese la altura del rectangulo: "));
    let areaRectangulo = (baseRectangulo * alturaRectangulo);
    let perimetroRectangulo = (baseRectangulo * 2) + (alturaRectangulo * 2);
    return [areaRectangulo, perimetroRectangulo];
}

function calcularCirculo(){ //Calcula la area y perimetro de un circulo
    let radioCirculo = parseInt(prompt("Ingrese el radio del circulo: "));
    let areaCirculo = (pi * (radioCirculo * radioCirculo));
    let perimetroCirculo = (2 * pi * radioCirculo);
    let diametroCirculo = (2 * radioCirculo);
    return [areaCirculo, perimetroCirculo, diametroCirculo];
}

console.log("Cálculo de figuras");
console.log("Bienvenido a la calculadora de figuras")
let tipoFigura = parseInt(prompt("Ingrese 1 para calcular un Triangulo, 2 para un cuadrado, 3 para rectangulo y 4 para un circulo: "));

switch (tipoFigura) {  //Switch que elige según la figura la función a calcular
    case 1:
        valoresTriangulo = calcularTriangulo();
        console.log("El area del triangulo es: " + valoresTriangulo[0]);
        console.log("El perimetro del triangulo es: " + valoresTriangulo[1]);
        break;
    case 2:
        valoresCuadrado = calcularCuadrado();
        console.log("El area del cuadrado es: " + valoresCuadrado[0]);
        console.log("El perimetro del cuadrado es: " + valoresCuadrado[1]);
        break;
    case 3:
        valoresRectangulo = calcularRectangulo();
        console.log("El area del rectangulo es: " + valoresRectangulo[0]);
        console.log("El perimetro del rectangulo es: " + valoresRectangulo[1]);
        break;
    case 4:
        valoresCirculo = calcularCirculo();
        console.log("El area del circulo es: " + valoresCirculo[0]);
        console.log("El perimetro del circulo es: " + valoresCirculo[1]);
        console.log("El diametro del circulo es: " + valoresCirculo[2]);
        break;
    default:
}

