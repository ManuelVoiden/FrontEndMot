let contenidos = [   // Arreglo de objetos que contiene todos los contenidos de la pagina web. 
    {nombre: "Radio", precio: "250", cantidad: "2"},
    {nombre: "Lavadora", precio: "1000", cantidad: "1"},
    {nombre: "Televisor", precio: "500", cantidad: "1"},
    {nombre: "Celular", precio: "1100", cantidad: "1"},
    {nombre: "Sillon", precio: "750", cantidad: "1"},
    {nombre: "Cama", precio: "500", cantidad: "2"},
];

let contenidosFiltrado = contenidos.filter(function(contenido){ // Para cada contenido en el arreglo de contenidos, se crea una funcion que filtra los contenidos que tengan una cantidad mayor a 1.
    return contenido.cantidad > 1;
});

console.log(contenidosFiltrado); // Muestra los contenidos que cumplen con la condicion de arriba.


let nombreContenidos = contenidos.map(function(contenido){ // Para cada contenido en el arreglo de contenidos, se crea una funcion que devuelve el nombre del contenido.
    return contenido.nombre;
});
console.log(nombreContenidos);