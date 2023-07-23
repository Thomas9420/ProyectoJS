let nombreUsuario = prompt("Hola! ¿Cómo te llamas?");
console.log(nombreUsuario);
alert("Bueno, " + nombreUsuario + ", si estás acá me imagino que te gusta la cerveza!");

const cervezas = [
  {nombre: "Bomber", tipo: "Porter", color: "Negra", alcohol: "Fuerte", precio: 750},
  {nombre: "Summer", tipo: "Ipa", color: "Ambar", alcohol: "Equilibrada", precio: 700},
  {nombre: "Trigueña", tipo: "Dorada", color: "Amarilla", alcohol: "Suave", precio: 700},
  {nombre: "Chromipa", tipo: "Ipa", color: "Ambar oscuro", alcohol: "Fuerte", precio: 800},
  {nombre: "Chromoda", tipo: "Porter", color:"Negra", alcohol: "Equilibrada", precio: 800},
  {nombre: "Chromanqui", tipo:"Dorada", color:"Dorado", alcohol: "suave", precio: 800}
];
let elegirCerveza = prompt("Ingrese si le gusta: Ipa, Porter o Dorada")
alert("Estas son las mas adecuadas para vos, ¡Que la disfrutes!")
console.log(cervezas.filter((cerveza)=> cerveza.tipo === elegirCerveza ) );
cervezas.some((cerveza)=> cerveza.tipo === elegirCerveza)
if (cervezas.some !== cervezas.tipo){
  alert("No pusiste bien el nombre o aun no esta en nuestro catalogo, ¡Intentá de nuevo!")
}  
// // function Cervezas(alcohol, color, tipo, precio) {
// //   this.alcohol = alcohol;
// //   this.color = color;
// //   this.tipo = tipo;
// //   this.precio = precio;
// // }

// // const bebida1 = new Cervezas("Fuerte", "Negra", "Amarga", 700);
// // const bebida2 = new Cervezas("Medio", "Ambar", "Equilibrada", 650);
// // const bebida3 = new Cervezas("Tranquila", "Dorada", "Suave", 650);

// // const pregunta = prompt("¿amarga, equilibrada o suave?");
// // alert("Esta es la mas apta para vos! Que la disfrutes.");

// // switch (pregunta) {
// //   case "amarga":
// //     console.log(bebida1, bebida2);
// //     break;
// //   case "Amarga":
// //       console.log(bebida1, bebida2);
// //     break;
// //   case "equilibrada":
// //     console.log(bebida2);
// //     break;
// //   case "Equilibrada":
// //       console.log(bebida2);
// //     break;
// //   case "suave":
// //     console.log(bebida3);
// //     break;
// //   case "Suave":
// //     console.log(bebida3);
// //     break;
// //   default:
// //     console.log("No existe o no está de momento en nuestro catalogo:(, probá recargando la pagina e intenta de nuevo :D");
// }