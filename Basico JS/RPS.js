let valor;
let mano;
valor = Math.floor(Math.random()*100);
console.log("El valor de la mano es " + valor);

// if value is between 0 and 33 then its a rock
if (valor >= 0 && valor <= 33) {
    mano = "Piedra";
}
// if value is between 34 and 66 then its a paper
else if (valor >= 34 && valor <= 66) {
    mano = "Papel";
}
// if value is between 67 and 100 then its a scissor
else if (valor >= 67 && valor <= 100) {
    mano = "Tijera";
}
console.log("La mano es " + mano);

let mano_jugador = prompt("Ingrese su mano" );



