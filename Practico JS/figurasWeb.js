
let pi = 3.141592653589793; //Valor de pi

let valoresTriangulo=[], // Arreglo que almacena los valores de area y perimetro del triangulo
    valoresCuadrado=[], // Arreglo que almacena los valores de area y perimetro del cuadrado
    valoresCirculo=[], // Arreglo que almacena los valores de area y perimetro del circulo
    valoresRectangulo=[]; // Arreglo que almacena los valores de area y perimetro del rectangulo


function calculoTriangle(){ //Calcula la area y perimetro de un triangulo

    let triangleBase = parseInt(document.getElementById("triangleBase").value);
    let triangleHeight = parseInt(document.getElementById("triangleHeight").value);
    let triangleArea = (triangleBase * triangleHeight) / 2;
    let triangleSideA = parseInt(document.getElementById("triangleSideA").value);
    let triangleSideB = parseInt(document.getElementById("triangleSideB").value);
    let trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
    //return [triangleArea, trianglePerimeter];
    alert("triangleArea: " + triangleArea + " trianglePerimeter: " + trianglePerimeter);
    event.preventDefault();
}

function calculoSquare(){ //Calcula la area y perimetro de un cuadrado
    let squareSide = parseInt(document.getElementById("squareSide").value);
    let squareArea = (squareSide * squareSide);
    let squearePerimeter = (squareSide * 4);
    //return [squareArea, squearePerimeter];
    alert("squareArea: " + squareArea + " squearePerimeter: " + squearePerimeter);
    event.preventDefault();
}

function calculoRectangle(){ //Calcula el area y perimetro de un rectangulo
    let rectangleBase = parseInt(document.getElementById("rectangleBase").value);
    let rectangleHeight = parseInt(document.getElementById("rectangleHeight").value);
    let rectangleArea = (rectangleBase * rectangleHeight);
    let rectanglePerimeter = (rectangleBase * 2) + (rectangleHeight * 2);
    //return [rectangleArea, rectanglePerimeter];
    alert("rectangleArea: " + rectangleArea + " rectanglePerimeter: " + rectanglePerimeter);
    event.preventDefault();
}

function calculoCircle(){ //Calcula la area y perimetro de un circulo
    let circleRadius = parseInt(document.getElementById("circleRadius").value);
    let circleArea = (pi * (circleRadius * circleRadius));
    let circlePerimeter = (2 * pi * circleRadius);
    let circleDiameter = (2 * circleRadius);
    //return [circleArea, circlePerimeter, circleDiameter];
    alert("circleArea: " + circleArea + " circlePerimeter: " + circlePerimeter + " circleDiameter: " + circleDiameter);
    event.preventDefault();
}

//console.log("Cálculo de figuras");
//console.log("Bienvenido a la calculadora de figuras")
//let tipoFigura = parseInt(prompt("Ingrese 1 para calcular un Triangulo, 2 para un cuadrado, 3 para rectangulo y 4 para un circulo: "));

//switch (tipoFigura) {  //Switch que elige según la figura la función a calcular
//    case 1:
//        valoresTriangulo = calcularTriangulo();
//        console.log("El area del triangulo es: " + valoresTriangulo[0]);
//        console.log("El perimetro del triangulo es: " + valoresTriangulo[1]);
//        break;
//    case 2:
//        valoresCuadrado = calcularCuadrado();
//        console.log("El area del cuadrado es: " + valoresCuadrado[0]);
//        console.log("El perimetro del cuadrado es: " + valoresCuadrado[1]);
//        break;
//    case 3:
//        valoresRectangulo = calcularRectangulo();
// //       console.log("El area del rectangulo es: " + valoresRectangulo[0]);
//        console.log("El perimetro del rectangulo es: " + valoresRectangulo[1]);
//        break;
//    case 4:
//        valoresCirculo = calcularCirculo();
//        console.log("El area del circulo es: " + valoresCirculo[0]);
//        console.log("El perimetro del circulo es: " + valoresCirculo[1]);
//        console.log("El diametro del circulo es: " + valoresCirculo[2]);
//        break;
//    default:
//}