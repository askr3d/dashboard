<?php
    require_once("../../conexion.php");
    session_start();
    $id = $_SESSION['id'];
    $imagen = $_FILES['fotoPerfil']['name'][0];
    $carpeta = "../fotos/".$id;
    $ruta = "perfiles/fotos/".$id."/".$imagen;
    $respuesta=0;

    $extensionImagen = strtolower(pathinfo($imagen, PATHINFO_EXTENSION));
    $validar = array("png");
    if(in_array($extensionImagen, $validar)){
        if(!is_dir($carpeta)){
            $creacionCarpeta = mkdir($carpeta);
            if($creacionCarpeta){
                $dir = opendir($carpeta."/");
                if(move_uploaded_file($_FILES["fotoPerfil"]["tmp_name"][0], $carpeta."/".$imagen)){
                    $script = "INSERT INTO fotos_usuarios(id, ruta, nombre) VALUES('$id', '$ruta', '$imagen')";
                    $consulta= $conexion->query($script);
                    if($consulta)$respuesta=1;
                }
                closedir($dir);
            }
        }else{
            $script = "SELECT * FROM fotos_usuarios WHERE id='$id'";
            $consulta = $conexion->query($script);
            if($consulta){
                $row = $consulta->fetch_assoc();
                $consulta->free_result();
                $nombreImagen = $row["nombre"];

                $borrarImagen = unlink($carpeta."/".$nombreImagen);
                if($borrarImagen){
                    $dir = opendir($carpeta."/");
                    if(move_uploaded_file($_FILES["fotoPerfil"]["tmp_name"][0], $carpeta."/".$imagen)){
                        $script = "UPDATE fotos_usuarios SET ruta='$ruta', nombre='$imagen', creado= CURRENT_TIMESTAMP WHERE id='$id'";
                        $consulta = $conexion->query($script);
                        if($consulta)$respuesta=1;
                    }
                    closedir($dir);
                }
            }
        }
        $conexion->close();
    }else{
        $respuesta=2;
    }



    echo $respuesta;
    

?>