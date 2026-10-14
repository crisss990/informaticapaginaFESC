function masculino() {
    let seccion = document.getElementById("seccionPrincipal");
    let aside = document.getElementById("seccionAside");

    if (seccion && aside) {
        seccion.style.backgroundColor = "lime";
        aside.style.backgroundColor = "silver";
    }
}

function femenino() {
    let seccion = document.getElementById("seccionPrincipal");
    let aside = document.getElementById("seccionAside");

    if (seccion && aside) {
        seccion.style.backgroundColor = "pink";
        aside.style.backgroundColor = "orchid";
    }
}
