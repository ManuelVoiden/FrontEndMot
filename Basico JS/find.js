let contenidos = [   // Arreglo de objetos que contiene todos los contenidos de la pagina web. 
    {nombre: "Radio", precio: "250", cantidad: "2"},
    {nombre: "Lavadora", precio: "1000", cantidad: "1"},
    {nombre: "Televisor", precio: "500", cantidad: "1"},
    {nombre: "Celular", precio: "1100", cantidad: "1"},
    {nombre: "Sillon", precio: "750", cantidad: "1"},
    {nombre: "Cama", precio: "500", cantidad: "2"},
];

let encuentraContenido = contenidos.find(function(contenido){
    return contenido.nombre === "Lavadora"
});

console.log(encuentraContenido);

let paraCadaContenido = contenidos.forEach(function(contenido){
    console.log(contenido.nombre);
})

let algunContenido = contenidos.some(function(contenido){
    return contenido.cantidad == 1;
});
console.log(algunContenido);
