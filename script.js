//Cree una función usrpas() para correrla en el index.html, al presionar el botón "Accceder" desde el index.html la vamos a correr.
//Lo que hace esta función es usar una condicional if y un operador lógico &&(And), usando estas dos herramientas que nos enseñaron hice mi log in, para comprobar si los datos ingresados son correctos o incorrectos.
//En dado caso de ser correctos nos envía al cajero.html para empezar a usarlo, de no ser así nos muestra un error "Error en usuario o contraseña. Intenta de nuevo."

//Como mencioné anteriormente, estos son los datos correctos para ingresar:

    //Mali
    //1234

    //Gera
    //1234

    //Maui
    //1234

//Cree 3 usuarios Mali, Gera y Maui, los 3 con la contraseña 1234


function usrpas(){
    if (document.form1.txt.value=="Mali" && document.form1.num.value=="1234"){window.location="cuentaMali.html";return}
    if (document.form1.txt.value=="Gera" && document.form1.num.value=="1234"){window.location="cuentaGera.html";return}
    if (document.form1.txt.value=="Maui" && document.form1.num.value=="1234"){window.location="cuentaMaui.html";return}
     
    else {alert("Error en usuario o contraseña. Intenta de nuevo.")}
    }
    document.oncontextmenu=new Function("return false");

   //ESTE ES UN SCRIPT JAVASCRIPT PARA LA VALIDACIÓN DE USUARIOS, QUE CADA USUARIO NOS ENVÍA A UNA CUENTA HTML PROPIA