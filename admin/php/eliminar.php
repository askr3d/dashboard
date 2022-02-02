<?php
    require_once("conexion.php");
    $id = $_POST['id'];

    $script = "DELETE FROM dashboard_usuarios WHERE id='$id'";
    $consulta = mysqli_query($conn, $script);

    if($consulta){
        echo 1;
    }else{
        echo 0;
    }
?>