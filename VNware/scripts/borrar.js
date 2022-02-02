$(document).ready(function(){
    $(document).on("click", "#borrarRegistro", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find("td:eq(0)").text());
        var respuesta = confirm("Seguro que quieres borrar el registro: "+id);
        if(respuesta){
            $.ajax({
                data: {"id": id},
                url: "VNware/php/borrar.php",
                type: "post",
                success: function(data){
                    if(data==0){
                        $.toast({
                            heading: 'Eliminacion exitosa',
                            text: 'Registro: '+id+' eliminado',
                            showHideTransition: 'slide',
                            icon: 'success'
                        });
                        $("#myTable").DataTable().ajax.reload();
                    }else{
                        $.toast({
                            heading: 'Ha ocurrido un error',
                            text: 'No se pudo borrar el registro',
                            showHideTransition: 'fade',
                            icon: 'error'
                        });
                    }
                }
            });
        }
    });
});