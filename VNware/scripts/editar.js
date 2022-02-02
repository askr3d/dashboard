
$(document).ready(function(){
    $(document).on("click","#editar",function(){
        $('#on').removeAttr('selected');
        $('#off').removeAttr('selected');
        $('#conected').removeAttr('selected');
        $('#disconected').removeAttr('selected');
        fila = $(this).closest("tr");
        id = parseInt(fila.find("td:eq(0)").text());
        $.ajax({
            data: {"id":id},
            url: "VNware/php/obtener_datos.php",
            type: 'post',
            success: function(response){
                var datos = $.parseJSON(response);
                $('#id').val(datos.id);
                $('#VNwarem').val(datos.vmware);
                if(datos.power==='power on'){
                    $('#on').attr('selected', 'selected');
                }else{
                    $('#off').attr('selected', 'selected');
                }
                $('#DNSm').val(datos.dns);
                $('#'+datos.conection).attr('selected', 'selected');
                $('#CPUsm').val(datos.cpus);
                $('#memorym').val(datos.memoria);
                $('#IPadressm').val(datos.primario);
            }
        });
    });


    $( "#modificarFormulario" ).submit(function( event ){
        event.preventDefault();
        var parametros = new FormData($('#modificarFormulario')[0]);

        $.ajax({
            url: 'VNware/php/modificar.php',
            type: 'post',
            data: parametros,
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function(data){
                if(data==1){
                    alert("Exitoso");
                    $('#myTable').DataTable().ajax.reload();
                    $.toast({
                        heading: 'Modificacion exitosa',
                        text: 'Registro: '+id,
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                }
            }
        });
    });

});
