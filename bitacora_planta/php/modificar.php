<?php
    require_once("../../conexion.php");
    $id = $_POST['id'];
    $celda = $_POST['celda'];
    $valor = $_POST['valor'];
    $respuesta=0;
    
    $script = "UPDATE ingresar SET $celda='$valor', modificado=CURRENT_TIMESTAMP WHERE id='$id'";
    if($conexion->query($script)){
        $respuesta=1;
    }
    $conexion->close();


    echo $respuesta;
?>