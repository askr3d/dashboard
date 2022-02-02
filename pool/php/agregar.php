<?php
    include '../../conexion.php';

    $servidor = $_POST['servidor'];
    $sistema = $_POST['sistema'];
    $ipLocal = $_POST['ipLocal'];
    $ipNavegacion = $_POST['ipNavegacion'];
    $comentarios = $_POST['comentarios'];

    
    if($servidor!="" && $sistema!="" && $ipLocal!="" && $ipNavegacion!=""){
        $script = "INSERT INTO servidores(servidor, sistema, ipLocal, ipNavegacion, comentarios) VALUES('$servidor', '$sistema', '$ipLocal', '$ipNavegacion', '$comentarios')";
        $resultado = $conexion->query($script);
        if($resultado){
            echo "exitoso";
        }
        $conexion->close();
    }else{
        echo "denegado";
    }
?>