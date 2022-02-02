$(document).ready(function(){
    var id;
    $(document).on("click", "#borrarRegistro", function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find("td:eq(0)").text());
        $("#idDelete").val(id);
        $("#mostrarId").text("¿Seguro que quieres eliminar el registro: "+id+"?");
    });
    $(document).on("submit","#eliminarFormulario",function(event){
        event.preventDefault();
        var respuesta = confirm("Seguro que quiere borrar el registro: "+id);
        if(respuesta==1){
            $.ajax({
                url: "bitacora_planta/php/borrarRegistro.php",
                type: "POST",
                data: {"id":id},
                success: function(data){
                    if(data==1){
                        alert("Se borro exitosamente");
                        $.toast({
                            heading: 'Registro eliminado',
                            text: 'Se elimino exitosamente',
                            showHideTransition: 'slide',
                            icon: 'success'
                        });
                        $('#myTable').DataTable().ajax.reload();
                    }else{
                        alert("Ha ocurrido un error");
                        $.toast({
                            heading: 'Error',
                            text: 'Ha ocurrido un error',
                            showHideTransition: 'fade',
                            icon: 'error'
                        });
                    }
                }
            });
        }
    });
});