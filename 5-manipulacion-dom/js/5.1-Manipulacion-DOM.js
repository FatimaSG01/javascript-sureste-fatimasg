// Cambio de contenido
document.getElementById("titulo").innerHTML = "Este es otro texto";

// Cambio de estilo a un elemento
document.getElementById("botonEjemplo").style.backgroundColor = "orange";

// Agregar un elemento a la pagina
var nuevoParrafo = document.createElement("p");
nuevoParrafo.setAttribute("id","miNuevoParrafo.");
nuevoParrafo.innerHTML = "Este es mi parrafo nuevo";
document.body.appendChild(nuevoParrafo);

//  Eliminar un elemento de la pagina
var parrafoAEliminar = document.getElementById("parrafoAEliminar");
parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);