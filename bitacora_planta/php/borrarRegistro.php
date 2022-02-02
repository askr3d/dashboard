<?php
    require_once '../../conexion.php';

    $id = $_POST['id'];
    $respuesta=1;

    $borrarRegistro = "DELETE FROM ingresar WHERE id='$id'";
    $resultadoRegistro = $conexion->query($borrarRegistro);

    if($resultadoRegistro){
            $consultaImagen= "SELECT * FROM bitacora_imagenes WHERE id_img='$id'";
            $resultadoImagen= $conexion->query($consultaImagen) or die($conn->connect_error);

            if($resultadoImagen){
                while($datos=$resultadoImagen->fetch_assoc()){
                    $nombre = $datos['nombre'];
                    unlink("../fotos/".$nombre);
                }
                $resultadoImagen->free_result();
                $borrarImagen = "DELETE FROM bitacora_imagenes WHERE id_img='$id'";
                $conexion->query($borrarImagen);
            }else{
                $respuesta=0;
            }
    }else{
        $respuesta=0;
    }
    $conexion->close();

    echo $respuesta;
?>
