let nombreUsuario = prompt("Hola! ¿Cómo te llamas?");
console.log(nombreUsuario);
alert("Bueno, " + nombreUsuario + ", si estás acá me imagino que te gusta la cerveza!");

function Producto(alcohol, color, tipo, precio) {
  this.alcohol = alcohol;
  this.color = color;
  this.tipo = tipo;
  this.precio = precio;
}

const producto1 = new Producto("Fuerte", "Negra", "Amarga", 700);
const producto2 = new Producto("Medio", "Ambar", "Equilibrada", 650);
const producto3 = new Producto("Tranquila", "Dorada", "Suave", 600);

const cerveza = prompt("¿amarga, equilibrada o suave?");
alert("Esta es la mas apta para vos! Que la disfrutes.");

switch (cerveza) {
  case "amarga":
    console.log(producto1);
    break;
  case "equilibrada":
    console.log(producto2);
    break;
  case "suave":
    console.log(producto3);
    break;
  default:
    console.log("No existe o no está de momento en nuestro catalogo:(, probá recargando la pagina e intenta de nuevo :D");
}