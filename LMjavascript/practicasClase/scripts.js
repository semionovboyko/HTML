function validarFormulario() {
    var horaForm = document.forms["formulario"]["hora"].value;
    if (horaForm.length == 0 || horaForm == "" || /^\s+$/.test(horaForm)) {
        alert("Formato hora erroneo");
        return false;
    }
    var horaForm = document.forms["formulario"]["hora"].value;
    var hms = horaForm.split(':');
    if (hms[0] > 24 || hms[1] > 60 || hms[3] > 60) {
        alert("Hora erroneo");
        return false;
    }
    var nomForm = document.forms["formulario"]["nombre"].value;
    if (nomForm == "" || nomForm.length == 0 || /^\s+$/.test(nomForm) || !isNaN(nomForm)) {
        alert("El campo nombre es erroneo");
        return false;
    }
    var apeForm = document.forms["formulario"]["apellido"].value;
    if (apeForm == "" || apeForm.length == 0 || /^\s+$/.test(apeForm) || !isNaN(apeForm)) {
        alert("El campo apellido es erroneo");
        return false;
    }
    var numForm = document.forms["formulario"]["edad"].value;
    if (isNaN(numForm) || numForm.length == 0 || numForm == "" || /^\s+$/.test(numForm)) {
        alert("El campo edad es erroneo");
        return false;
    } else if (numForm < 18) {
        alert("tienes que ser mayor de edad");
        return false;
    }
    var tlfForm = document.forms["formulario"]["tfno"].value;
    if (isNaN(tlfForm) || tlfForm.length == 0 || tlfForm == "" || /^\s+$/.test(tlfForm)) {
        alert("Tlf erroneo");
        return false;
    } else if (tlfForm < 600000000 || tlfForm > 799999999) {
        alert("Tlf no valido");
        return false;
    } else {
        alert("Validación correcta");
        return true;
    }
}