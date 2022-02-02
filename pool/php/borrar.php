<?php
    include '../../conexion.php';

    $id = $_POST['id'];
    $scritpt = "DELETE FROM servidores WHERE id='$id'";
    echo $id;
    $conexion->query($scritpt);
    $conexion->close();
?>