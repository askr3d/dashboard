$(document).ready(function(){
    $(document).on("click","#borrarImagen",function(){
        fila = $(this).closest("div");
        id = parseInt(fila.find("input:eq(0)").val());
        nombre = fila.find("input:eq(1)").val();


            var parametros = {
                "id": id,
                "nombre": nombre
            }
            
            $.ajax({
                url: "bitacora_planta/php/borrarImagen.php",
                type: 'post',
                data: parametros,
                success: function(data){
                    if(data==1){
                        eliminarElemento = fila;
                        div = fila.next();
                        if(div.length == 0){
                            div = fila.prev();
                            div.addClass("active");
                        }else{
                            div.addClass("active");
                        }
                        eliminarElemento.removeClass("active");
                        eliminarElemento.remove();
                        $('#myTable').DataTable().ajax.reload();
                        $.toast({
                            heading: 'Imagen eliminada',
                            text: 'Se elimino exitosamente',
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
