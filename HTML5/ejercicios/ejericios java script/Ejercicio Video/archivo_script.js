function ejecuta() {
    /*document.querySelector("#botones li:last-child").onclick = saludo2;*/
    /*for (var i = 0; i < 4; i++) {
        var etiquetas = document.querySelectorAll("#botones li");
        etiquetas[i].onclick = saludo;

    }*/

    var etiquetas = document.querySelectorAll("#botones li");
    for (var i = 0; i < etiquetas.length; i++) {
        etiquetas[i].onclick = saludo3;
    }


}

function saludo() {

    alert("La página esta en proceso de construcción");

}

function saludo2() {
    alert("estas pulsando los botones con letras rojas");
}

function saludo3() {

    alert("Estamos practicando con querySelctorAll");
}


window.onload = ejecuta;
