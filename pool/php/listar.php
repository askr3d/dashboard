<?php
    include '../../conexion.php';
    //Obtener datos de la tabla servidores
    $script = "SELECT * FROM servidores";
    $resultado = $conexion->query($script);

    if(!$resultado){
        die("Error");
    }else{
        while($data = $resultado->fetch_assoc()){
            $arreglo["data"][] = array_map('utf8_encode', $data);
        }
        echo json_encode($arreglo);
        $resultado->free_result();
    }
    $conexion->close();
?>