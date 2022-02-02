$(document).ready(function(){
    $("#agregarFormulario").submit(function(event){
        event.preventDefault();
        var parametros = new FormData(this);

        $.ajax({
            url: "VNware/php/insertar.php",
            type: "POST",
            datatype: "json",
            data: parametros,
            contentType: false,
            processData: false,
            success: function(data){
                if(data==1){
                    $("#VNware").val("");
                    $("#DNS").val("");
                    $("#CPUs").val("");
                    $("#memory").val("");
                    $("#IPadress").val("");
                    $("myTable").DataTable().ajax.reload();
                    if(!($.toast({
                        heading: "Nuevo registro",
                        text: "Registro exitoso",
                        showHideTransition: "slide",
                        icon: "success"
                    }))){
                        alert("Registro exitoso");
                    }
                }else{
                    if(!($.toast({
                        heading: "Error",
                        text: "Ha surgido un error",
                        showHideransition: "fade",
                        icon: "error"
                    }))){
                        alert("Ha surgido un error");
                    }
                }
            }
        });
    });
});