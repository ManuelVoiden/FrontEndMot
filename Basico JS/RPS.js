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


let mano_jugador = prompt("Ingrese su mano");
if (mano_jugador == mano) {
    console.log("Empate");
    alert("Empate");
}
else if (mano_jugador == "Piedra" && mano == "Tijera") {
    console.log("Ganaste");
    alert("Ganaste");
}
else if (mano_jugador == "Papel" && mano == "Piedra") {
    console.log("Ganaste");
    alert("Ganaste");
}
else if (mano_jugador == "Tijera" && mano == "Papel") {
    console.log("Ganaste");
    alert("Ganaste");
}
else {
    console.log("Perdiste");
    alert("Perdiste");
}   // end of else  */  // end of if         

