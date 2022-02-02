//Validar

//Mostrar tabla
$(document).ready( function () {
    $('#myTable').DataTable({
        "ajax":{
            "method":"POST",
            "url":"pool/php/listar.php"
        },
        "columns":[
            {"data":"id"},
            {"data":"servidor"},
            {"data":"sistema"},
            {"data":"ipLocal"},
            {"data":"ipNavegacion"},
            {"data":"comentarios"},
            {"defaultContent":"<button id='editar' class='btn btn-primary' data-toggle='modal' data-target='#staticBackdropModify'>Editar</button>"},
            {"defaultContent":"<button id='borrar' class='btn btn-warning'>Borrar</button>"}
        ]
    });
} );

