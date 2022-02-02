<?php
    require_once '../../conexion.php';

    $nombre = trim($_POST['nombre']);
    $apellidos = trim($_POST['apellidos']);
    $correo = strtolower($_POST['correo']);
    $pass = trim($_POST['pass']);
    $repass = trim($_POST['repass']);

   
    $coreoValido = "guadalajara.gob.mx";
    $subCorreo = substr($correo, strpos($correo, "@")+1);

    $respuesta;

    //Obtener correo del usuario
    $script = "SELECT correo FROM dashboard_usuarios WHERE correo = '$correo'";
    $existencia = $conexion->query($script);

    if($subCorreo!=$coreoValido){
        $respuesta=3;
    }else if($existencia){
        $respuesta=2;
    }
    else{
        if($pass === $repass){
            $script = "INSERT INTO dashboard_usuarios(nombre, apellido, correo, pass) VALUES('$nombre', '$apellidos', '$correo', '$pass')";
            $resultado = $conexion->query($script);
            if($resultado){
                $respuesta = 1;

            $chatid = "-1448293407";
            $mensaje = urlencode("Usuarios: Dashboard 
Nombre: $nombre 
Apellidos: $apellidos 
Correo: $correo 
Nivel: Por asignar");
            
                $response = file_get_contents("https://api.telegram.org/bot1945749109:AAEJ-ld4yqCkoC4A4yirM7vVWpOz-SGs4to/sendMessage?chat_id=".$chatid."&text=".$mensaje);
            }else{
                $respuesta = 0;
            }
        }else{
            $respuesta = 0;
        }
    }

    $conexion->close();

    echo $respuesta;
?>