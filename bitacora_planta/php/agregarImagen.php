<?php
    require_once '../../conexion.php';

    $id = trim($_POST['id']);

    //Total de imagenes
    $contadorImagenes = count($_FILES['agregarImagen']['name']);
    $carpeta = "../fotos/";
    $imagenesAceptadas= array();
    $imagenesExistentes= array();
    $imagenesNoAceptadas = array();
    /* $nombrePrueba = $_FILES['imagenM']['name'][1]; */


    //Existencia de las imagenes
    for($index = 0;$index<$contadorImagenes;$index++){
        if(isset($_FILES['agregarImagen']['name'][$index]) && $_FILES['agregarImagen']['name'][$index]!=""){
            $nombreImagen = $_FILES['agregarImagen']['name'][$index];
            if(file_exists("../fotos/".$nombreImagen)){
                $imagenesExistentes[]=$nombreImagen;
            }
        }
    }

        //Ciclo para las imagenes
        for($index = 0;$index<$contadorImagenes;$index++){
            if(isset($_FILES['agregarImagen']['name'][$index]) && $_FILES['agregarImagen']['name'][$index]!="" && !in_array($_FILES['agregarImagen']['name'][$index], $imagenesExistentes)){
                //Nombre de archivo
                $nombreImagen = $_FILES['agregarImagen']['name'][$index];
                //Obtener extension
                $ext_imagen = strtolower(pathinfo($nombreImagen, PATHINFO_EXTENSION));
                //Extensiones validas
                $validar = array("png");
                //Checar extension
                if(in_array($ext_imagen, $validar)){
                    //Destino
                    $destino = $carpeta.$nombreImagen;
                    $destino_liga = "fotos/".$nombreImagen;
                    
                    //Subir imagen
                    $dir = opendir($carpeta);
                    if(move_uploaded_file($_FILES["agregarImagen"]["tmp_name"][$index], $destino)){
                        //Ingresa datos de la imagen a la base de datos
                        $script = "INSERT INTO bitacora_imagenes(id_img, ruta, nombre) VALUES('$id','$destino_liga','$nombreImagen')";
                        $conexion->query($script);
                        $imagenesAceptadas[] = $nombreImagen;
                    }else{
                        $imagenesNoAceptadas[] = $nombreImagen;
                    }
                    closedir($dir);
                }else{
                    $imagenesNoAceptadas[] = $nombreImagen;
                }
            }else{
                if(!in_array($_FILES['agregarImagen']['name'][$index], $imagenesExistentes)){
                    $imagenesNoAceptadas[] = "No existe / Sin nombre";
                }
            }
        }
    

    $respuesta = array($imagenesAceptadas, $imagenesExistentes, $imagenesNoAceptadas, 0);
    if(count($imagenesAceptadas)){
        $respuesta[3]=1;
        //Actualiza la fecha y hora si se ha subido una imagen
    	$script = "UPDATE ingresar SET modificado = current_timestamp WHERE id='$id'";
    	$conexion->query($script);
    }

    $conexion->close();

    echo json_encode($respuesta);
?>
