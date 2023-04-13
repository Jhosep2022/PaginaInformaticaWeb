window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    var enlaces = document.getElementsByTagName('a');
    for (f = 0; f < enlaces.length; f++) {
        enlaces[f].addEventListener('click', enlaceSeleccionado, false);
    }
}

function enlaceSeleccionado(e) {
    //var puntero = document.getElementById('enlace');
    /*if (puntero!="") {
        var enlace;
        enlace = e.target;
        e.preventDefault();
        window.open(enlace.getAttribute('href'));
    }
    */
}
