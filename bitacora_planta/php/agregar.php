<?php

    require_once '../../conexion.php';

    $nombre = trim($_POST['nombre']." ".$_POST['apellido']);
    $cl1 = trim($_POST['cl1']);
    $cl2 = trim($_POST['cl2']);
    $cl3 = trim($_POST['cl3']);
    $pl1 = trim($_POST['pl1']);
    $pl2 = trim($_POST['pl2']);
    $pl3 = trim($_POST['pl3']);
    $frecuencia = trim($_POST['frecuencia']);
    $rpm = trim($_POST['rpm']);
    $horasu = trim($_POST['horasu']);
    $minu = trim($_POST['minu']);
    $horai = trim($_POST['horai']);
    $horat = trim($_POST['horat']);
    $carga = trim($_POST['carga']);
    $salida = trim($_POST['salida']);
    $temperatura = trim($_POST['temperatura']);
    $bar = trim($_POST['bar']);
    $psi = trim($_POST['psi']);
    $kpa = trim($_POST['kpa']);
    $nivel = trim($_POST['nivel']);
    $comentarios = trim($_POST['comentarios']);

    $respuesta;

    /* $ruta = "../fotos/";
    $imagen_nombre = $_FILES["imagen"]["name"];
    $destino = $ruta . basename($imagen_nombre);
    $destino_liga = "fotos/" . basename($imagen_nombre);
    $tipoImagen = strtolower(pathinfo($destino, PATHINFO_EXTENSION));
    $validar = array('png');
    $imagen_temp = $_FILES["imagen"]["tmp_name"];
    $respuesta = 1;

    if(file_exists($destino)){
        echo "Esta imagen ya existe";
        $respuesta = 0;
    }

    $dir = opendir($ruta);

    //Extension correcta
    if(!in_array($tipoImagen, $validar)){
        echo "Solo se permiten png";
        $respuesta = 0;
    } */

    //Subir datos
        $script = "INSERT INTO ingresar(nombre,cl1,cl2,cl3,pl1,pl2,pl3,frecuencia,rpm,horasuso,horai,horat,minuso,carga,salida,temperatura,bar,psi,kpa,nivel,comentarios)
        values('$nombre','$cl1','$cl2','$cl3','$pl1','$pl2','$pl3','$frecuencia','$rpm','$horasu','$horai','$horat','$minu','$carga','$salida','$temperatura','$bar','$psi','$kpa','$nivel','$comentarios')";
        if($conexion->query($script)){
            $respuesta=1;
        }
        /* if(move_uploaded_file($imagen_temp, $destino)){
            $resultado = mysqli_query($conn,$insertar);
            if($resultado){
                echo $respuesta;
            }else{
                echo "Ha ocurrido un error";
            }
        }else{
            echo "Ha ocurrido un error ". htmlspecialchars( basename($imagen_temp)) . $destino;
        }
        closedir($dir); */
    



    $conexion->close();

    echo $respuesta;

?>