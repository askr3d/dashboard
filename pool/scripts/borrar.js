
$(document).on("click","#borrar",function(){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    var parametro = {
        "id":id
    }
    var respuesta = confirm("¿Seguro que quieres eliminar el registro: "+id+"?");
    if(respuesta){
        $.ajax({
            data: parametro,
            url: "pool/php/borrar.php",
            type: 'post',
            success: function(response){
                $('#myTable').DataTable().ajax.reload();
                $.toast({
                    heading: 'Status',
                    text: 'Registro '+response+' eliminado',
                    showHideTransition: 'fade',
                    icon: 'info'
                })
            }
        });
    }
});