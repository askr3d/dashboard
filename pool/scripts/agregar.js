//Validar

$(document).ready(function(){
    $("#agregarRegistro").click(function(){
        var servidor = $.trim($("#servidor").val());
        var sistema = $.trim($("#sistema").val());
        var ipLocal = $.trim($("#ipLocal").val());
        var ipNavegacion = $.trim($("#ipNavegacion").val());
        var comentarios = $.trim($("#comentarios").val());
        
        var parametros = {
            "servidor" : servidor,
            "sistema" : sistema,
            "ipLocal" : ipLocal,
            "ipNavegacion" : ipNavegacion,
            "comentarios" : comentarios
        };

        $.ajax({
            data: parametros,
            url: "pool/php/agregar.php",
            type: 'post',
            beforeSend: function(){
                $('#icon_agregar').css('display','inline');
            },
            success: function(response){
                $('#icon_agregar').css('display','none');
                if(response==='exitoso'){
                    //Resetear inputs
                    $("#servidor").val("");
                    $("#sistema").val("");
                    $("#ipLocal").val("");
                    $("#ipNavegacion").val("");
                    $("#comentarios").val("");
                    $('#myTable').DataTable().ajax.reload();
                    $.toast({
                        heading: 'Status',
                        text: 'Registro exitoso',
                        showHideTransition: 'slide',
                        icon: 'success'
                    })
                    $('#servidor').focus();
                }else if(response==='denegado'){
                    $.toast({
                        heading: 'Error',
                        text: 'Datos incompletos',
                        showHideTransition: 'fade',
                        icon: 'error'
                    })
                }
            }
        });
    });
});