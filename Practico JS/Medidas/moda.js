function calculateModa(listaNumeros){   
    let moda = 0;
    let contador = 1;
    let contadorModa = 0;

    let listaOrdenada = listaNumeros.sort((a,b) => a-b);
    let longitudLista = listaOrdenada.length;

    for(let i=0; i<longitudLista; i++){
        if(listaOrdenada[i] == listaOrdenada[i+1]){
            contador++;
            if (contador >= contadorModa){
                contadorModa = contador;
                moda=listaOrdenada[i];
            }
        }else{
            contador = 1;
        }
    }

    return [moda, contadorModa];
}


console.log("Bienvenido a el calculador de moda");
let cantidadNumeros= parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
console.log("Ingrese los numeros");

for(let i = 0; i < cantidadNumeros; i++) {
    listaNumeros.push(parseInt(prompt("Ingrese el numero " + (i + 1))));
}

console.log("Calculando la moda...");
moda=calculateModa(listaNumeros);

if(moda[1]>1){
    console.log("La moda de los numeros ingresados es: " + moda[0], "y su frecuencia es: " + moda[1]);
}else{
    console.log("No hay moda");
}