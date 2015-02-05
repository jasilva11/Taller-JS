function calcular() {
    var x, y;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;

    if (isNaN(x)) {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
    }
    else if (isNaN(y)) {
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
    }
    else
    {
        var rta = parseInt(x) + parseInt(y) + parseInt(z);
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        ;
    }
}
function concatenar() {
    var x, y;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;

        var rta = x + y + z;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        ;
}
function ordenar() {
    var x, y;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;

    if(x >= y){
        if(y >= z){
        var rta = z + "," + y + "," + x;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
        else{
        var rta = y + "," + z + "," + x;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
    }
    if(y >= x){
        if(x >= z){
        var rta = z + "," + x + "," + y;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
        else{
        var rta = x + "," + z + "," + y;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
    }
    if(y >= x){
        if(x >= z){
        var rta = z + "," + x + "," + y;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
        else{
        var rta = x + "," + z + "," + y;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
    }
    if(z >= x){
        if(x >= y){
        var rta = y + "," + x + "," + z;
        document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
        }
        else{
            if(z >= y){
            var rta = x + "," + y + "," + z;
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: " + rta + "</div>";
            }
        }
    }
}

