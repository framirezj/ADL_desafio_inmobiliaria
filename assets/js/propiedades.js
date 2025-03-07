alert("hoja conectada!!!!");

/*  Generar dos arreglos de propiedades (Uno para venta y otro para alquiler) que
 cumplan la siguiente estructura que se muestra de ejemplo. Una vez generados los
 arreglos de objetos para las propiedades en alquiler y en venta, añade al menos 4
 objetos en cada arreglo */

/* 
 const propiedades_alquiler = [
 {
 nombre: '',
 src: '',
 descripcion: '',
 ubicacion: '',
 habitaciones: 0,
 costo: 0,
 smoke: false,
 pets: true
 }
 ]
  */

const ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 1,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 3,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
];

const alquileres = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: true,
  },
];

/* mostrar las propiedades */

const rowVentas = document.querySelector("#row-ventas");

let template = "";

for (const propiedad of ventas) {

  template += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento de lujo en zona exclusiva
                </h5>
                <p class="card-text">
                  Este apartamento de lujo está ubicado en una exclusiva zona
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
  
  `;
}

rowVentas.innerHTML = template;

/*

<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento de lujo en zona exclusiva
                </h5>
                <p class="card-text">
                  Este apartamento de lujo está ubicado en una exclusiva zona
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
 */
