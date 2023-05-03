let miElemento = document.getElementById('body'); 
let valorBgColor;

function cambiarColor(){
    valorBgColor = miElemento.style.background;
    console.log(typeof(valorBgColor));

    if( valorBgColor == 'rgb(245, 199, 229)'){
        miElemento.style.background = 'rgb(186, 232, 36)';
    } else {
        miElemento.style.background = 'rgb(245, 199, 229)';
    }
}
