<?php
    require_once '../../conexion.php';
    session_start();

    $correo = strtolower($_POST['correo']);
    $pass = $_POST['pass'];
    $usuario;

    $script = "SELECT * FROM dashboard_usuarios WHERE correo = '$correo' and pass = '$pass' ";
    $resultado = $conexion->query($script);
    

    /* while ($row = mysqli_fetch_row($resultado)) {
        $usuario =  $row['nombre']; 
    } */
    $row = $resultado->fetch_assoc();
    $resultado->free_result();
    $conexion->close();

    $usuario = $row['nombre'];

    if(!isset($usuario)){
        echo 2;
    }else{
        $nivel = $row['nivel'];
        $respuesta = 1;
    
        if(isset($nivel)){
            $_SESSION['usuario'] = $usuario;
            $_SESSION['nivel']= $nivel;
            $_SESSION['id'] = $row['id'];
            echo $respuesta;
        }else{
            $respuesta=0;
            echo $respuesta;
        }
    }

?>