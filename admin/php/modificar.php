<?php
    require_once("conexion.php");
    session_start();
    $id = $_POST['idModificar'];
    $nombre = trim($_POST['nombreModificar']);
    $apellido = trim($_POST['apellidoModificar']);
    $correo = trim($_POST['correoModificar']);
    $nivel = trim($_POST['nivelModificar']);
    $respuesta= array(0, "", 0, $_SESSION['id']);
    //Editor
    //Lector

    switch($nivel){
        case "administrador":
            $nivel=1;
            break;
        case "editor":
            $nivel=2;
            break;
        case "lector":
            $nivel=3;
            break;
        case "sinNivel":
            $nivel=4;
            break;
        default:
            $nivel=null;
            break;
    }
    if(isset($nivel)){
        if($nivel==4){
            $script = "UPDATE dashboard_usuarios SET nombre='$nombre', apellido='$apellido', 
                        correo='$correo', nivel=null WHERE id='$id'";
        }else{
            $script = "UPDATE dashboard_usuarios SET nombre='$nombre', apellido='$apellido', 
                        correo='$correo', nivel='$nivel' WHERE id='$id'";
        }
        $consulta = mysqli_query($conn, $script);
        $_SESSION['nivel']=$nivel;
        if(!$consulta){
            $respuesta[0]=0;
        }else{
            $respuesta[0]=1;
            if($nivel==4){
                $respuesta[0]=4;
                if($_SESSION['id']==$id){
                    session_destroy();   
                }
            }else if($nivel!=1){
                $respuesta[0]=2;
            }
            $respuesta[1] = ucwords($nombre);
            $respuesta[2] = $id;
        }
    }else{
        $respuesta[0]=0;
    }

    mysqli_close($conn);

    echo json_encode($respuesta);
    

?>