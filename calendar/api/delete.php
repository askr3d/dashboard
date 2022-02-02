<?php
    require_once("../config.php");

    if(isset($_POST["id"])){
        $id = $_POST["id"];
        $script = "DELETE FROM events WHERE id = '$id'";
        $conexion->query($script);
    }
?>