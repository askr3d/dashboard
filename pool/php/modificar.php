<?php
    include '../../conexion.php';

    $id = $_POST['id'];
    $servidor = $_POST['servidor'];
    $sistema = $_POST['sistema'];
    $ipLocal = $_POST['ipLocal'];
    $ipNavegacion = $_POST['ipNavegacion'];
    $comentarios = $_POST['comentarios'];

    if($servidor!="" && $sistema!="" && $ipLocal!="" && $ipNavegacion!=""){
        $script = "UPDATE servidores SET servidor='$servidor', sistema='$sistema', ipLocal='$ipLocal', ipNavegacion='$ipNavegacion', comentarios='$comentarios' WHERE id='$id'";
        if($conexion->query($script)){
            echo "exitoso";
        }
    }else{
        echo "incompleto";
    }

    $conexion->close();
?>