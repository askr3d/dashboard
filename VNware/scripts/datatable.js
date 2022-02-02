$(document).ready( function () {
    $('#myTable').DataTable({
        "scrollX": true,
        "ajax": {
            "method":"POST",
            "url":"VNware/php/lista.php"
        },
        "columns":[
            {"data":"id"},
            {"data":"vmware"},
            {"data":"power"},
            {"data":"dns"},
            {"data":"conection"},
            {"data":"cpus"},
            {"data":"memoria"},
            {"data":"primario"},
            {"defaultContent":"<button id='editar' data-toggle='modal' data-target='#staticBackdropModify' class='btn btn-primary'>Editar</button>"},
            {"defaultContent":"<button id='borrarRegistro' class='btn btn-danger'>Borrar</button>"}
        ]
    });
} );
