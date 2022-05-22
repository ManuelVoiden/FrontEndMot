let marcas_vehiculos = ["Toyota", "Nissan", "Ford", "Chevrolet", "Honda", "Hyundai", "Kia", "Mazda", "Mitsubishi", "Suzuki", "Subaru", "Volkswagen", "Volvo"];

function Consesionaria(marcas_vehiculos) {
    console.log(`Bienvenidos al dealership de: ${marcas_vehiculos}`);
}

while(marcas_vehiculos.length > 0) {
    console.log(marcas_vehiculos);
    let marca = marcas_vehiculos.shift();
    console.log(`${marca}`);
    Consesionaria(marca);
}