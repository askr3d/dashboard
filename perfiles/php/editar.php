<?php
    session_start();
    require_once("../../conexion.php");
    $id = $_SESSION['id'];
    $columna = $_POST['columna'];
    $valor = $_POST['valor'];

    $script = "UPDATE dashboard_usuarios SET $columna = '$valor' WHERE id = $id";
    $consulta = $conexion->query($script);

    if($consulta){
        switch($columna){
            case "correo":
                session_destroy();
                echo 1;
                break;
            case "pass":
                session_destroy();
                echo 1;
                break;
            default:
                $script = "SELECT nombre,apellido FROM dashboard_usuarios WHERE id = '$id'";
                $consulta = $conexion->query($script);
                $row = $consulta->fetch_assoc();
                $consulta->free_result();
                $datos = array(ucwords($row['nombre']), ucwords($row['apellido']));
                echo json_encode($datos);
                break;
        }
    }else{
        echo 0;
    }
    $conexion->close();
?>