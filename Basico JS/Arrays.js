let frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon', 'Fresa', 'Durazno', 'Ciruela', 'Frambuesa'];
console.log(frutas);
console.log(frutas.length);

frutas.push('Melocoton');
console.log(frutas);
console.log(frutas.length);

frutas.pop();
console.log(frutas);
console.log(frutas.length);

let colores = ['Azul', 'Rojo', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Violeta'];
console.log(colores);
console.log(colores.length);

colores.unshift('Cyan');
console.log(colores);
console.log(colores.length);

colores.shift();
console.log(colores);
console.log(colores.length);

let posicion = colores.indexOf('Rojo');
let posicion2 = colores.indexOf('Rosa');
console.log(posicion);
console.log(posicion2);

console.log(colores[posicion]);

