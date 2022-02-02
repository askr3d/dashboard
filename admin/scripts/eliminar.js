$(document).ready(function(){
    $(document).on("click", "#borrar", function(){
        var fila = $(this).closest("tr");
        id = parseInt(fila.find("td:eq(0)").text());
        var respuesta = confirm("Deseas eliminar el registro: "+id);

        if(respuesta){
            $.ajax({
                url: "admin/php/eliminar.php",
                type: 'post',
                data: {"id":id},
                success: function(data){
                    if(data){
                        $.toast({
                            heading: 'Eliminacion exitosa',
                            text: 'Registro: '+id+' eliminado',
                            showHideTransition: 'slide',
                            icon: 'success'
                        });
                        $("#myTable").DataTable().ajax.reload();
                    }else{
                        alert("Error");
                    }
                }
            });
        }
        
    });
});