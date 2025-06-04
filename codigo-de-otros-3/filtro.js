// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Se corrige el método para obtener el contenedor de la lista de productos
const listaDeProductos = document.getElementById("lista-de-productos");
// Se cambia el método para obtener el input de búsqueda
const inputFiltro = document.getElementById("filtro");
// Se corrige el identificador del botón de filtro
const botonDeFiltro = document.getElementById("filtrar");

// Se hizo una función para mostrar los productos en el DOM
const displayProductos = (productos) => {
  listaDeProductos.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos

  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  });
};

// Se ejecuta la funcion para mostrar todos los productos
displayProductos(productos);

// se hizo el evento de clic en el botón para aplicar el filtro
botonDeFiltro.onclick = () => {
  const texto = inputFiltro.value.trim().toLowerCase(); // Se normaliza el texto de entrada
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// se hizo la función para filtrar productos basada en texto ingresado
const filtrado = (productos, texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
};

// Se selecciona el botón de reset
const botonReset = document.getElementById("resetear");

// Se agrega un boton para poder reiniciar el filtro
botonReset.onclick = () => {
  inputFiltro.value = ""; // Va hacía el campo de búsqueda
  displayProductos(productos); // Muestra todos los productos nuevamente
};

