<?php
    include '../../conexion.php';
    $id = $_POST['id'];

    $respuesta;

    if($id){
        $script = "SELECT * FROM vmware_datos WHERE id='$id'";
        $resultado = $conexion->query($script);
        if($resultado){
            while($data = $resultado->fetch_assoc()){
                $arreglo= array_map('utf8_encode', $data);
            }
            $resultado->free_result();
            echo json_encode($arreglo);
        }else{
            $respuesta = "Error";
        }
        $conexion->close();
    }else{
        $respuesta = "Errores";
    }

    echo $respuesta;

?>
