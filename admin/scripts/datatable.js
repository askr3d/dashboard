$(document).ready(function(){
    $("#myTable").DataTable({
        "ajax":{
            "method":"POST",
            "url":"admin/php/listar.php"
        },
        "columns":[
            {"data":"id"},
            {"data":"nombre"},
            {"data":"apellido"},
            {"data":"correo"},
            {"data":"nivel"},
            {"defaultContent":"<button id='editar' class='btn btn-primary' data-toggle='modal' data-target='#staticBackdropModify'>Editar</button>"},
            {"defaultContent":"<button id='borrar' class='btn btn-warning'>Borrar</button>"}
        ]
    });
});