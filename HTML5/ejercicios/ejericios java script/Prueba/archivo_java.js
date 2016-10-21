function ejecuta() {

    var fotos = document.querySelectorAll("#fotos figure");
    for (var i = 0; i < fotos.length; i++) {
        fotos[i].onclick = aviso;

    }



}


function aviso() {
    alert("Has elejido una foto");
}

function encabezado() {
    alet("Esto es el encabezado, pincha en la foto para elegir una.");
}
window.onload = ejecuta;
