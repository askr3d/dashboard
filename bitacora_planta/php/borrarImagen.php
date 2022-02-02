<?php
    require_once '../../conexion.php';

    $id = $_POST['id'];
    $nombreImagen = $_POST['nombre'];
    $respuesta=0;

    /* unlink(/directorio/mi-imagen.jpg); */

    $borrarImagen = unlink("../fotos/".$nombreImagen);
    if($borrarImagen){
        $borrar = "DELETE FROM bitacora_imagenes WHERE id_img='$id' and nombre='$nombreImagen'";
        $resultado = $conexion->query($borrar);
        if($resultado){
            $imagenStatus = "UPDATE ingresar SET modificado = current_timestamp WHERE id='$id'";
            $resultado= $conexion->query($imagenStatus);
            if($resultado)$respuesta=1;
        }
    }
    $conexion->close();
    echo $respuesta;

?>
