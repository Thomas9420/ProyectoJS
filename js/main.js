// PRODUCTOS
const productos = [
  // Abrigos
  {
      id: "cerveza-01",
      titulo: "Trigueña",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Dorada",
          id: "dorada"
      },
      precio: 1000
  },
  {
      id: "cerveza-02",
      titulo: "Chromanqui",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Dorada",
          id: "dorada"
      },
      precio: 1000
  },
  {
      id: "cerveza-03",
      titulo: "Honey",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Dorada",
          id: "dorada"
      },
      precio: 1000
  },
  // Negras
  {
      id: "cerveza-04",
      titulo: "Porter",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Negra",
          id: "negra"
      },
      precio: 1000
  },
  {
      id: "cerveza-05",
      titulo: "Chromegra",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Negra",
          id: "negra"
      },
      precio: 1000
  },
  {
      id: "cerveza-06",
      titulo: "Boombast",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Negra",
          id: "negra"
      },
      precio: 1000
  },
  // Ipas
  {
      id: "cerveza-07",
      titulo: "Veraniega",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Ipa",
          id: "ipa"
      },
      precio: 1000
  },
  {
      id: "cerveza-15",
      titulo: "Chromipa",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Ipa",
          id: "ipa"
      },
      precio: 1000
  },
  {
      id: "cerveza-16",
      titulo: "Ipega",
      imagen: "./img/cerveza.png",
      categoria: {
          nombre: "Ipa",
          id: "ipa"
      },
      precio: 1000
  },
];

fetch("./js/productos.json")
  .then(response => response.json())
  .then(data => {
      productos = data;
      cargarProductos(productos);
  })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";
  productosElegidos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;
      contenedorProductos.append(div);
  })
  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");
      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }
  })
});
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {

  Toastify({
      text: "Producto agregado",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
      },
      offset: {
          x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      onClick: function(){} // Callback after click
    }).showToast();

  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}
function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}


