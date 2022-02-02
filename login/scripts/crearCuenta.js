$(document).ready(function(){
    $('#registro').submit(function(event){
        event.preventDefault();
        var parametros = new FormData($('#registro')[0]);
        $.ajax({
            url: 'login/php/nuevaCuenta.php',
            data: parametros,
            type: 'post',
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function(response){
                if(response==1){
                    $.toast({
                        heading: 'Status',
                        text: "Registro exitoso",
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                    setTimeout(function(){
                        location.href ="login.html";
                    }, 3000);
                }else if(response==0){
                    $.toast({
                        heading: 'Error',
                        text: "Ha ocurrido un error",
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
                }else if(response==2){
                    $.toast({
                        heading: 'Advertencia',
                        text: "Este correo ya existe",
                        showHideTransition: 'slide',
                        icon: 'warning'
                    });
                }else if(response==3){
                    $.toast({
                        heading: 'Advertencia',
                        text: "Dominio invalido",
                        showHideTransition: 'slide',
                        icon: 'warning'
                    });
                }
            }
        });/* 
        $('#nombre').val("");
        $('#apellidos').val("");
        $('#correo').val("");
        $('#pass').val("");
        $('#repass').val(""); */
    });
});