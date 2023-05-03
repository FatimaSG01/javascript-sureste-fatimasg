// Evento de clic en boton (desencadena eventos al oprimir un boton)

document.getElementById("miBoton").addEventListener("click",function(){
    alert("Hiciste clic donde no dije.");
});

// Evento de cambio a una etiqueta input
document.getElementById("inputText").addEventListener("change", function(){
    alert("El valor ha cambiado.");
})

// Evento de teclado input
document.getElementById("inputText2").addEventListener("keyup", function(){
    alert("Presionaste la tecla: " + event.key);
})
