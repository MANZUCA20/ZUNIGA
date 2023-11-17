function saludar() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var codigoUniversidad = document.getElementById("codigoUniversidad").value;

    
    var parametrosURL = '?nombre=' + encodeURIComponent(nombre) +
                       '&edad=' + encodeURIComponent(edad) +
                       '&sexo=' + encodeURIComponent(sexo) +
                       '&codigoUniversidad=' + encodeURIComponent(codigoUniversidad);

window.location.href = 'bienvenida.html' + parametrosURL;
                    }
