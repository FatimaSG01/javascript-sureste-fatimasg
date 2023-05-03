let mensaje1 = 'Super-Seventeen.';
let mensaje2 = 'Lovesick girls-Blackpink.';
let mensaje3 = 'Anpanman-BTS.';

let mensaje1HTML = document.getElementById('mensaje1');
mensaje1HTML.innerHTML = mensaje1;
let mensaje2HTML = document.getElementById('mensaje2');
mensaje2HTML.innerHTML = mensaje2;
let mensaje3HTML = document.getElementById('mensaje3');
mensaje3HTML.innerHTML = mensaje3;

function miFuncion(numFuncion){
    
    switch(numFuncion){
        case 1:
            alert(mensaje1);
        break;
        case 2:
            alert(mensaje2);
        break;
        case 3:
            alert(mensaje3);
        break;
        default:

        break;
    }
}