$(document).ready( function () {
    $('#myTable').DataTable({
        "scrollY":        '50vh',
        "scrollCollapse": true,
        "scrollX": true,
        "ajax": {
            "method":"POST",
            "url":"bitacora_planta/php/listar.php"
        },
        "language": {
            "decimal":        "",
            "emptyTable":     "Datos no disnopibles en la tabla",
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty":      "Mostrando 0 a 0 de 0 registros",
            "infoFiltered":   "(filtrado de _MAX_ total registros)",
            "lengthMenu":     "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing":     "Procesando...",
            "search":         "Buscar:",
            "zeroRecords":    "Ninguna coincidencia encontrada",
            "paginate": {
                "first":      "Primero",
                "last":       "Ultimo",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
        },
        "order": [[ 2, "desc" ]],
        "columns":[
            {"data":"id"},
            {"data":"fechora"},
            {"data":"modificado"},
            {"data":"nombre"},
            {"data":"cl1"},
            {"data":"cl2"},
            {"data":"cl3"},
            {"data":"pl1"},
            {"data":"pl2"},
            {"data":"pl3"},
            {"data":"frecuencia"},
            {"data":"rpm"},
            {"data":"horasuso"},
            {"data":"minuso"},
            {"data":"horai"},
            {"data":"horat"},
            {"data":"carga"},
            {"data":"salida"},
            {"data":"temperatura"},
            {"data":"bar"},/*
            {
                "data":"bar",
                "render": function(data){
                    return "<a href='#' id='username' data-type='text' data-pk='1' data-url='/post' data-name='bar' data-title='Enter username'>"+data+"</a>";
                }
            },*/
            {"data":"psi"},
            {"data":"kpa"},/* 
            {
                "data":"imagen",
                "render":function(data){
                    return "<img src='"+data+"' width='200px'>";
                }
            }, */
            {"defaultContent":"<button id='ver_img' class='btn btn-warning' data-toggle='modal' data-target='#modalImagenes'>Ver</button>"},
            {"data":"nivel"},
            {"data":"comentarios"},
            {"defaultContent":"<button id='editar' data-toggle='modal' data-target='#staticBackdropModify' class='btn btn-primary col-12'>+</button>"},
            {"defaultContent":"<button id='borrarRegistro' data-toggle='modal' data-target='#staticBackdropDelete' class='btn btn-danger col-12'>Borrar</button>"}
        ]
    });
} );
