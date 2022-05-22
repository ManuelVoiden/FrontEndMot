let carroFavorito = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: "2019",
    color: "Negro",
    motor: "1.6",
    transmision: "Automatico",
    puertas: "4",
    kilometraje: "0",
    precio: "150000",
    imagen: "https://www.toyota.com/content/dam/toyota/vehicles/camry/2018/overview/camry-2018-overview-1.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
    resumen: function () {
        console.log(`Este vehiculo es un ${this.marca} ${this.modelo} de color ${this.color} del año ${this.anio}`);
    }
}

console.log(carroFavorito.marca);
console.log(carroFavorito.modelo);
carroFavorito.resumen();