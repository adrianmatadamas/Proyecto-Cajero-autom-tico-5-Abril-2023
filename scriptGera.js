//YA ESTAMOS EN LA CUENTA DE GERA PARA EJECUTAR NUESTRAS INSTRUCCIONES

var Gera ={
    saldo: 290
}

// atraptar el elemento div pantalla en javascript con DOM para mostrar consulta de saldo de $200 como lo pide nuestro proyecto
var textodeldiv = document.getElementById("pantalla").innerHTML;


// Creamos una función para mostrar la consulta de saldo de $200 en el div pantalla de nuestro documento html usando DOM
    function consultar(){
        document.getElementById("pantalla").innerHTML = Gera.saldo;
        return;
        }


//Creamos una función para ingresar monto con un prompt, una vez obtenido el resultado se debe de sumar con $200 como lo pide el proyecto e imprimir 
function ingresar(){
    var montoPrompt = prompt("Ingresa monto:")
//Sumamos 200 a la variable montoPrompt, que es el monto ingresado
    var montoPrompt = parseFloat(montoPrompt)+Gera.saldo //usamos la función parseFloat para sumar y no concatenar
    if (montoPrompt > 990 || montoPrompt < 10)
    alert("No puedes tener más de $990 o menos que $10")
//Usamos DOM, lo aprendido en clase para imprimir en pantalla 
    document.getElementById("pantalla").innerHTML = montoPrompt;
return;
}
//Al retirar usamos un prompt, pero ahora restamos
    function retirar (){
        var montoPrompt2 = prompt("¿Cuál es el monto a retirar?")
        var montoPrompt3 = Gera.saldo-parseFloat(montoPrompt2)
        document.getElementById("pantalla").innerHTML = montoPrompt3;
return;
    }

//Dentro de las funciones con los montoPrompt usamos un if para que se cumplan las reglas del negocio
//Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. 
//Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.