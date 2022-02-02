
$(document).ready(function(){
    $(document).on("click","#ver_img",function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        $.ajax({
            url: "bitacora_planta/php/verImagen.php",
            type: "POST",
            data: {"id": id},
            success: function(data){
                $('#galeria').html(data);
            }
        });
    });
});