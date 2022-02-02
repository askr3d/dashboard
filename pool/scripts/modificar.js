
$(document).on("click","#editar",function(){
    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    servidor = fila.find('td:eq(1)').text();
    sistema = fila.find('td:eq(2)').text();
    ipLocal = fila.find('td:eq(3)').text();
    ipNavegacion = fila.find('td:eq(4)').text();
    comentarios = fila.find('td:eq(5)').text();

    $('#id').val(id);
    $('#servidorM').val(servidor);
    $('#sistemaM').val(sistema);
    $('#ipLocalM').val(ipLocal);
    $('#ipNavegacionM').val(ipNavegacion);
    $('#comentariosM').val(comentarios);
});

$('#modificarRegistro').click(function(){
    idM = $('#id').val();
    servidorM = $('#servidorM').val();
    sistemaM = $('#sistemaM').val();
    ipLocalM= $('#ipLocalM').val();
    ipNavegacionM = $('#ipNavegacionM').val();
    comentariosM = $('#comentariosM').val();

    var parametros = {
        "id" : idM,
        "servidor" : servidorM,
        "sistema" : sistemaM,
        "ipLocal" : ipLocal,
        "ipNavegacion" : ipNavegacionM,
        "comentarios" : comentariosM
    };
    
    $.ajax({
        data: parametros,
        url: "pool/php/modificar.php",
        type: 'post',
        beforeSend: function(){
            $('#icon_modificar').css('display','inline');
        },
        success: function(response){
            $('#icon_modificar').css('display','none');
            if(response==='incompleto'){
                $.toast({
                    heading: 'Modificacion cancelada',
                    text: 'Algunos datos importantes estan vacios',
                    showHideTransition: 'plain',
                    icon: 'warning'
                })
            }else if(response==='exitoso'){
                $.toast({
                    heading: 'Status',
                    text: 'Registro: '+idM+' modificado',
                    showHideTransition: 'slide',
                    icon: 'success'
                })
            }
            $('#myTable').DataTable().ajax.reload();
        }
    });
});