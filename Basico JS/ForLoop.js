let animales = ["Perro", "Gato", "Caballo", "Cabra", "Conejo"];

function loopFor() {
    for (let i = 0; i < animales.length; i++) {
        console.log(`Experiencia en animales: ${animales[i]}`);
        console.log(animales[i]);
    }
}

loopFor(animales);

function loopForEach() {
    console.log(`Experiencia en animales: ${elemento}`);
}

for(let animal of animales) {
    console.log(animal);
}