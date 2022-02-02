
$(document).ready(function(){
    $( "#agregarFormulario" ).submit(function( event ) {
        
        event.preventDefault();

        //Obtener valores
        /* var nombre = $.trim($('#nombre').val());
        var apellido = $.trim($('#apellido').val());
        var cl1 = $.trim($('#cl1').val());
        var cl2 = $.trim($('#cl2').val());
        var cl3 = $.trim($('#cl3').val());
        var pl1 = $.trim($('#pl1').val());
        var pl2 = $.trim($('#pl2').val());
        var pl3 = $.trim($('#pl3').val());
        var frecuencia = $.trim($('#frecuencia').val());
        var rpm = $.trim($('#rpm').val());
        var horasu = $.trim($('#horasu').val());
        var minu = $.trim($('#minu').val());
        var horai = $.trim($('#horai').val());
        var horat = $.trim($('#horat').val());
        var carga = $.trim($('#carga').val());
        var salida = $.trim($('#salida').val());
        var temperatura = $.trim($('#temperatura').val());
        var bar = $.trim($('#bar').val());
        var psi = $.trim($('#psi').val());
        var kpa = $.trim($('#kpa').val());
        //Obtener archivo
        var fd = new FormData();
        var imagen = $('#imagen')[0].files[0];
        fd.append('file',imagen);
        var nivel = $.trim($('#nivel').val());
        var comentarios = $.trim($('#comentarios').val()); */

        /* var parametros = {
            "nombre" : nombre,
            "apellido" : apellido,
            "cl1" : cl1,
            "cl2" : cl2,
            "cl3" : cl3,
            "pl1" : pl1,
            "pl2" : pl2,
            "pl3" : pl3,
            "frecuencia" : frecuencia,
            "rpm" : rpm,
            "horasu" : horasu,
            "minu" : minu,
            "horai" : horai,
            "horat" : horat,
            "carga" : carga,
            "salida" : salida,
            "temperatura" : temperatura,
            "bar" : bar,
            "psi" : psi,
            "kpa" : kpa,
            "nivel" : nivel,
            "imagen" : fd,
            "comentarios" : comentarios
        }; */

        var parametros = new FormData($('#agregarFormulario')[0]);

        $.ajax({
            type: 'POST',
            datatype : 'json',
            data: parametros,
            url: 'bitacora_planta/php/agregar.php',
            contentType: false,
            processData: false,
            success: function(data){
                if(data==1){
                    $('#myTable').DataTable().ajax.reload();
                    	var nombre = $.trim($('#nombre').val());
			var apellido = $.trim($('#apellido').val(''));
			var cl1 = $.trim($('#cl1').val(''));
			var cl2 = $.trim($('#cl2').val(''));
			var cl3 = $.trim($('#cl3').val(''));
			var pl1 = $.trim($('#pl1').val(''));
			var pl2 = $.trim($('#pl2').val(''));
			var pl3 = $.trim($('#pl3').val(''));
			var frecuencia = $.trim($('#frecuencia').val(''));
			var rpm = $.trim($('#rpm').val(''));
			var horasu = $.trim($('#horasu').val(''));
			var minu = $.trim($('#minu').val(''));
			var horai = $.trim($('#horai').val(''));
			var horat = $.trim($('#horat').val(''));
			var carga = $.trim($('#carga').val(''));
			var salida = $.trim($('#salida').val(''));
			var temperatura = $.trim($('#temperatura').val(''));
			var bar = $.trim($('#bar').val(''));
			var psi = $.trim($('#psi').val(''));
			var kpa = $.trim($('#kpa').val(''));
			var comentarios = $.trim($('#comentarios').val(''));
                    $.toast({
                        heading: 'Registro exitoso',
                        text: 'Se ha añadido un nuevo registro',
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                }else{
                    $.toast({
                        heading: 'Error',
                        text: 'Ha ocurrido un error',
                        showHideTransition: 'fade',
                        icon: 'error'
                    });
                }
            }
        });


      });
});
