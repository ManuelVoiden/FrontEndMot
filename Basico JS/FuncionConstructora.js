function apto(rooms,bathrooms,garage,estrato,neighborhood) { // Parametros: rooms, bathrooms, garage, estrato, neighborhood
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
    this.estrato = estrato;
    this.neighborhood = neighborhood;
}

let aptoNuevo = new apto(2,1,1,1,"Chicó");

console.log(aptoNuevo)


let aptos=[];
let numRegistros = prompt("¿Cuántos nuevas propiedades desea registrar?: ");

for (let i = 0; i < numRegistros; i++) { //Para cada registro que se desea agregar a la lista de aptos en el arreglo aptos
    let rooms = prompt("¿Cuántas habitaciones tiene la propiedad?: ");
    let bathrooms = prompt("¿Cuántas baños tiene la propiedad?: ");
    let garage = prompt("¿Cuántas garages tiene la propiedad?: ");
    let estrato = prompt("¿En qué estrato se encuentra la propiedad?: ");
    let neighborhood = prompt("¿En qué barrio se encuentra la propiedad?: ");
    let aptoNuevo = new apto(rooms,bathrooms,garage,estrato,neighborhood);
    console.log(aptoNuevo); 
    aptos.push(aptoNuevo);
}

console.log(aptos); //Muestra todos los registros de la lista de aptos en consola. 
 

