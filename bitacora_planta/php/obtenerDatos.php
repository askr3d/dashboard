<?php
    require_once '../../conexion.php';
    $id = $_POST['id'];

    $respuesta;

    if($id){
        $consulta = "SELECT * FROM ingresar WHERE id='$id'";
        $resultado = $conexion->query($consulta);
        if($resultado){
            while($data = $resultado->fetch_assoc()){
                $arreglo= array_map('utf8_encode', $data);
            }
            echo json_encode($arreglo);
        }else{
            $respuesta = "Error";
        }
        $resultado->free_result();
        $conexion->close();
    }else{
        $respuesta = "Error";
    }

    echo $respuesta;

?>