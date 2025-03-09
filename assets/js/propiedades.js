//alert("hoja conectada!!!!");

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

//DATA

const ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    bathroom: 2,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bathroom: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva 2",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 3,
    bathroom: 2,
    costo: 5000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña 2",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bathroom: 2,
    costo: 1200,
    smoke: true,
    pets: false,
  },
];

const alquileres = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    bathroom: 2,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 2,
    bathroom: 2,
    costo: 2500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva 2",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 3,
    bathroom: 2,
    costo: 5000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar 2",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 2,
    bathroom: 2,
    costo: 2500,
    smoke: true,
    pets: false,
  },
];

/* mostrar las propiedades */

const rowPropiedades = document.querySelector("#propiedades");

let template = "";
let propiedades = [];



if (window.location.pathname === "/propiedades_venta.html") {
  propiedades = ventas;
} else if (window.location.pathname === "/propiedades_alquiler.html") {
  propiedades = alquileres;
}

for (const propiedad of propiedades) {

const permitido_fumar = propiedad.smoke
  ? `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`
  : `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`;

const permitido_mascotas = propiedad.pets
  ? `<p class="text-success">
                  <i class="fas fa-dog"></i> Se permiten mascotas
                </p>`
  : `<p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>`;


  template += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.bathroom} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>

                ${permitido_fumar}                
                ${permitido_mascotas}
              </div>
            </div>
          </div>
  
  `;
}

rowPropiedades.innerHTML = template;
