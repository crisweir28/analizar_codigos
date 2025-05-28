/* Se cambio el # por un . para poder tener la referencia del fomrulario en html
y se agrego correctamente el id del formulario
-todo el codigo tiene declaradas las variables con VAR, fueron cambiasdas por CONST*/

const formulario = document.querySelector(".formulario");

// Evento submit del formulario
formulario.onsubmit = function(e) {
    e.preventDefault(); // Corregido para prevenir correctamente el envío del formulario
  //se cambio el nombre de las constiables para una mayor compresion 
  //se ocupo fourmulario.elements y su id para poder registrar los datos 
    const nombre = formulario.elements["name"].value;
    const edad = formulario.elements["age"].value;
    const nacionalidad = formulario.elements["nationality"].value;

    console.log(nombre, edad, nacionalidad);

    // Validación de datos
    if (nombre.length === 0) {
        formulario.elements["name"].classList.add("error");
    }
    if (edad < 18 || edad > 120) {
        formulario.elements["age"].classList.add("error");
    }

    // Si la validación es correcta, se agrega el invitado
    if (nombre.length > 0 && edad > 18 && edad < 120) {
        agregarInvitado(nombre, edad, nacionalidad);
    }
};

const agregarInvitado = (nombre, edad, nacionalidad) =>{
    // Convertimos los códigos de nacionalidad a nombres completos
    const nacionalidades = {
        "ar": "Argentina",
        "mx": "Mexicana",
        "vnzl": "Venezolana",
        "per": "Peruana"
    };
    //se reasigna el dato 
    nacionalidad = nacionalidades[nacionalidad];

    // Selección de la lista de invitados
    const lista = document.getElementById("lista-de-invitados");

    // Creación del elemento contenedor
    const elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");
    lista.appendChild(elementoLista);

    // Función para crear elementos de lista
    const crearElemento=(descripcion, valor)=>{
        const span = document.createElement("span");
        const input = document.createElement("input");
        const espacio = document.createElement("br");

        span.textContent = descripcion + ": ";
        input.value = valor;

        elementoLista.appendChild(span);
        elementoLista.appendChild(input);
        elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    // Aqui es donde se crea del botón de eliminar invitado
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.classList.add("boton-borrar");

    elementoLista.appendChild(botonBorrar);

    // Evento para eliminar invitado
    botonBorrar.onclick = function() {
        elementoLista.remove(); // Eliminamos el elemento correctamente
    };
}