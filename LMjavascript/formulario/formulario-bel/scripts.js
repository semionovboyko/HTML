function updateDate(){
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	document.querySelector("#hora").value = time;
}
setInterval(updateDate, 1000);

function actualizarAño(año){
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	document.querySelector("#any").value = year - año;
}

function validarFormulario() {
    var nombre = document.forms["formulario"]["nombre"].value;
    if (nombre == "" || nombre.length == 0 || /^\s+$/.test(nombre) || !isNaN(nombre)) {
        alert("El campo nombre es erroneo");
        return false;
    }
    var apellido = document.forms["formulario"]["apellido"].value;
    if (apellido == "" || apellido.length == 0 || /^\s+$/.test(apellido) || !isNaN(apellido)) {
        alert("El campo apellido es erroneo");
        return false;
    }
    var edad = document.forms["formulario"]["edad"].value;
    if (isNaN(edad) || edad.length == 0 || edad == "" || /^\s+$/.test(edad)) {
        alert("El campo edad es erroneo");
        return false;
    } else if (edad < 18) {
        alert("tienes que ser mayor de edad");
        return false;
    }
    var telefono = document.forms["formulario"]["tfno"].value;
    if (isNaN(telefono) || telefono.length == 0 || telefono == "" || /^\s+$/.test(telefono)) {
        alert("Telefono erroneo");
        return false;
    } else if (!telefono.startsWith(6) && !telefono.startsWith(7)) {
        alert("Telefono no valido, tiene que empezar por 6 o 7");
        return false;
    } else {
        alert("Validación correcta");
        return true;
    }
}