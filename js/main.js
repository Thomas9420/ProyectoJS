const productos = [
  {
    id: "cerveza-01",
    titulo: "Cerveza-01",
    imagen: "",
    categoria: {
      nombre: "Ipas",
      id: "ipas"
    },
    precio: 850
  },
  {
    id: "cerveza-02",
    titulo: "Cerveza-02",
    imagen: "",
    categoria: {
      nombre: "Ipas",
      id: "ipas"
    },
    precio: 850
  },
  {
    id: "cerveza-03",
    titulo: "Cerveza-03",
    imagen: "",
    categoria: {
      nombre: "Ipas",
      id: "ipas"
    },
    precio: 850
  },
  {
    id: "cerveza-04",
    titulo: "Cerveza-04",
    imagen: "",
    categoria: {
      nombre: "Rojas",
      id: "rojas"
    },
    precio: 850
  },
  {
    id: "cerveza-05",
    titulo: "Cerveza-05",
    imagen: "",
    categoria: {
      nombre: "Doradas",
      id: "doradas"
    },
    precio: 850
  },
  {
    id: "ipas",
    titulo: "Cerveza-06",
    imagen: "",
    categoria: {
      nombre: "Doradas",
      id: "doradas"
    },
    precio: 850
  },
  {
    id: "ipas",
    titulo: "Cerveza-07",
    imagen: "",
    categoria: {
      nombre: "Negras",
      id: "negras"
    },
    precio: 850
  },
  {
    id: "ipas",
    titulo: "Cerveza-08",
    imagen: "",
    categoria: {
      nombre: "Negras",
      id: "negras"
    },
    precio: 850
  },
  {
    id: "ipas",
    titulo: "Cerveza-09",
    imagen: "",
    categoria: {
      nombre: "Rojas",
      id: "rojas"
    },
    precio: 850
  },
  {
    id: "ipas",
    titulo: "Cerveza-10",
    imagen: "",
    categoria: {
      nombre: "Negras",
      id: "negras"
    },
    precio: 850
  }
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-cat");

function cargarProductos(productosElegidos){
  
  productosElegidos.forEach(producto => {
    contenedorProductos.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="img-prod" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="detalles-prod">
          <h3 class="titulo-prod">${producto.titulo}</h3>
          <p class="precio-prod">$${producto.precio}</p>
          <button class="agg-prod" id="${producto.id}">Agregar</button>
      </div>
    `;

    contenedorProductos.append(div);
  })
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) =>{

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if(e.currentTarget.id !="todas"){
    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    cargarProductos(productosBoton);
    } else {
      cargarProductos(productos)
    }
  })
})


