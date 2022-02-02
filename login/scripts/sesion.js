$(document).ready(function(){
    $('#iniciarSesion').submit(function(event){
        event.preventDefault();

        var parametros = new FormData($('#iniciarSesion')[0]);
        console.log(parametros);
        $.ajax({
            url: 'login/php/sesion.php',
            type: 'post',
            data: parametros,
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function(response){
                if(response==0){
                    $.toast({
                        heading: 'Nivel desconocido',
                        text: "No cuentas con un nivel",
                        showHideTransition: 'slide',
                        icon: 'warning'
                    });
                }else if(response==1){
                    location.href ="index.php";
                }else if(response==2){
                    $.toast({
                        heading: 'Autenticacion',
                        text: "Correo o contraseña incorrectos",
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
                }
            }
            
        });
    });

});